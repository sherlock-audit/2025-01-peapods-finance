// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";
import {IERC4626Extended} from "../src/contracts/interfaces/IERC4626Extended.sol";

contract PairSetMaxLTV is Script {
    function setUp() public {}

    function run() public {
        // Get the pair and vault addresses from environment variables
        address pair = vm.envAddress("PAIR");
        uint256 maxLTV = vm.envUint("MAX_LTV");

        // Log the timelock address before making changes
        address timelock = FraxlendPair(pair).timelockAddress();
        console2.log("Timelock address:", timelock);

        vm.startBroadcast();

        // Set the external asset vault
        FraxlendPair(pair).setMaxLTV(maxLTV);
        console2.log("MaxLTV set to:", maxLTV);

        vm.stopBroadcast();
    }
}
