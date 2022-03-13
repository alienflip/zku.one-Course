1. What is Semaphore? Explain in brief how it works? What applications can be developed using Semaphore

```
Semaphore allows Ethereum users to prove their membership of a set without revealing their original identity. At the same time, it allows users to signal their endorsement of an arbitrary string. It is designed to be a simple and generic privacy layer for Ethereum DApps. Use cases include private voting, whistleblowing, mixers, and anonymous authentication.
```

2.1. Run the tests and add a screenshot of all the test passing.

Here is the [semaphore toolchain](http://semaphore.appliedzkp.org/docs/quick-setup) installation:

```
git clone git@github.com:appliedzkp/semaphore.git
cd semaphore
yarn add hardhat --dev
yarn add @appliedzkp/semaphore-contracts
yarn add @zk-kit/identity @zk-kit/protocols --dev
yarn add @zk-kit/incremental-merkle-tree circomlibjs@0.0.8 --dev
yarn add hardhat-dependency-compiler --dev
yarn hardhat compile
yarn hardhat test
```

![tests](https://github.com/alienflip/zku/blob/main/week_2/semaphore/semaphore-test.PNG)

2.2. Explain code in the sempahore.circom file (including public, private inputs).

    Semaphore() : When a user registers their identity, they simply send a hash of an EdDSA public key and two random secrets to the contract, which stores it in a Merkle tree. This hash is called an identity commitment, and the random secrets are the identity nullifier and identity trapdoor. Broadcasting a signal is a little more complex. There are two parts to it: (a) anonymously proving membership of the set of registered users, and (b) preventing double-signalling via an external nullifier. This is not done in the circuit, though.
    
    CalculateSecret() : this circuit uses the poseidon hashing algorithm twice to take somones private information and obfuscate it. For reference, see "DUSK NETWORK - POSEIDON", on google
    
    CalculateIdentityCommitment() : The circuit hashes the hash of the identity nullifier and the identity trapdoor to generate an identity commitment. It then verifies the Merkle proof against the Merkle root and the identity commitment.
    
    CalculateNullifierHash() : The circuit hashes the identity nullifier and the external nullifier. The it checks that it matches the given nullifiers hash. Additionally, the smart contract ensures that it has not previously seen this nullifiers hash. This way, double-signalling is impossible.

2.3. Create a frontend for the current semaphore version. 

`in parent directory`

3.1. What potential challenges are there to overcome in such an authentication system?
```
The elefria auth system works like this: you generate a zk identity, and submit the identity to the contract, which verifies the identity, and generates a token. You then can use the token on any other platforms you are trying to access rather than using your personal address, as long as the platforms enable validation through the elefria smart contracts. This will be their main challenge, as zk systems are hard, and most web3 devs do not know how to audit such a system. In the case of private voting, it will be hard to verify that somone is a unique voter, since we still would need a more fundamental `proof of unique-person` protocol for this to work. 
```
3.2. What potential improvements can one make to simplify the Elefria authentication protocol?

```
I would add methods for browsing between options in the frontend without having to reset the whole app.
```
