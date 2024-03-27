"use client";

import React from "react";

type TConnectButton = {
  onClick: () => void;
};

const ConnectButton = ({ onClick }: TConnectButton): React.ReactNode => {
  return <button onClick={onClick}>ConnectButton</button>;
};

export default ConnectButton;
