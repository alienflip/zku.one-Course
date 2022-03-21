const {promises:fs} = require('fs');
const fs_ = require('fs');

const depositFunc = require("../../scripts/depositNativeAnchor");
const withdrawFunc = require("../../scripts/withdrawNativeAnchor");

const Web3 = require('web3');
const Accounts = require('web3-eth-accounts');

const accounts = new Accounts('wss://api.s0.b.hmny.io');
const web3 = new Web3('https://api.s0.b.hmny.io');

async function createBurnerAccount() {
  var burnerAccount = accounts.create();
  await fs.writeFile('./.env_private', burnerAccount.privateKey, (err) => {
    if (err) throw err;
  });
  return burnerAccount.address;
}

async function fundBurnerAccount(burnerAddress) {
  // this is given by the deployment of the three contracts in the above 
  // directory implimentation
  const tornadoAddress = "0x02b6cf5b0d1a1225c87fa9b6c3e8950e5a1f7d87";

  // impliment tornado_nova transaction deposit
  const secretNote = await depositFunc(tornadoAddress);

  await withdrawFunc(secretNote, burnerAddress, tornadoAddress)
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
  const privateAccountPrivateKey = fs_.readFileSync(".env_private").toString().trim();
  const sender = web3.eth.accounts.privateKeyToAccount(privateAccountPrivateKey);
  web3.eth.accounts.wallet.add(sender);
  web3.eth.defaultAccount = sender.address

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
