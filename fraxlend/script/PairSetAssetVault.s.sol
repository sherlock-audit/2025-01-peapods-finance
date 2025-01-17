// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";
import {IERC4626Extended} from "../src/contracts/interfaces/IERC4626Extended.sol";

contract PairSetAssetVaultScript is Script {
    function setUp() public {}

    function run() public {
        // Get the pair and vault addresses from environment variables
        address pair = vm.envAddress("PAIR");
        address vault = vm.envAddress("VAULT");
        require(pair != address(0) && vault != address(0), "PAIR and VAULT addresses must be set");

        // Log the timelock address before making changes
        address timelock = FraxlendPair(pair).timelockAddress();
        console2.log("Timelock address:", timelock);

        vm.startBroadcast();

        // Set the external asset vault
        FraxlendPair(pair).setExternalAssetVault(IERC4626Extended(vault));
        console2.log("External asset vault set to:", vault);

        vm.stopBroadcast();
    }
}
