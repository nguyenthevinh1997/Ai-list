const aiList = artifacts.require("./aiList.sol");

module.exports = function(deployer) {
  deployer.deploy(aiList);
}
