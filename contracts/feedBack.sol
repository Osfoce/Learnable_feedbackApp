// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract feedBack{
 constructor(){
    console.log("Contract init");
 }

 string message = "Hello am a contract!";

 function getMessage() public view returns(string memory) {
    return message;
 }
}
