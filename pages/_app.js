import "../styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionProvider from "../context/SubscriptionProvider";
import Layout from "/components/Layout";
const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          //helpPageUrl: "https://aividoo.com/contact",
          //privacyPageUrl: "https://aividoo.com/privacy-policy",
          //termsPageUrl: "https://aividoo.com/terms",
        },
      }}
    >
      <SubscriptionProvider>
        <Layout>
          <CrispWithNoSSR />
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Layout>
      </SubscriptionProvider>
    </ClerkProvider>
  );
};

export default MyApp;
