const main = async () => {
const [owner, randomPerson] = await hre.ethers.getSigners(); // hardaht calls owner & random address
const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile & gnenrate in articrafts folder 
const waveContract = await waveContractFactory.deploy(); // deploy local etherum network
await waveContract.deployed(); // deployed to our local 

console.log("contract develpoed by :", owner.address);  // address of the developed 
console.log("contract deployed to : ", waveContract.address); // gives address of the deployed contract 

let waveCount;
waveCount = await waveContract.getTotalWaves(); //counts the waves (init 0)

let waveTxn = await waveContract.wave(); // wave is happend 
await waveTxn.wait (); // waiting 

waveCount = await waveContract.getTotalWaves(); // count is increased to 1

waveTxn = await waveContract.connect(randomPerson).wave(); // connecting random perosn and waving 
await waveTxn.wait (); // waiting 
waveCount = await waveContract.getTotalWaves(); // count is increased to 2


}
const runMain = async () => {
try {
    await main();
    process.exit(0); // exit node process without error
    }catch (error){
    console.log(error); 
    process.exit(1);  // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
}
runMain();

