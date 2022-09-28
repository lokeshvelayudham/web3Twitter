// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17; // version call 
import "hardhat/console.sol"; // console log for contracts 
contract WavePortal{
    uint256 totalWaves;

    constructor(){ // class operation 
        console.log("hello!smart Contract");
    }
    function wave () public {
        totalWaves +=1;
        console.log("%s is  waved" ,msg.sender);
    }
    function getTotalWaves() public view returns (uint256){
        console.log("we have %d of total waves ", totalWaves);
        return totalWaves;
    }
}