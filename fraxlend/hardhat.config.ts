import * as fs from 'fs';
import { config as dotenvConfig } from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-gas-reporter';
import 'hardhat-preprocessor';
import 'solidity-coverage';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-contract-sizer';

dotenvConfig();

// Ensure that we have all the environment variables we need.
// const mnemonic = process.env.MNEMONIC as string;
// const mainnetUrl = process.env.MAINNET_URL as string;

const chainIds = {
  hardhat: 1337,
  arbitrum: 42161,
  mainnet: 1,
  'polygon-mainnet': 137,
  rinkeby: 4,
};

function getRemappings() {
  return fs
    .readFileSync('remappings.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim().split('='));
}

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  gasReporter: {
    currency: 'USD',
    enabled: true,
    excludeContracts: [],
    src: './contracts',
  },
  networks: {
    hardhat: {
      gas: 'auto',
      accounts: [{ privateKey: process.env.PRIVATE_KEY as string, balance: '0' }],
      chainId: chainIds.hardhat,
      // forking: {
      //   url: mainnetUrl,
      //   blockNumber: Number.parseInt(process.env.DEFAULT_FORK_BLOCK as string),
      // },
    },
    arbitrum: {
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: chainIds.arbitrum,
      url: `https://arb1.arbitrum.io/rpc`,
    },
    // mainnet: {
    //   accounts: [process.env.PRIVATE_KEY as string],
    //   chainId: chainIds.mainnet,
    //   url: mainnetUrl,
    // },
    // "polygon-mainnet": {
    //   accounts: [process.env.PRIVATE_KEY as string],
    //   chainId: chainIds["polygon-mainnet"],
    //   url: process.env.POLYGON_MAINNET_URL,
    //   timeout: 100000,
    // },
    // rinkeby: {
    //   accounts: {
    //     mnemonic
    //   },
    //   chainId: chainIds.rinkeby,
    //   url: process.env.RINKEBY_URL,
    // },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './src/contracts',
    tests: './src/test',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.24',
        settings: {
          // viaIR: true,
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
            bytecodeHash: 'none',
          },
          // Disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  preprocess: {
    eachLine: (hre) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match('"' + find)) {
              line = line.replace('"' + find, '"' + replace);
            }
          });
        }
        return line;
      },
    }),
  },
};

export default config;
