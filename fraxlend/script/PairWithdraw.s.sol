// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PairWithdrawScript is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(vm.addr(deployerPrivateKey));

        // Get the pair address from environment variable
        address pair = vm.envAddress("PAIR");
        uint256 amount = vm.envUint("AMOUNT");

        // Perform withdrawal
        FraxlendPair(pair).withdraw(
            amount,
            msg.sender, // receiver
            msg.sender // owner
        );
        console2.log("Withdrawal complete! Amount:", amount);

        vm.stopBroadcast();
    }
}

interface IERC20Metadata {
    function decimals() external view returns (uint8);
}
