// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC4494 {
    function permit(
        address owner,
        address spender,
        uint256 tokenId,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    function nonces(address owner) external view returns (uint256);
}
