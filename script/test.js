const main = async () => {

    const helloContractFactory = await hre.ethers.getContractFactory("feedBack");
    const helloContract = await helloContractFactory.deploy();
    await helloContract.waitForDeployment();
   
    const test = await helloContract.getMessage();
    console.log(test);

    await helloContract.incrementCount();
    await helloContract.incrementCount();
    await helloContract.incrementCount();

     await helloContract.getTotalCount();
   
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