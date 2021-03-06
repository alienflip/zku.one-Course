# Interoperability trilemma

1. Explain each aspect of the interoperability trilemma. Provide an example of a bridge protocol explaining which trade-offs on the trilemma the bridge makes.

```
Generalizable-channel: this is a secure, generalised messaging channel. It sacrifieces simplicity, in the sense that to build it into other domains. 

Trusted-Channel: Generalisable and extensible, as there is a single custodian relays information, and can do whatever they like with the data before submitting it to the remote chain. Not secure.

Extensible-Channel: permit fraulent messages in edge cases, but extensible and generalizable.
```

```
An example: IBC.
Any bridge in IBC will be both generalised, and secure. It will not extensible as it is expecting all headers from the remote chain to be from the cosmos ecosystem. So Ethereum, NEAR, Polkadot etc. are not easy plugins.
```

# Ultra light clients

1. Describe a specification for a light client based on zero-knowledge proofs. You should explain at least how to get the client synced up to the current state of the blockchain. Preferably go as far as explain how transaction inclusion proofs are generated too.

```
BLS: 
A BLS digital signature— also known as Boneh–Lynn–Shacham - is cryptographic signature scheme which allows a user to verify that a signer is authentic.
An important property of the construction (of BLS signature aggregation) is that the scheme is secure against a rogue public-key attack without requiring users to prove knowledge of their secret keys.
```

```
A simple ZK-based lightclient:

Prover (validator/full nodes): generates a proof of committee transition from epoch i to j
Inputs: Epoch numbers i & j, committee (BLS public keys) of epoch i
Perform for each epoch block
Aggregate public keys from header according to bitmap
Check they are more than ⅔ threshold
Check the epoch number is epoch number + 1
Encode the epoch into bits and hash to group element
Compute and check BLS signature
Proof for epoch i+1 = Proof for epoch i + above operations
Aggregate proof either iteratively or recursively
Output: Proof that includes the transition from epoch i committee to epoch j committee
```

2. What is the relevance of light clients for bridge applications? How does it affect relayers?

```
Light clients allow a user to get sufficient evidence of a transaction’s inclusion in a blockchain without having to operate a full node themselves. 
Bitcoin does this with Bitcoin SPV.
Through this process, provers (full nodes) can provide verifiers (light clients) sufficient evidence to prove that a particular chain tip represents the longest (heaviest/most difficult) chain, without the light client putting trust in any 3rd party. Through a Merkle path to a transaction root in one of the block headers, a user can know that a transaction is included in a block in the longest chain.
```

```
"without the light client putting trust in any 3rd party" == No relayers! Or, at least relayers will now also operate as miners/verifiers.
```

# Horizon Bridge

[Horizon repository](https://github.com/harmony-one/horizon/tree/main/contracts)

1.a. Briefly explain how the bridge process works.

[harmony light client](https://github.com/harmony-one/horizon/blob/main/contracts/HarmonyLightClient.sol)
[mmr](https://github.com/mimblewimble/grin/blob/master/doc/mmr.md#merkle-mountain-ranges)
```
This is a contract that allows for relayers to add harmony data (checkpoints) to the ethereum blockchain. It does this by adding header data to a mapping of merkle mountain range roots.
```

[ethereum light client](https://github.com/harmony-one/horizon/blob/main/contracts/EthereumLightClient.sol)
```
Similar to the harmony light client, however verification/addition of a block can be done by anyone as long as they provide a poPoW.
```

[token locker on harmony](https://github.com/harmony-one/horizon/blob/main/contracts/TokenLockerOnHarmony.sol)
```
This contract inherits from TokenLocker, and has the ability to have the upgrade with the lightClient. It will validate and execute a submission with a zkp, and then send it using the light client.
```

[token locker on ethereum](https://github.com/harmony-one/horizon/blob/main/contracts/TokenLockerOnEthereum.sol)
```
This mirrors the token locker on harmony.
```

[test contract](https://github.com/harmony-one/horizon/blob/main/test/bridge.hmy.js)
```
This does checks to see if the contract parses proof receipts correctly.
```

1.b. Why HarmonyLightClient has bytes32 mmrRoot field and EthereumLightClient does not? (You will need to think of blockchain architecture to answer this)

```
The light client for ethereum is more resource-intensive since it requires tracking every single header of the Ethereum blockchain, and it requires Ethash verification. On harmony, this is not necessarily the case. It has an MMR root in each header already.
```

# Rainbow Bridge

2. Explain the differences between Rainbow bridge and Horizon bridge. Which approach would you take when building your own bridge (describe technology stack you would use)?

```
Rainbow Bridge is generic. Horizon Bridge is ERC20 specific. This induces a higher latency for the Rainbow bridge.
```

```
EthOnNearClient contract then memorizes the merkle roots of the DAG files for the next 4 years upon initialization. On harmony, there is a far shorter cycle (seem to remember it is 7 days?)
```
```
The current Rainbow Bridge does not implement incentives for the maintainers who pay for the gas by relaying the headers. This is not an issue on Horizon, as horizon has no need for constant updating.
```

# Thinking In ZK

1. If you have a chance to meet with the people who built the above protocols what questions would you ask them?

```
I would ask both parties why they decided not to use substrate at all in their solutions! 
I would also ask about the trilemma: could quantum computing add a solution too this?
```

# [Final Project (deployed to testnet)](https://github.com/alienflip/degenDeploy)
