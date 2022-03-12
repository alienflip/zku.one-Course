require("@nomiclabs/hardhat-waffle");

const fs = require('fs');
const key = fs.readFileSync(".env").toString().trim();

module.exports = {
  solidity: "0.8.12",
  networks: {
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${key}`]
    }
  },
};