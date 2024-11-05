import { buffer } from "micro";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const requestBuffer = await buffer(req);
    const sig = req.headers["stripe-signature"];

    const event = stripe.webhooks.constructEvent(
      requestBuffer.toString(),
      sig,
      webhookSecret
    );

    switch (event.type) {
      case "invoice.payment_failed": {
        const invoiceFailed = event.data.object;
        const customerId = invoiceFailed.customer;

        // Default metadata structure
        const defaultMetadata = {
          storyBoardCount: '0',
          text2Video: '0',
          isSubscribed: 'false',
          activePlan: "free",
          subscriptionId: null,
        };

        // Update the customer's metadata to default values
        await stripe.customers.update(customerId, {
          metadata: defaultMetadata,
        });

        break;
      }
      case "invoice.payment_succeeded": {
        const invoiceSucceeded = event.data.object;
        const subscriptionId = invoiceSucceeded.subscription;
        const customerId = invoiceSucceeded.customer;

        // Retrieve the subscription to get the price ID
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const priceId = subscription.items.data[0].price.id;

        // Determine if the subscription is monthly or yearly
        const billingInterval = subscription.items.data[0].price.recurring.interval;

        // Default metadata structure
        let updatedMetadata = {
          storyBoardCount: '10',
          text2Video: '0',
          isSubscribed: 'true',
          activePlan: "free",
          subscriptionId: subscriptionId,
        };

        // Switch case based on the price ID
        switch (priceId) {
          case process.env.NEXT_PUBLIC_Y_LITE:
          case process.env.NEXT_PUBLIC_M_LITE:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '10',
              activePlan: `Lite ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_STANDARD:
          case process.env.NEXT_PUBLIC_M_STANDARD:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '40',
              text2Video: '10',
              activePlan: `Standard ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PLUS:
          case process.env.NEXT_PUBLIC_M_PLUS:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '100',
              text2Video: '30',
              activePlan: `Plus ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PRO:
          case process.env.NEXT_PUBLIC_M_PRO:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '200',
              text2Video: '50',
              activePlan: `Pro ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PREMIER:
          case process.env.NEXT_PUBLIC_M_PREMIER:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '700',
              text2Video: '150',
              activePlan: `Premier ${billingInterval}`,
            };
            break;
          default:
            // If the price ID does not match any of the known packages, do not change the metadata
            break;
        }

        // Update the customer's metadata in Stripe
        await stripe.customers.update(customerId, {
          metadata: updatedMetadata,
        });

        break;
      }

      case "customer.subscription.deleted":{
        const subscription = event.data.object;
        const customerId = subscription.customer;

        // Default metadata structure
        const defaultMetadata = {
          storyBoardCount: '0',
          text2Video: '0',
          isSubscribed: 'false',
          activePlan: "free",
          subscriptionId: null,
        };

        // Update the customer's metadata to default values
        await stripe.customers.update(customerId, {
          metadata: defaultMetadata,
        });

        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        const priceId = subscription.items.data[0].price.id;
        const billingInterval = subscription.items.data[0].price.recurring.interval;

        let updatedMetadata = {
          customerId,
          storyBoardCount: '10',
          text2Video: '0',
          isSubscribed: 'true',
          activePlan: 'free',
          subscriptionId: subscription.id,
        };

        switch (priceId) {
          case process.env.NEXT_PUBLIC_Y_LITE:
          case process.env.NEXT_PUBLIC_M_LITE:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '10',
              activePlan: `Lite ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_STANDARD:
          case process.env.NEXT_PUBLIC_M_STANDARD:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '40',
              text2Video: '10',
              activePlan: `Standard ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PLUS:
          case process.env.NEXT_PUBLIC_M_PLUS:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '100',
              text2Video: '30',
              activePlan: `Plus ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PRO:
          case process.env.NEXT_PUBLIC_M_PRO:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '200',
              text2Video: '50',
              activePlan: `Pro ${billingInterval}`,
            };
            break;
          case process.env.NEXT_PUBLIC_Y_PREMIER:
          case process.env.NEXT_PUBLIC_M_PREMIER:
            updatedMetadata = {
              ...updatedMetadata,
              storyBoardCount: '700',
              text2Video: '150',
              activePlan: `Premier ${billingInterval}`,
            };
            break;
          default:
            // Keep default metadata if the price ID is unknown
            break;
        }
      }

      default: {
        res.status(200).json({ success: true });
      }
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error handling webhook event:", error);
    res.status(500).json({ error: error.message });
  }
}
