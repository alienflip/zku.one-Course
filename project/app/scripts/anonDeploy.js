const {promises:fs} = require('fs');
const fs_ = require('fs');

var Web3 = require('web3');
var Accounts = require('web3-eth-accounts');

// note: these must be in shard 1, since we are using these contracts
// https://docs.webb.tools/mixer-protocols/tornado/deployments/
var accounts = new Accounts('wss://api.s1.b.hmny.io');
const web3 = new Web3('https://api.s1.b.hmny.io');

const exec = require('./executeTransaction');

const tornadoAnchorABI = require("../../tornado-core/build/contracts/Anchor.json");

async function createBurnerAccount() {
  var burnerAccount = accounts.create();
  await fs.writeFile('./.env_private', burnerAccount.privateKey, (err) => {
    if (err) throw err;
  });
  return burnerAccount.address;
}

async function fundBurnerAccount() {
  const publicAccountPrivateKey = fs_.readFileSync(".env_pub").toString().trim();
  const privateAccountPrivateKey = fs_.readFileSync(".env_private").toString().trim();

  const tornadoAddress = "0x7cd1f52e5eedf753e99d945276a725ce533aad1a";
  const gas = 50000;

  // note: base value must be 100, as we are using the 100 ONE mixer
  const baseValue = 100;
  const value = baseValue * 1e18;

  // impliment tornado_nova transaction deposit
  const sender = web3.eth.accounts.privateKeyToAccount(publicAccountPrivateKey);
  web3.eth.accounts.wallet.add(sender);
  web3.eth.defaultAccount = sender.address



  // impliment tornado_nova transaction withdraw
  const reciever = web3.eth.accounts.privateKeyToAccount(privateAccountPrivateKey);
  web3.eth.accounts.wallet.add(reciever);
  web3.eth.defaultAccount = reciever.address

  

}

async function deployContract() {
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  const Contract = await ethers.getContractFactory("userContract");
  const contract = await Contract.deploy();
  await contract.deployed();

  await fs.writeFile('./addressContract.txt', contract.address, (err) => {
    if (err) throw err;
  });

  return contract;
}

async function main() {
  const burnerAddress = await createBurnerAccount();
  await fundBurnerAccount(burnerAddress);
  const contract = await deployContract();
  console.log("contract deployed to: ", contract.address);
}
  
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});