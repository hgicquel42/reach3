// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Projects is ERC721 {
    address private _minter;

    mapping (uint256=>string) uris;

    constructor(address minter) ERC721("42School", "42") {
        _minter = minter;
    }

    function minter() public view virtual returns (address) {
        return _minter;
    }

    modifier onlyMinter() {
        require(minter() == _msgSender(), "Caller is not the minter");
        _;
    }

    function mintChad(
        address to,
        uint256 tokenId,
        string memory hash
    ) public virtual onlyMinter() {
        _safeMint(to, tokenId);
        uris[tokenId] = hash;
    }

   function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        require(false, "ERC721: token is not transferable");
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return uris[tokenId];    
    }
}

