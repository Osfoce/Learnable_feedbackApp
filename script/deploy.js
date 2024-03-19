const { ethers } = require("hardhat");

const main = async () => {

    const accounts = await ethers.getSigners();
    const deployerAddress = await accounts[0].getAddress(); // Assuming deployer is the first account
    const accountBalance = await ethers.provider.getBalance(deployerAddress);


    // const [deployer] = await hre.ethers.getSigners();
    // const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account:", deployerAddress);
    console.log("Account balance:", accountBalance.toString());

    const helloContractFactory = await hre.ethers.getContractFactory("feedBack");
    const helloContract = await helloContractFactory.deploy();
    await helloContract.waitForDeployment();

    console.log("Contract deployed to: " , helloContract.address);
   

}
   
   const runMain = async () => {
    try {
        await main();
        process.exit(0);
   } catch (error) {
       console.log(error);
       process.exit(1);
   }

   }
   
   runMain();