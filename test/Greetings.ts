
import { expect } from "chai";
import { ethers } from "hardhat";

import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";



describe("Greetings", function () {


  async function deployGreetFixture() {
    

    const Greeter = await ethers.getContractFactory("Greetings");
    const greeter = await Greeter.deploy("Hello, world!");


    return { greeter };
  }



  describe("Deployment", function () {


    it("Should return the new greeting once it's changed", async function () {
      const { greeter } = await loadFixture(deployGreetFixture);

      expect(await greeter.greet()).to.equal("Hello, world!");

      const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
      await setGreetingTx.wait();

      expect(await greeter.greet()).to.equal("Hola, mundo!");


    });



    it("Should return the new balance after deposit", async function () {
      const { greeter } = await loadFixture(
        deployGreetFixture
      );

      await greeter.deposit({value: 10});
    
      expect(await ethers.provider.getBalance(greeter.target)).to.equal(10);


    }); 
  });



  

});