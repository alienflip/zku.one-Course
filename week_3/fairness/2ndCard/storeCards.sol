pragma solidity ^0.8.12;

import "./Verifier.sol";

contract cardGame {

  // define a card as a proof
  struct cardProof {
    uint256[2] _a,
    uint256[2][2] _b,
    uint256[2] _c,
    uint256[9] _input
  };
  
  // this is like a card-deck. We push a new card onto it everytime somone checks their compare card 
  cardProofs[] lastCards;

  // here, we take the new card and old card, and verify that they are of the same suite, using the 
  // verifier
  function verifyNewCompare(
        uint256[2] memory _a,
        uint256[2][2] memory _b,
        uint256[2] memory _c,
        uint256[9] memory _input
  ) external returns (bool) {
        uint256 cardCount = lastCards.length;
        cardProof newProof;
        newProof._a = _a;
        newProof._b = _b;
        newProof._c = _c;
        newProof._input = _input;
        lastCards.push(newProof);
        require(Verifier.verifyCompareSuite(newProof, lastCard[cardCount - 1]), "Failed compare check");
        return true;
  }
}
