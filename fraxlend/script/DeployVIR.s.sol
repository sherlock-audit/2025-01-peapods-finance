// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {VariableInterestRate} from "../src/contracts/VariableInterestRate.sol";

contract DeployVIRScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(vm.addr(deployerPrivateKey));

        // Deploy with the same parameters as the original script
        // [0.5 0.2@.875 5-10k] 2 days (.75-.85)
        VariableInterestRate vir = new VariableInterestRate(
            "[0.5 0.2@.875 5-10k] 2 days (.75-.85)", // name
            87500, // _minInterest: 0.875 * 1e5
            200000000000000000, // _vertexInterest: 0.2 ether
            75000, // _maxUtilization1: 0.75 * 1e5
            85000, // _maxUtilization2: 0.85 * 1e5
            158247046, // _vertexUtilization: ~0.158
            1582470460, // _rotationUtilization: ~1.582
            3164940920000, // _rotationInterest: ~3164.94
            172800 // _whitelistingPeriod: 2 days
        );

        console2.log("VariableInterestRate deployed at:", address(vir));

        vm.stopBroadcast();
    }
}
