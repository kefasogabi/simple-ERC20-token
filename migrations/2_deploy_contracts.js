var BasicToken = artifacts.require("BasicToken");
var owned = artifacts.require("owned");

module.exports = function(deployer) {
  deployer.deploy(owned);
};

module.exports = function(deployer) {
  deployer.deploy(BasicToken);
};