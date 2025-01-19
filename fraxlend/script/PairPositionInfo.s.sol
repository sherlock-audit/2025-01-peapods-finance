// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";

contract PairPositionInfoScript is Script {
    function setUp() public {}

    function run() public {
        // Get the pair and user addresses from environment variables
        address pair = vm.envAddress("PAIR");
        address user = vm.envAddress("USER");
        require(pair != address(0) && user != address(0), "PAIR and USER addresses must be set");

        // Get user position information
        uint256 collateralBalance = FraxlendPair(pair).userCollateralBalance(user);
        uint256 borrowShares = FraxlendPair(pair).userBorrowShares(user);

        // Log the results
        console2.log("Position Info for user:", user);
        console2.log("Collateral Balance:", collateralBalance);
        console2.log("Borrow Shares:", borrowShares);
    }
}
