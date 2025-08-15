"use client";

import { config } from "@/config";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren } from "react";
import { WagmiProvider } from "wagmi";

// React Query client
const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DynamicContextProvider
          settings={{
            // Find your environment id at https://app.dynamic.xyz/dashboard/developer
            environmentId:
              process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID ||
              "d32dce1b-2c12-4c0f-937c-9fcc2f4b2249",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          {children}
        </DynamicContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
