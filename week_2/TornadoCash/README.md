
1.  

``` 
Tornado Nova pool will allow users to deposit & withdraw arbitrary amounts of ETH. Up to now, all Tornado Cash pools had one thing in common: users could only deposit and withdraw a fixed amount of a given token within each pool. Speed & cost being the cornerstone of user experience, Tornado Cash Nova uses the Gnosis Chain as a Layer2 (former xDAI). Thanks to this, users can benefit from cheaper fees, while still having fast transactions. Two transfer methods are available to provide ETH in order to pay the gas fee for a transaction. You can either connect your wallet or use a Relayer. Going through your wallet for this gas fee can compromise the anonymity of the transfer if used ETH is linkable to your identity. Therefore, it is recommended to use a Relayer to preserve privacy.
```

2.1. 

```
To update the withdrawal tree, the two files below are used together. The tornado tree contract is mainly serving two functions: it has a deposits merkle tree, and a withdrawal merkle tree. It uses these trees to validate whether or not a particular user has a who has sent a withdrawal request has an account with the correct amount of funds. This is done with a zk proof, so that the user does not have to releal their identity. In the contract, all inputs and outputs are public, so we rely on the zk proof to obfuscate the private input and output data. 
```
```
The circom file ... 
```

[argsHasher](https://github.com/tornadocash/tornado-trees/blob/master/circuits/TreeUpdateArgsHasher.circom)

[tornadoTrees](https://github.com/tornadocash/tornado-trees/blob/master/contracts/TornadoTrees.sol)

2.2.

3.1. Here is the tornado-nova toolchain installation, and tests

  ```
  git clone git@github.com:tornadocash/tornado-nova.git
  cd tornado-nova
  yarn
  yarn build
  yarn test
  ```

![test](https://github.com/alienflip/zku/blob/main/week_2/TornadoCash/tornado-terst.png) 

3.2. [custom test](https://github.com/alienflip/zku/blob/main/week_2/TornadoCash/tornado-nova/test/custom.test.js) 

4. --
