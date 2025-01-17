// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";
import {IERC4626Extended} from "../src/contracts/interfaces/IERC4626Extended.sol";

contract PairExternalAssetVaultScript is Script {
    function setUp() public {}

    function run() public {
        // Get the pair address from environment variable
        address pair = vm.envAddress("PAIR");
        require(pair != address(0), "PAIR address not set");

        // Get and log the external asset vault address
        IERC4626Extended vault = FraxlendPair(pair).externalAssetVault();
        console2.log("External Asset Vault:", address(vault));
    }
}
