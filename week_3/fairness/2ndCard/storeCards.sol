pragma solidity ^0.8.12;

import "./Verifier.sol";

contract cardGame {

  struct cardProof {
    uint256[2] _a,
    uint256[2][2] _b,
    uint256[2] _c,
    uint256[9] _input
  };
  
  cardProofs[] lastCards;

  function verifyNewCompare(
        uint256[2] memory _a,
        uint256[2][2] memory _b,
        uint256[2] memory _c,
        uint256[9] memory _input
  ) public view returns (bool) {
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
