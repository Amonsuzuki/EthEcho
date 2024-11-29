import { ethers } from "hardhat";

const main = async () => {
  const echoContractFactory = await ethers.getContractFactory("EthEcho");
  const echoContract = await echoContractFactory.deploy();

  const deployedContractAddress = await echoContract.getAddress();
  console.log("Contract added to:", deployedContractAddress);

  let echoTxn = await echoContract.writeEcho("A message!");
  await echoTxn.wait();

  const [_, randomPerson] = await ethers.getSigners();
  echoTxn = await echoContract
    //.connect(randomPerson)
    .writeEcho("Another message!");
  await echoTxn.wait();

  let latestEcho = await echoContract.getLatestEcho;
  console.log(latestEcho);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
