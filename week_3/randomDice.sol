// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract randomDice {
  function roll(uint256 randomNumber)
    external
    returns(bytes32)
  {
    bytes32 block = block.hash;
    return keccak256(abi.encodePacked(block, randomNumber));
  }
}
