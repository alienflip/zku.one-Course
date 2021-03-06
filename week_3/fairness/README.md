1. In a card game, how can a player commit to a card without revealing what the card is? A naive protocol would be to map all cards to a number between 0 and 51 and then hash this number to get a commitment. This won’t actually work as one could easily brute force the 52 hashes.
To prevent players from changing the card we need to store some commitment on-chain. How would you design this commitment? Assume each player has a single card that needs to be kept secret.  Modify the naive protocol so that brute force doesn’t work.

```
A simple solution for this would be to apply a cypher to the card triples: (number, colour, suite), where 0 < number < 14, colour in (r, b), suite in (c, s, d, h).
```
```
We can create a mapping (number, colour, suite) so that

number ∈ {14k, 14k + 1 ... 14k + 13}, k ∈ naturals
suite ∈ {4k, 4k + 1, 4k + 2, 4k + 3}, k ∈ naturals 
```
```
we then hash each number, colur and suite, and concatenate. Then hash again. This would create a large enough random enumeration for a secure game. If we use a nice cypher.
```

2. Now assume that the player needs to pick another card from the same suite. Design a circuit that can prove that the newly picked card is in the same suite as the previous one. Can the previous state be spoofed? If so, what mechanism is needed in the contracts to verify this?
Design a contract, necessary circuits, and verifiers to achieve this. You may need to come up with an appropriate representation of cards as integers such that the above operations can be done easily.

[verifier](https://github.com/alienflip/zku/blob/main/week_3/fairness/2ndCard/circom/verifier.sol)
[circuits](https://github.com/alienflip/zku/blob/main/week_3/fairness/2ndCard/circom/checkSuite.circom)
[contracts](https://github.com/alienflip/zku/blob/main/week_3/fairness/2ndCard/storeCards.sol)

3. How can a player reveal that it is a particular card (Say ace) without revealing which suit it belongs to (ace of diamonds etc.)

```
For this, we can change the mappings in the storeCards.sol file so that we group by number instead of suite.
```
