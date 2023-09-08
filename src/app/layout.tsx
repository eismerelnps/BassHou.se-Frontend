import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import dynamic from "next/dynamic";

//This component contains all app feedbacks components
import FeedBackParent from "@/components/FeedBack/FeedBackParent";

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

export const metadata = {
  title: "BassHou.se",
  description:
    "The biggest database of Bass House Artists!",
};


//  const fontAwensomeKit = process.env.NEXT_PUBLIC_DB_API_APP

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="" /> */}
        
        {/* <Script
          src={`https://kit.fontawesome.com/${fontAwensomeKit}.js`}
          crossOrigin="anonymous"
        ></Script> */}
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <PersistProvider>
          <StoreProvider>
            <FeedBackParent />
            {children}
            <Analytics />
          </StoreProvider>
        </PersistProvider>
      </body>
    </html>
  );
}
