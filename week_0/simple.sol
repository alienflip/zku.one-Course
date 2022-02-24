// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Ballot {

  // here we store the global value
  uint value_store;
  
  // here here we set the global value
  function set (uint x) public {
    value_store = x;
  }
  
  // here we get the global value
  function get () public view returns (uint) {
    return value_store;
  }
}
