import "./globals.css";
import { Inter } from "next/font/google";

import Script from "next/script";
import dynamic from "next/dynamic";


import React from 'react';

import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from "redux-persist/integration/react";
//import { persistor, storeCore } from "@/store/storeCore";
import { persistor, store } from "@/store/store";
import SearchBar from "@/components/SearchBar/SearchBar";
import Modal from "@/components/FeedBack/Modal";
import DeleteModal from "@/components/FeedBack/DeleteModal";
import BackDrop from "@/components/FeedBack/BackDrop";
import EditArtistForm from "@/components/FeedBack/EditArtistForm/EditArtistForm";

const StoreProvider = dynamic(
  () => import("@/components/Provider/StoreProvider"),
  {
    ssr: false,
  }
);
const PersistProvider = dynamic(
  () => import("@/components/Provider/PersistProvider"),
  {
    ssr: false,
  }
);
const inter = Inter({ subsets: ["latin"] });

const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="" /> */}
         <Script src={`https://www.googletagmanager.com/gtag/${id}`}  />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${id});
        `}
        </Script> 
        {/* <Script
          src="https://kit.fontawesome.com/b88354b395.js"
          crossorigin="anonymous"
        ></Script> */}
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <PersistProvider>
          <StoreProvider>
            <EditArtistForm />
            <BackDrop />
            <Modal />
            <DeleteModal />
            {children}
          </StoreProvider>
        </PersistProvider>
      </body>
    </html>
  );
}
