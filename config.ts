export enum Chain {
  APOTHEM,
  MAINNET,
}

interface ExampleConfig {
  chain: Chain;
  rpc: {
    apothem: string;
    mainnet: string;
  };
}

export const CurrentConfig: ExampleConfig = {
  chain: Chain.MAINNET,
  rpc: {
    apothem: "",
    mainnet: "",
  },
};
