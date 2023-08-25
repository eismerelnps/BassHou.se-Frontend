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
      <body className={`${inter.className} bg-gray-100`}>
        <PersistProvider>
          <StoreProvider>
            <SearchBar />
            <div className='bg-[#efed84] fixed top-72  w-full h-12 z-0'>

            </div>
            {children}
          </StoreProvider>
        </PersistProvider>
      </body>
    </html>
  );
}
