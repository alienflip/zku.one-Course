## Shielding the TX

1. You have been asked to present a mechanism that will allow a user to privately and securely bridge 100,000 UST tokens from Ethereum to Harmony. Draft a write-up explaining the protocol to be built to cater for this need, highlighting the challenges to be faced and potential resolution to them.

```
Here there are two aspects to deal with: privacy and security
```
```
Privacy: can be achieved with a mixer: the user sends their funds to a mixer before withdrawing them to a anon wallet, where bridging can be enacted from. Mixers are generally well audited and battle tested at this point, so security here is a given.
```
```
Security: the main issue with security is with the bridge. Because a bridge is an off-chain system, it inherits none of the native security a blockchain achieves. This means the bridge has to achieve decentralisation, trustlessness and immutability on its own. This means a large amount of protocol engineering over web2 systems, and there are a large number of attack vectors to be worried about, such as; smart contract design, middleware design, and frontend design.
```

2. In February 2022, a hack on a popular crypto bridge led to the second biggest crypto heist where $320m was lost. Following the technical details behind the hack, it is very clear that bridge smart contracts need to be airtight to prevent scrupulous individuals from taking advantage of them. Briefly explain key mechanisms you will put in place in your interoperable private bridge (specifically the withdrawal methods) to prevent a similar attack (Double withdrawal and fake withdrawal).

```
The wormhole hack can be described by a logic fault where the contracts mistakenly thought that `==` and `&&` are interchangable, however `false == false` evaluates to true, but `false&&false` evaluates to false. So checking transactions in this way is erreneous. Another key aspect to a secure bridge, as shown by the axie attack, was that trustlessness in validators is hard to achieve. It seems that for now, unless you are a zk bridge, you should use KYC for this to avoid malicious actors.
```

## Aztec

1. Briefly explain the concept of AZTEC Note and how the notes are used to privately represent various assets on a blockchain. There are various proofs utilized by the AZTEC protocol including range proofs, swap proofs, dividend proofs and join-split proofs. Highlight the features of these proofs and the roles they play in creating confidential transactions on the blockchain

```
The core of any AZTEC transaction is a Note. The state of notes are managed by a Note Registry for any given asset. The user’s balance of any AZTEC asset is made up of the sum of all of the valid notes their address owns in a given Note Registry.
```

```
This is used to prove that an AZTEC note is greater than another AZTEC note or vice versa. This is useful for proving that ownership of an asset post trade is below a regulatory maximum. It can also be used to build identity and group membership schemes.
```

```
The bilateral swap proof allows an atomic swap of two notes to take place. This is useful for trading two assets e.g fiat and a loan/bond/security. A validated proof, proves that the makers bid note is equal to the takers ask note and the makers ask note is equal to the takers bid note.
```

[More on atomic swaps](https://hackernoon.com/transferring-tokens-across-blockchains-the-definitive-guide-to-bridges-atomic-swaps-and-more)

```
This proof allows the prover to prove that the input note is equal to an output note multiplied by a ratio. This is useful for paying interest from an asset.
```

```
The Join Split proof allows a set of input notes to be joined or split into a set of output notes. Usually this is used to combine note values into a larger note, or split a note into multiple notes with different owners. This proof ensures that the sum of the input notes is equal to the sum of the output notes.
```


## Webb

1. What is the difference between commitments made to the mixer, Anchor and VAnchor contracts? Can you think of a new commitment structure that could allow for a new feature? (eg: depositing one token and withdrawing another?) if so, what would the commitment look like?

```

```

2. Describe how the UTXO scheme works on the VAnchor contract.

```

```

## Thinking In ZK

1. If you have a chance to meet with the people who built the above protocols what questions would you ask them?

```

```
