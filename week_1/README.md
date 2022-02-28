# merkle root circom

> merkle_root.circom

![code](https://github.com/alienflip/zku/blob/main/week_1/Screenshot%20(29).png)

### compiling, and executing powers of tau ceremony

> [./exec.sh](https://github.com/alienflip/zku/blob/main/week_1/exec.sh)

![tau1](https://github.com/alienflip/zku/blob/main/week_1/Screenshot%20(34).png)

### Errors

> remember to assign `k` in `MiMCsponge`!

### Do we need this for a simple calculation of a merkle root?

> No. However, the technology allows for reduction of the amount of gas necessary to check if an item is in the merkle tree, by bundling of data. Technologies using this include blockchain such as VEGA

> [public.json](https://github.com/alienflip/zku/blob/main/week_1/public.json)

# Minting an NFT and committing the mint data to a Merkle Tree

> Using merkleTreeContract.sol

https://github.com/SusmithKrishnan/merkle-js/blob/257ebedef94e711962b3a6f810f569f11041e72f/merkle.js#L34
https://rosettacode.org/wiki/SHA-256_Merkle_tree
https://github.com/bitcoin/bitcoin/blob/master/src/consensus/merkle.cpp#L46
https://www.pranaybathini.com/2021/05/merkle-tree.html

> contract deployed 

> > merkleTreeContract.sol : https://ropsten.etherscan.io/address/0x337a84b230177e1b35bbdea73757098aaec85180

> FE application : /nft-collectible-frontend