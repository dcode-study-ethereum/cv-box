var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var CVContract = artifacts.require("./CVContract.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(CVContract);
};
