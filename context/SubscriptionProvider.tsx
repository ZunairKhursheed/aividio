// @ts-nocheck
import { useEffect, useState } from 'react';
import SubscriptionContext from './SubscriptionContext';
import { useUser } from '@clerk/nextjs';
import Stripe from 'stripe';
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const handleCustomerSubscription = async (email) => {
    try {
        // Step 1: Retrieve or create customer by email
        const customers = await stripe.customers.list({ email: email, limit: 1 });

        let customer;
        if (customers.data.length > 0) {
            customer = customers.data[0];
        } else {
            customer = await stripe.customers.create({ email: email });
        }

        // Step 2: Check for any active subscriptions
        const subscriptions = await stripe.subscriptions.list({
            customer: customer.id,
            status: 'active',
            limit: 1,
        });

        // Step 3: Define default metadata
        const defaultMetadata = {
            storyBoardCount: '10',
            customerId: customer.id,
            text2Video: '0',
            isSubscribed: 'false',
            activePlan: "free",
            subscriptionId: null,
        };

        // Step 4: Handle clerkUserId and metadata
        let newMetadata = { ...customer.metadata };

        if (newMetadata.clerkUserId) {
            delete newMetadata.clerkUserId;

            // Only apply defaultMetadata if the metadata is now empty (after removing clerkUserId)
            if (Object.keys(newMetadata).length === 0) {
                newMetadata = { ...defaultMetadata };
            }

            // Update metadata on Stripe
            await stripe.customers.update(customer.id, {
                metadata: newMetadata,
            });
        } else if (Object.keys(customer.metadata).length === 0) {
            // If metadata is empty, apply the default metadata
            await stripe.customers.update(customer.id, {
                metadata: defaultMetadata,
            });
        }

        // Step 5: Return subscription status and updated metadata
        if (subscriptions.data.length > 0) {
            // Active subscription found
            return { subscription: true, metadata: customer.metadata };
        } else {
            // No active subscription
            return { subscription: false, metadata: customer.metadata };
        }
    } catch (error) {
        console.error('Error handling customer subscription:', error);
        throw error; // Rethrow the error after logging it
    }
};


async function createCheckoutSession(customerId, priceId) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer: customerId,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: process.env.NEXT_PUBLIC_SUCCESS_URL,
            cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL,
        });

        return {
            success: true,
            url: session.url,
        };
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return {
            success: false,
            message: error.message,
        };
    }
}

async function cancelSubscription(subscriptionId) {
    try {
        const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: true,
        });
        console.log(`Subscription with ID ${subscriptionId} will be canceled at the end of the billing period.`);
        return updatedSubscription;
    } catch (error) {
        console.error(`Failed to set cancellation for subscription: ${error.message}`);
        throw error;
    }
}

async function updateSubscriptionPlan(subscriptionId, newPriceId, isUpgrade) {
    try {
        // Retrieve the current subscription
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const currentPrice = subscription.items.data[0].price.id;
        const currentItemId = subscription.items.data[0].id;

        // If this is an upgrade, charge immediately
        if (isUpgrade) {
            // Cancel the current subscription immediately and apply the new plan
            const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
                cancel_at_period_end: false, // Cancel the current plan immediately
                items: [{
                    id: currentItemId,
                    price: newPriceId,
                }],
                proration_behavior: 'create_prorations', // Charge the user immediately for the upgrade
                billing_cycle_anchor: 'now', // Reset the billing cycle to start immediately
            });

            // Metadata update and billing interval calculation
            const billingInterval = updatedSubscription.items.data[0].price.recurring.interval;
            let updatedMetadata = {
                storyBoardCount: '10',
                text2Video: '0',
                isSubscribed: 'true',
                activePlan: 'free',
                subscriptionId: subscriptionId,
            };

            // Switch case based on the new price ID
            switch (newPriceId) {
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
                    break;
            }

            // Update the customer's metadata in Stripe
            await stripe.customers.update(updatedSubscription.customer, {
                metadata: updatedMetadata,
            });

            console.log('Subscription upgraded and metadata updated successfully!');
            return { message: 'Subscription upgraded and charged immediately!' };

        } else {
            // For downgrades, apply at the end of the billing cycle
            const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
                cancel_at_period_end: false,
                items: [{
                    id: currentItemId,
                    price: newPriceId,
                }],
                proration_behavior: 'none', // No immediate charge; plan starts at the next billing cycle
                billing_cycle_anchor: 'unchanged', // Keep the current cycle intact
            });

            console.log('Subscription downgrade scheduled at the end of the cycle');
            return { message: 'Subscription downgrade scheduled successfully!' };
        }
    } catch (error) {
        console.error('Error updating subscription:', error);
        return { message: 'Failed to update subscription', error: error.message };
    }
}




const MyProvider = ({ children }) => {
    const [subscriptionData,setSubscriptionData] = useState(null);
    const [loading,setLoading] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user?.primaryEmailAddress?.emailAddress);


    const decreaseStoryBoardAndImage2VideoCount = async (email) => {
        try {
            // Step 1: Retrieve the customer by email
            const customers = await stripe.customers.list({ email: email, limit: 1 });

            if (customers.data.length === 0) {
                throw new Error('Customer not found.');
            }

            const customer = customers.data[0];

            // Step 2: Get current storyBoardCount from metadata and convert it to a number
            const storyBoardCount = parseInt(customer.metadata.storyBoardCount || '10', 10);

            // Step 3: Decrease storyBoardCount by 1, ensuring it doesn't go below 0
            const newStoryBoardCount = Math.max(0, storyBoardCount - 1);

            // Step 4: Update the customer's metadata with the new storyBoardCount (converted back to string)
            await stripe.customers.update(customer.id, {
                metadata: {
                    ...customer.metadata,
                    storyBoardCount: newStoryBoardCount.toString(),  // Ensure it's a string
                },
            });

            await handleCustomerSubscription(customer.email);

            // Return the updated metadata
            return {
                success: true,
                message: `storyBoardCount decreased to ${newStoryBoardCount}`,
                metadata: {
                    ...customer.metadata,
                    storyBoardCount: newStoryBoardCount.toString(), // Return updated count as string
                },
            };
        } catch (error) {
            console.error('Error decreasing storyBoardCount:', error);
            return { success: false, message: error.message };
        }
    };

    const decreaseText2VideoCount = async (email) => {
        try {
            // Step 1: Retrieve the customer by email
            const customers = await stripe.customers.list({ email: email, limit: 1 });

            if (customers.data.length === 0) {
                throw new Error('Customer not found.');
            }

            const customer = customers.data[0];

            // Step 2: Get current text2Video from metadata and convert it to a number
            const text2Video = parseInt(customer.metadata.text2Video || '0', 0); // Default to 0 if not present

            // Step 3: Decrease text2Video by 1, ensuring it doesn't go below 0
            const newText2VideoCount = Math.max(0, text2Video - 1);

            // Step 4: Update the customer's metadata with the new text2Video count (converted back to string)
            await stripe.customers.update(customer.id, {
                metadata: {
                    ...customer.metadata,
                    text2Video: newText2VideoCount.toString(), // Ensure it's a string
                },
            });

            // Optional: Handle subscription or other post-update actions
            await handleCustomerSubscription(customer.email);

            // Return updated metadata
            return {
                success: true,
                message: `text2Video decreased to ${newText2VideoCount}`,
                metadata: {
                    ...customer.metadata,
                    text2Video: newText2VideoCount.toString(), // Return updated count as string
                },
            };
        } catch (error) {
            console.error('Error decreasing text2Video count:', error);
            return { success: false, message: error.message };
        }
    };






    const value={
        subscriptionData,
        decreaseStoryBoardAndImage2VideoCount,
        decreaseText2VideoCount,
        createCheckoutSession,
        handleCustomerSubscription,
        cancelSubscription,
        updateSubscriptionPlan
        
    }
    useEffect(()=>{
        setLoading(true)
        if(user){
            handleCustomerSubscription(user?.primaryEmailAddress?.emailAddress)
                .then(result => {
                    console.log(result);
                    setLoading(false);
                    setSubscriptionData(result);
                })
                .catch(error => {
                    setLoading(false);
                    console.error(error)
                });

        }else{
            setSubscriptionData(null)
        }

    }, [user?.primaryEmailAddress?.emailAddress]);

    return (
        <SubscriptionContext.Provider value={value}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export default MyProvider;
