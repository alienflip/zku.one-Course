# Interoperability trilemma

1. Explain each aspect of the interoperability trilemma. Provide an example of a bridge protocol explaining which trade-offs on the trilemma the bridge makes.

```
Generalizable-channel: this is a secure, generalised messaging channel. It sacrifieces simplicity, in the sense that to build it into other domains (except cosmos), e.g. ethereum, near etc. would be a very hard task. 

Trusted-Channel: Generalisable and extensible, as there is a single custodian relays information, and can do whatever they like with the data before submitting it to the remote chain. Not secure.

Extensible-Channel: permit fraulent messages in edge cases, but extensible and generalizable.
```

```
An example: IBC.
Any bridge in IBC will be both generalised, and secure. It will not extensible as it is expecting all headers from the remote chain to be from the cosmos ecosystem.
```

# Ultra light clients

1. Describe a specification for a light client based on zero-knowledge proofs. You should explain at least how to get the client synced up to the current state of the blockchain. Preferably go as far as explain how transaction inclusion proofs are generated too.

```

```

2. What is the relevance of light clients for bridge applications? How does it affect relayers?

```

```

```

```

# Horizon Bridge

1. Check out [Horizon repository](https://github.com/harmony-one/horizon). 

a. Briefly explain how the bridge process works (mention all necessary steps: harmony light client, ethereum light client, token locker on harmony, token locker on ethereum, test contract). Provide commented code in your submission.

```

```

b. Why HarmonyLightClient has bytes32 mmrRoot field and EthereumLightClient does not? (You will need to think of blockchain architecture to answer this)

```

```
