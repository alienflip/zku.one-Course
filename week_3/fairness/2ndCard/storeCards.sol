pragma solidity ^0.8.12;

import "./Verifier.sol";

contract cardGame {
  address verifier;
  
  constructor(address verifierInit) {
    verifier = verifierInit;
  }
  
  function checkRevealProof(
        uint256[2] memory _a,
        uint256[2][2] memory _b,
        uint256[2] memory _c,
        uint256[9] memory _input
  ) public view returns (bool) {
        require(Verifier.verifyCompare(_a, _b, _c, _input), "Failed reveal pf check");
        return true;
  }
}
