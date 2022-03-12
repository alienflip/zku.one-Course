require("@nomiclabs/hardhat-waffle");

let key = process.env.sk;

module.exports = {
  solidity: "0.8.12",
  networks: {
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${key}`]
    }
  },
};