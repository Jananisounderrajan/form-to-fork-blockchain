const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  contracts_directory: './contracts',           // Contract source code
  contracts_build_directory: './build/contracts', // Compiled contract artifacts

  networks: {
    // Local development (Ganache)
    development: {
      host: '127.0.0.1',  // Localhost
      port: 7545,         // Ganache GUI default port
      network_id: '*',    // Match any network id
    },

    // Rinkeby (deprecated, only if needed)
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Gas limit
      confirmations: 2,    // # of confirmations to wait between deployments
      timeoutBlocks: 200,  // # of blocks before deployment times out
      skipDryRun: true,    // Skip dry run before migrations
    },

    // Goerli Testnet
    goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 5,       // Goerli's id
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Test settings
  mocha: {
    timeout: 100000,
  },

  // Solidity compiler
  compilers: {
    solc: {
      version: '0.8.19', // Match your contract pragma
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  db: {
    enabled: false,
  },
};
