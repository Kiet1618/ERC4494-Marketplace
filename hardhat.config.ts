import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    bsctest: {
      url: process.env.RPC_ENDPOINT || "https://bsc-testnet.publicnode.com",
      accounts: [process.env.PRIV_KEY as string]
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.PRIV_KEY_LOCAL as string]
    }
  },
  etherscan: {
    apiKey: process.env.API_BSC_TEST
  }
};

export default config;
