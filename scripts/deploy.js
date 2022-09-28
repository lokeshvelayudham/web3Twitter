const main = async () => {
    const [deployer] = await hre.ethers.getSigners(); // deployer array - login address
    const accountBalance = await deployer.getBalance(); // deployer balance 
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // complie & generater in articrafts
    const waveContract = await waveContractFactory.deploy(); // local network deployment 
    await waveContract.deployed(); // deployed 
  
    console.log("WavePortal address: ", waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); //  exit Node process while indicating 'Uncaught Fatal Exception' error
    }
  };
  
  runMain();