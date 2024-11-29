import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL ?? "",
      accounts: [process.env.PRIVATE_SEPOLIA_ACCOUNT_KEY ?? ""],
    },
  },
};

export default config;
