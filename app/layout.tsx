"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Web3Provider from "web3-react";
import connectors from "@/connector";
import ClientOnly from "@/components/ClientOnly";

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
          <Web3Provider
            connectors={connectors}
            libraryName={"ethers.js" || "web3-react"}
          >
            {children}
          </Web3Provider>
        </ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
