// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract getFeedback (_ndex) public view returns (address, string memory, uint256) {
Message memory item = messages[_ndex];

return(item.author, itemcontent, item.timestamp)
}
 