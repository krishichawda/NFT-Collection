const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  // URL from where we can extract the metadata for a Crypto Dev NFT 
  const metadataURL = METADATA_URL;

  /**
   * A contractFactory in ethers.js is an abstraction used to deploy new Smart contracts,
   * so cryptoDevsContract here is a factory for instances of our CryptoDevs Contract.
   */

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract

  console.log("Crypto Devs Contract Address: ", deployedCryptoDevsContract.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


