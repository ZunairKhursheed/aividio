import Link from "next/link";
import Head from 'next/head';
import { useContext } from 'react';
import PrivacyPolicy from "../components/PrivacyPolicy";



export default function Home() {
  
  return (
    <>

      <Head>
        <title>Privay Policy | AIVIDOO</title>
        <meta name="description" content="AIVIDOO Privacy Policy" />
        <link rel="icon" href="/aividoo_logo.png" />
      </Head>

      <main className="p-10 mx-auto max-w-4xl">
      
      <div className="relative pt-20 ml-auto">
        <div className="inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-20 bg-gradient-to-r from-yellow-400 to-orange-600 dark:to-indigo-600"></div>
        <div className="blur-[106px] h-30 bg-gradient-to-r from-orange-600 to-red-400 dark:from-red-700"></div>
        </div>
        
      <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-white sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-gray-700 mx-auto mt-6 max-w-xl text-xl leading-7">
          AIVIDOO is a premier generative AI platform that prioritizes the protection of data and user experience for all of our users.
          </p>
        </div>
        
       

      </div>
      <PrivacyPolicy />
      </main>
    </>

  );
}
