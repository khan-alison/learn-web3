import {
  ConnectionType,
  PRIORITIZED_CONNECTORS,
  getConnection,
} from "@/connector";
import { Web3ReactProvider } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import React, { useEffect } from "react";

const connect = async (connector: Connector) => {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.log(`web3-react eager connection error: ${error}`);
  }
};

const connectEagerly = async () => {
  await connect(getConnection(ConnectionType.NETWORK).connector);
  await connect(getConnection(ConnectionType.GNOSIS_SAFE).connector);
};

export const Web3ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    connectEagerly();
  }, []);

  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map((connector) => [
        connector.connector,
        connector.hooks,
      ])}
    >
      {children}
    </Web3ReactProvider>
  );
};
