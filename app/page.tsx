"use client";

import ConnectButton from "@/components/ConnectButton";
import connectors from "@/connector";
import { NextPage } from "next";
import React from "react";
import { useWeb3React } from "@web3-react/core";

const Home: NextPage = (): React.ReactNode => {
  const { activate, active, error } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(connectors.Metamask);
      console.log("a");
    } catch (err) {
      console.error("Error on connecting: ", err);
    }
  };

  return (
    <>
      <ConnectButton onClick={connectWallet} />
    </>
  );
};

export default Home;
