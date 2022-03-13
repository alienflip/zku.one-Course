const Mixer = artifacts.require("Mixer");

module.exports = function(deployer) {
  deployer.deploy(Mixer);
};
