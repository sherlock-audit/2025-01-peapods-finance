// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";

contract PairMaxWithdrawScript is Script {
    function setUp() public {}

    function run() public {
        // Get the pair address from environment variable
        address pair = vm.envAddress("PAIR");
        require(pair != address(0), "PAIR address not set");

        // Get the max withdraw amount for the caller
        uint256 maxWithdraw = FraxlendPair(pair).maxWithdraw(msg.sender);
        console2.log("Max withdraw amount:", maxWithdraw);
    }
}
