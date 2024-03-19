require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  // networks: {
  //   sepolia: {
  //     url: "https://broken-lively-mound.ethereum-sepolia.quiknode.pro/5881b98950d4fa5a5ea2b86f93622bc3e81e7c4a/", // Default RPC URL for Hardhat node
        // accounts = ["0x..."];
  //   },
  // },
};

task("accounts","Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
}
  )