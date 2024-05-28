// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721Permit, ERC721} from "./ERC721Premit.sol";

contract ERC4494 is ERC721Permit {
    constructor() ERC721("MockERC4494", "MockERC4494") {}
}
