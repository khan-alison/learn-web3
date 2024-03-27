"use client";

import { InjectedConnector } from "@web3-react/injected-connector";

const Metamask = new InjectedConnector({ supportedChainIds: [50] });

const connectors = { Metamask };
export default connectors;
