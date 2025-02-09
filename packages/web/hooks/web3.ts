import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { providers } from 'ethers';
import { NETWORK } from 'src/constants';

const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 42, 69],
});

export const useRPCProvider = (id: 1 | 10 | 42 | 69) =>
  useMemo<providers.JsonRpcProvider>(() => new providers.JsonRpcProvider(NETWORK[id].rpc), []);

export const useWebSocketProvider = (id: 1 | 10 | 42 | 69) =>
  useMemo<providers.WebSocketProvider>(() => new providers.WebSocketProvider(NETWORK[id].ws), []);

export const useEthereum = (
  defaultSigner: boolean = true,
): {
  chainId: 1 | 42;
  provider: providers.JsonRpcProvider;
} => {
  // Default to mainnet
  const { chainId, library } = useWeb3React();

  let ethChainId: 1 | 42 = 1;
  if (!chainId || chainId === 10) {
    ethChainId = 1;
  } else if (chainId === 1 || chainId === 42) {
    ethChainId = chainId;
  } else if (chainId === 69) {
    ethChainId = 42;
  }

  const rpcProvider = useRPCProvider(ethChainId);
  const [provider, setProvider] = useState<providers.JsonRpcProvider>(rpcProvider);

  useEffect(() => {
    if (chainId && defaultSigner && chainId === ethChainId) {
      setProvider(library.getSigner());
    } else {
      setProvider(rpcProvider);
    }
  }, [chainId, defaultSigner, ethChainId, rpcProvider]);

  return { provider, chainId: ethChainId };
};

export const useOptimism = (): {
  chainId: 10 | 69;
  provider: providers.JsonRpcProvider;
} => {
  // Default to optimism mainnet
  const { chainId, library } = useWeb3React();

  let optimismChainId: 10 | 69 = 10;
  if (!chainId || chainId === 1) {
    optimismChainId = 10;
  } else if (chainId === 10 || chainId === 69) {
    optimismChainId = chainId;
  } else if (chainId === 42) {
    optimismChainId = 69;
  }

  const rpcProvider = useRPCProvider(optimismChainId);
  const [provider, setProvider] = useState<providers.JsonRpcProvider>(rpcProvider);

  useEffect(() => {
    if (chainId && chainId === optimismChainId) {
      setProvider(library.getSigner());
    } else {
      setProvider(rpcProvider);
    }
  }, [chainId, optimismChainId, rpcProvider]);

  return { provider, chainId: optimismChainId };
};

export const useIsContract = (account: string | null | undefined) => {
  const { provider } = useEthereum(false);
  const [isContract, setIsContract] = useState<Boolean>();

  useEffect(() => {
    if (account) {
      provider.getCode(account).then(code => setIsContract(code != '0x'));
    }
  }, [account, provider]);

  return isContract;
};

export const walletconnect = new WalletConnectConnector({
  rpc: Object.keys(NETWORK).reduce(
    (rpcs, chainId) => ({
      ...rpcs,
      [chainId]: NETWORK[parseInt(chainId, 10) as 1 | 10 | 42 | 69].rpc,
    }),
    {},
  ),
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const useWeb3Provider = (): {
  connect: (wallet: 'MetaMask' | 'WalletConnect') => Promise<void>;
} => {
  const { activate } = useWeb3React();

  const connect = useCallback(
    async (wallet: 'MetaMask' | 'WalletConnect'): Promise<void> => {
      const connector = wallet === 'MetaMask' ? injected : walletconnect;

      try {
        await activate(connector, undefined, true);
      } catch (error) {
        return Promise.reject(error);
      }

      return Promise.resolve();
    },
    [activate],
  );

  return { connect };
};

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only running on mount

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

export const useInactiveListener = (suppress: boolean = false) => {
  const { active, error, activate } = useWeb3React();

  useEffect((): any => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        // console.log("Handling 'connect' event")
        activate(injected);
      };
      const handleChainChanged = (chainId: string | number) => {
        // console.log("Handling 'chainChanged' event with payload", chainId)
        activate(injected);
      };
      const handleAccountsChanged = (accounts: string[]) => {
        // console.log("Handling 'accountsChanged' event with payload", accounts)
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId: string | number) => {
        // console.log("Handling 'networkChanged' event with payload", networkId)
        activate(injected);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
};

export const useWAGMI = () => {
  const { connector } = useWeb3React<Web3Provider>();
  const [activatingConnector, setActivatingConnector] = useState<any>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);
};

export const useLastestBlock = (): providers.Block | undefined => {
  const { chainId, provider } = useEthereum(false);
  const [latest, setLatest] = useState<providers.Block>();

  useEffect(() => {
    provider.getBlock('latest').then(setLatest);
    const interval = setInterval(() => {
      provider.getBlock('latest').then(setLatest);
    }, 5000);
    return () => clearInterval(interval);
  }, [provider, setLatest]);
  return latest;
};

export default useWeb3Provider;

export const useSwitchNetwork = (network: 1 | 10 | 42 | 69) => {
  const { chainId } = useWeb3React();
  if ((window as any).ethereum) {
    let params;
    if (chainId === network) {
      alert(
        `Optimistic Ethereum ${NETWORK[network].name} Network has already been added to Metamask.`,
      );
      return;
    } else {
      params = [
        {
          chainId: NETWORK[network].chainId,
          chainName: NETWORK[network].name,
          nativeCurrency: NETWORK[network].currency,
          rpcUrls: [NETWORK[network].rpcUrl],
          blockExplorerUrls: [NETWORK[network].etherscan],
        },
      ];
    }

    (window as any).ethereum
      .request({ method: 'wallet_addEthereumChain', params })
      .then(() => console.log('Success'))
      .catch((error: Error) => console.log('Error', error.message));
  } else {
    alert('Unable to locate a compatible web3 browser!');
  }
};
