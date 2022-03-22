// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

contract userContract {
    address public owner;

    function getOwner() 
        external view
        returns(address)
    {
        return owner;
    }

    function setOwner(address newOwner) 
        external
    {
        owner = newOwner;
    } 
}