const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let math;
//doesn't actually test right lol
describe("SquareRoot tests", function () {
  beforeEach(async function () {
    const Math = await ethers.getContractFactory("SquareRoot");
    math = await Math.deploy();
    await math.deployed();
  });
  it("Contract is deployed", async function () {
    expect(math.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
  it("sqrt", async function () {
    expect(await math.sqrt(0)).to.equal(0);
    expect(await math.sqrt(151)).to.equal(12);
  });
  it("max and min", async function () {
    expect(await math.min(5,34)).to.equal(5);
    expect(await math.max(5,34)).to.equal(34);
  });
  it("average", async function () {
    expect(await math.average(5,34)).to.equal(19);
  });
});