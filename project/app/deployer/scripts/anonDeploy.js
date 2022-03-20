const {promises:fs} = require('fs');
const fs_ = require('fs');

const depositFunc = require("../../scripts/depositNativeAnchor");
const withdrawFunc = require("../../scripts/withdrawNativeAnchor");

var Web3 = require('web3');
var Accounts = require('web3-eth-accounts');

// note: these must be in shard 1, since we are using these contracts
// https://docs.webb.tools/mixer-protocols/tornado/deployments/
var accounts = new Accounts('wss://api.s1.b.hmny.io');
const web3 = new Web3('https://api.s1.b.hmny.io');

const exec = require('./executeTransaction');

const tornadoAnchorABI = require("../../build/contracts/Anchor.json");

const secretNote = "anchor-eth-.1-1666700000-0x0b664eb87e8f19628a6ea7d608b731b98ab3c7a3ab05b76ae02280bf62b9fef10bd911bcc4aceee074fef4eef2d29a0ac035b99a8362f169c044f458bca8"

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

  const tornadoAddress = "0x02b6cf5b0D1a1225C87fa9b6c3E8950E5a1f7D87";
  const gas = 50000;

  // note: base value must be 100, as we are using the 100 ONE mixer
  const baseValue = 100;
  const value = baseValue * 1e18;

  // impliment tornado_nova transaction deposit
  const sender = web3.eth.accounts.privateKeyToAccount(publicAccountPrivateKey);
  web3.eth.accounts.wallet.add(sender);
  web3.eth.defaultAccount = sender.address

  await depositFunc(tornadoAddress);

  // impliment tornado_nova transaction withdraw
  const reciever = web3.eth.accounts.privateKeyToAccount(privateAccountPrivateKey);
  web3.eth.accounts.wallet.add(reciever);
  web3.eth.defaultAccount = reciever.address

  await withdrawFunc(secretNote, reciever.address, tornadoAddress)
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