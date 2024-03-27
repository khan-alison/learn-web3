"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Web3Provider from "web3-react";
import ClientOnly from "@/components/ClientOnly";
import { Web3ContextProvider } from "@/components/Web3ContextProvider";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Web3ContextProvider>{children}</Web3ContextProvider>
        </ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
