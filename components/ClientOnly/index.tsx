"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";

const ClientOnly = ({ children }: PropsWithChildren): React.ReactNode => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div className="min-h-screen min-w-full">{children}</div>;
};

export default ClientOnly;
