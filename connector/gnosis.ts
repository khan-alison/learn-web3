import { Connection, ConnectionType } from "@/connector";
import { initializeConnector } from "@web3-react/core";
import { GnosisSafe } from "@web3-react/gnosis-safe";

export function buildGnosisSafeConnector() {
  const [web3GnosisSafe, web3GnosisSafeHooks] = initializeConnector<GnosisSafe>(
    (actions) => new GnosisSafe({ actions })
  );
  const gnosisSafeConnection: Connection = {
    connector: web3GnosisSafe,
    hooks: web3GnosisSafeHooks,
    type: ConnectionType.GNOSIS_SAFE,
  };
  return gnosisSafeConnection;
}
