
1.  Compare and contrast the circuits and contracts in TornadoNova and TornadoTrees

``` 
Tornado Nova pool will allow users to deposit & withdraw arbitrary amounts of ETH. Up to now, all Tornado Cash pools had one thing in common: users could only deposit and withdraw a fixed amount of a given token within each pool. Speed & cost being the cornerstone of user experience, Tornado Cash Nova uses the Gnosis Chain as a Layer2 (former xDAI). Thanks to this, users can benefit from cheaper fees, while still having fast transactions. Two transfer methods are available to provide ETH in order to pay the gas fee for a transaction. You can either connect your wallet or use a Relayer. Going through your wallet for this gas fee can compromise the anonymity of the transfer if used ETH is linkable to your identity. Therefore, it is recommended to use a Relayer to preserve privacy.
```

2.1. Take a look at the circuits/TreeUpdateArgsHasher.circom and contracts/TornadoTrees.sol. Explain the process to update the withdrawal tree (including public, private inputs to the circuit, arguments sent to the contract call, and the on-chain verification process)

```
To update the withdrawal tree, the two files below are used together. The tornado tree contract is mainly serving two functions: it has a deposits merkle tree, and a withdrawal merkle tree. It uses these trees to validate whether or not a particular user has a who has sent a withdrawal request has an account with the correct amount of funds. This is done with a zk proof, so that the user does not have to releal their identity.
```
```
The circom file is all about compression:  all arguments that are passed to the merkle tree are hashed and compressed in order to reduce gas. The tornadoTrees contract takes in public vatiables: _currentRoot, _newRoot, _pathIndicies and _events. The other inputs are _proof and _argsHas, both of which are generated through a snark process, and so are private. On-chain, the inputs are checked to make sure the proposed tree update positions are available, and then the tree deposit data is added to the tree, and the tree is updated. The arguments hash is then verified with the circom verifier, and if it all passes, the new root is calculated and updated on-chain.
```

[argsHasher](https://github.com/tornadocash/tornado-trees/blob/master/circuits/TreeUpdateArgsHasher.circom)

[tornadoTrees](https://github.com/tornadocash/tornado-trees/blob/master/contracts/TornadoTrees.sol)

2.2. Why do you think we use the SHA256 hash here instead of the Poseidon hash used elsewhere?

`
Poseidon : https://www.usenix.org/system/files/sec21summer_grassi.pdf
`
```
```
`
SHA256 : https://www.intel.com/content/dam/www/public/us/en/documents/white-papers/sha-256-implementations-paper.pdf
`
```
```
```
Conclusion:
```

3.1. Run the tests in tornado-trees and add a screenshot of all the tests passing.

  ```
  git clone git@github.com:tornadocash/tornado-nova.git
  cd tornado-nova
  yarn
  yarn build
  yarn test
  ```

![test](https://github.com/alienflip/zku/blob/main/week_2/TornadoCash/tornado-terst.png) 

3.2. [custom.test.js](https://github.com/alienflip/zku/blob/main/week_2/TornadoCash/tornado-nova/test/custom.test.js) 

4. Read Proposal #11 of Tornado.cash governance, what is the purpose of the newly deployed L1Unwrapper contract?

```
```
