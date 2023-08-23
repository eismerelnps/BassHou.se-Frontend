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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PersistProvider>
          <StoreProvider>
            {children}
          </StoreProvider>
        </PersistProvider>
      </body>
    </html>
  );
}
