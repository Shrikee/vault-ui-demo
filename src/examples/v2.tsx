// src/examples/v2.tsx
import React, { useEffect } from "react";
import {
  ChakraProvider,
  extendTheme,
  Box,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import DepositButton from "../components/v1/DepositButton";
import PendingDelayedWithdraws from "../components/v1/PendingDelayedWithdraws";
import DelayWithdrawButton from "../components/v1/DelayWithdrawButton";
import { createRoot } from "react-dom/client";
import {
  BoringVaultV1Provider,
  useBoringVaultV1,
} from "../contexts/v1/BoringVaultContextV1";
import { WagmiProvider, createConfig, http } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ConnectKitButton,
  ConnectKitProvider,
  getDefaultConfig,
} from "connectkit";
import { ethers } from "ethers";
import { useEthersSigner } from "../hooks/ethers";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
      ),
    },

    // Required API Keys
    // ! https://cloud.walletconnect.com/sign-in
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "Boring Vault mainnet Example App with Direct Withdraws",

    // Optional App Info
    appDescription: "An example app for the Boring Vault V1",
    appUrl: "http://localhost:9000", // your app's url
  })
);
const ethersInfuraProvider = new ethers.InfuraProvider(
  "mainnet",
  process.env.INFURA_API_KEY
);

const queryClient = new QueryClient();

// Customize the theme to fit your branding or design needs
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ... (provide your brand colors)
    },
  },
  components: {
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: "brand.100",
        },
      }),
    },
  },
});

const VaultWidget = () => {
  const [assets, setAssets] = React.useState<number>(0);
  const {
    fetchTotalAssets,
    isBoringV1ContextReady,
    fetchUserShares,
    fetchShareValue,
    fetchUserUnlockTime,
  } = useBoringVaultV1();
  const signer = useEthersSigner();

  useEffect(() => {
    console.warn("ready: ", isBoringV1ContextReady);
    if (!isBoringV1ContextReady) return;
    fetchTotalAssets().then((assets) => {
      console.log("Total assets: ", assets);
      setAssets(assets);
    });
  }, [isBoringV1ContextReady]);

  const [userShares, setUserShares] = React.useState<number>(0);
  useEffect(() => {
    if (!isBoringV1ContextReady || !signer) return;
    const fetchShares = async () => {
      const address = await signer.getAddress();
      fetchUserShares(address)
        .then((shares) => {
          console.log("User shares: ", shares);
          setUserShares(shares);
        })
        .catch((error) => console.error("Failed to fetch user shares:", error));
    };

    fetchShares();
  }, [isBoringV1ContextReady, signer]);

  const [shareValue, setShareValue] = React.useState<number>(0);
  useEffect(() => {
    if (!isBoringV1ContextReady) return;
    fetchShareValue().then((value) => {
      console.log("Share value: ", value);
      setShareValue(value);
    });
  }, [isBoringV1ContextReady]);

  const [userUnlockTime, setUserUnlockTime] = React.useState<number>(0);
  useEffect(() => {
    if (!isBoringV1ContextReady || !signer) return;

    const fetchUnlockTime = async () => {
      const address = await signer.getAddress();
      fetchUserUnlockTime(address)
        .then((unlockTime) => {
          console.log("User unlock time: ", unlockTime);
          setUserUnlockTime(unlockTime);
        })
        .catch((error) =>
          console.error("Failed to fetch user unlock time:", error)
        );
    };

    fetchUnlockTime();
  }, [isBoringV1ContextReady, signer]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.100"
      >
        <VStack>
          <Text fontSize="xl" fontWeight={"bold"}>
            Boring Vault Example
          </Text>
          <Text fontSize="l">{`TVL (WBTC): ${assets}`}</Text>
          <Text fontSize="md">{`Share (1 unit) Value (WBTC): ${shareValue}`}</Text>
          <Text fontSize="md">{`User Share Balance: ${userShares}`}</Text>
          <Text fontSize="md">{`User Share Unlock Unix seconds timestamp: ${userUnlockTime}`}</Text>
          <HStack spacing="2" paddingBottom={"2em"}>
            <DepositButton
              title="Example Vault"
              bottomText="
                  All vaults contain smart contract risk and various degrees of economic risk. This includes, but is not limited to, liquidity provisioning which can result in impermanent loss and use of leverage, meaning there is liquidation risk
                "
              buttonText="Deposit Funds"
              popupText="Welcome to the deposit interface!"
              buttonProps={{
                colorScheme: "teal",
                size: "lg",
                shadow: "md",
                _hover: {
                  bg: "teal.600",
                },
              }}
              modalOverlayProps={{
                bg: "blackAlpha.300",
              }}
              modalContentProps={{
                mx: 4,
                rounded: "lg",
                shadow: "xl",
              }}
              modalBodyProps={{
                p: 6,
              }}
              modalCloseButtonProps={{
                size: "lg",
                _focus: {
                  boxShadow: "none",
                },
              }}
            />
            <DelayWithdrawButton
              title="Example Vault"
              bottomText="
                  Once you request a withdraw you will be able to claim your shares after some time, please come back to check on the status of your withdraw and claim your funds when ready.
                "
              buttonText="Withdraw"
              popupText="Welcome to the delay withdraw interface!"
              buttonProps={{
                colorScheme: "teal",
                size: "lg",
                shadow: "md",
                _hover: {
                  bg: "teal.600",
                },
              }}
              modalOverlayProps={{
                bg: "blackAlpha.300",
              }}
              modalContentProps={{
                mx: 4,
                rounded: "lg",
                shadow: "xl",
              }}
              modalBodyProps={{
                p: 6,
              }}
              modalCloseButtonProps={{
                size: "lg",
                _focus: {
                  boxShadow: "none",
                },
              }}
            />
          </HStack>
          <PendingDelayedWithdraws title="Pending Delay Withdraws" />
        </VStack>
      </Box>
    </>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <ConnectKitButton />
            <BoringVaultV1Provider
              chain="mainnet"
              vaultContract="0x4E34a7B04e6DF1e4C5dF68A30dC8460F63873F74"
              tellerContract="0x6EDfa0315A6d9476057681292Fef5cfcBE8B8D31"
              accountantContract="0x0675A0E2F2885fC391Bd6f626939e89b90D04444"
              lensContract="0x65bf8AcAac9E7dCeBD5A7b6A50640B0901283d85"
              delayWithdrawContract="0x6F26eD1b8b83679A5baa5F92821ad1185f353925"
              ethersProvider={ethersInfuraProvider}
              depositTokens={[
                {
                  displayName: "WBTC",
                  image:
                  "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png?v=002",
                  address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                  decimals: 8,
                },
              ]}
              withdrawTokens={[
                {
                  displayName: "WBTC",
                  image:
                  "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png?v=002",
                  address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                  decimals: 8,
                },
              ]}
              baseAsset={{
                displayName: "WBTC",
                image:
                  "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png?v=002",
                  address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                  decimals: 8,
              }}
              vaultDecimals={18}
            >
              <VaultWidget />
            </BoringVaultV1Provider>
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
};

const element = document.getElementById("root");
const root = createRoot(element!);
root.render(<App />);
