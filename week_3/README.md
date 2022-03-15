### [Dark Forest](https://github.com/alienflip/zku/tree/main/week_3/darkForest)

> question 1

### Fairness in card games

> question 2

1. In a card game, how can a player commit to a card without revealing what the card is? A naive protocol would be to map all cards to a number between 0 and 51 and then hash this number to get a commitment. This won’t actually work as one could easily brute force the 52 hashes.
To prevent players from changing the card we need to store some commitment on-chain. How would you design this commitment? Assume each player has a single card that needs to be kept secret.  Modify the naive protocol so that brute force doesn’t work.

```
A simple solution for this would be to apply a cypher to the card triples: (number, colour, suite), where 0 < number < 14, colour in (r, b), suite in (c, s, d, h).
```
```
We can create a mapping (number, colour, suite) so that

number ∈ {14k, 14k + 1 ... 14k + 13}, k ∈ naturals
colour ∈ {0, k}, k ∈ naturals
suite ∈ {4k, 4k + 1, 4k + 2, 4k + 3}, k ∈ naturals 
```
```
we then hash each number, colur and suite, and concatenate. Then hash again. This would create a large enough random enumeration for a secure game. If we use a nice cypher.
```

2.
```
```

3.
```
```

### MACI and VDF

> question 3

1.
```
```

2.
```
```

2.1.
```
```

2.2.
```
```

2.3.
```
```

2.4.
```
```

3.
```
```

### [InterRep](https://github.com/alienflip/zku/tree/main/week_3/interRep)

> question 4

### Thinking In ZK

> question 5

1. If you have a chance to meet with the people who built DarkForest and InterRep, what questions would you ask them about their protocols?
```
```

