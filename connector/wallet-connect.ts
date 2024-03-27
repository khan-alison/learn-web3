import { Connection, ConnectionType, onConnectionError } from "@/connector";
import { CHAIN_TO_URL_MAP } from "@/connector/constants";
import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

const buildWalletConnectConnector = () => {
  const [web3WalletConnect, web3WalletConnectHook] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            rpc: CHAIN_TO_URL_MAP,
            qrcode: true,
          },
          onError: onConnectionError,
        })
    );
  const walletConnectConnection: Connection = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHook,
    type: ConnectionType.WALLET_CONNECT,
  };

  return walletConnectConnection;
};

export default buildWalletConnectConnector;
