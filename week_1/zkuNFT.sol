// contracts/zkuNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import useful libs
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

// NFT contract
contract zkuNFT is ERC721URIStorage {
    
    // safe convert uin256 to string functionality
    using Strings for uint256;

    // safe item incriment functionality
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // construct token
    constructor() ERC721("zkuNFT", "zkuNFT") {}

    // mint new token to new account
    function awardItem(address reciever, string memory tokenURI_)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(reciever, newItemId);
        _setTokenURI(newItemId, tokenURI_);

        return newItemId;
    }

    // create a token URI with id and description field
    function tokenURI(uint256 tokenId, string memory description_)
        public pure
        returns (string memory)
    {
        bytes memory dataURI = abi.encodePacked(
            '{',
                "name:", "My721Token #", tokenId.toString(), '"', ",",
                "description:", "721TokenDescription #", description_, '"',
            '}'
        );

        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }
}

// token interface
interface IzkuNFT {
    function awardItem(address player, string memory tokenURI_) external returns(string memory);
    function tokenURI(uint256 tokenId, string memory description) external returns(string memory);
}

// merkle tree contract
contract merkleTreeContract {
    bytes32[] merkleTree;

    function hash(bytes memory datum_0, bytes memory datum_1) 
        private pure 
        returns(bytes32) 
    {
        return keccak256(abi.encodePacked(datum_0, datum_1));
    }

    function merkleAddNFT(
        address reciever, 
        string memory tokenID, 
        string memory tokenURI
    )
        public view
        returns (bytes32)
    {
        bytes32 h0 = hash(abi.encodePacked(msg.sender), abi.encodePacked(reciever));
        bytes32 h1 = hash(abi.encodePacked(tokenID), abi.encodePacked(tokenURI));
        return hash(abi.encodePacked(h0), abi.encodePacked(h1));
    }
}