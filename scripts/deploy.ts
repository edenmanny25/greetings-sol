import { ethers } from "hardhat";




async function main() {


  const greeting = await ethers.deployContract("Greetings", ["Hello, Hardhat!"]);

  await greeting.waitForDeployment();


  console.log("Greeter deployed to:", greeting.target);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
