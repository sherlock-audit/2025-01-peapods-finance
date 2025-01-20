// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";

contract PairDepositScript is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(vm.addr(deployerPrivateKey));

        // Get the pair address from environment variable
        address pair = vm.envAddress("PAIR");
        uint256 depositAmount = vm.envUint("AMOUNT");

        address _asset = FraxlendPair(pair).asset();

        IERC20(_asset).approve(pair, depositAmount);

        // Perform deposit
        FraxlendPair(pair).deposit(depositAmount, msg.sender);
        console2.log("Deposit complete! Amount:", depositAmount);

        vm.stopBroadcast();
    }
}

interface IERC20Metadata {
    function decimals() external view returns (uint8);
}
