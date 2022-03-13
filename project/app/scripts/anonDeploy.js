const {promises:fs} = require('fs');
const fs = require('fs');
var web3 = require('web3');
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts('ws://localhost:8546');

async function createBurnerAccount() {
  var burnerAccount = accounts.create();
  await fs.writeFile('./.env_private', burnerAccount.privateKey, (err) => {
    if (err) throw err;
  });
  return burnerAccount.address;
}

async function fundBurnerAccount(address) {
  const publicAccountPrivateKey = fs.readFileSync(".env_public").toString().trim();
  const reciever = address;

  // impliment tornado_nova transaction
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

  console.log("Contract address:", contract.address);
  await fs.writeFile('./addressContract.txt', contract.address, (err) => {
    if (err) throw err;
  });
}

async function main() {
  const burnerAddress = await createBurnerAccount();
  await fundBurnerAccount(burnerAddress);
  await deployContract();
}
  
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});