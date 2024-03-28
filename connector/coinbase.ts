import { Connection, ConnectionType, onConnectionError } from "@/connector";
import { INPUT_CHAIN_URL } from "@/connector/constants";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";

const buildCoinbaseWalletConnector = () => {
  const [web3CoinbaseWallet, web3CoinbaseWalletHooks] =
    initializeConnector<CoinbaseWallet>(
      (actions) =>
        new CoinbaseWallet({
          actions,
          options: {
            url: INPUT_CHAIN_URL,
            appName: "Coinbase",
          },
          onError: onConnectionError,
        })
    );
  const coinbaseWalletConnection: Connection = {
    connector: web3CoinbaseWallet,
    hooks: web3CoinbaseWalletHooks,
    type: ConnectionType.COINBASE_WALLET,
  };

  return coinbaseWalletConnection;
};

export default buildCoinbaseWalletConnector;
