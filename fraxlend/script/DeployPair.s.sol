// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";
import {FraxlendPair} from "../src/contracts/FraxlendPair.sol";

contract DeployPairScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        vm.startBroadcast(deployer);

        address borrowAsset = vm.envAddress("BORROW_ASSET");
        address collateral = vm.envAddress("COLLATERAL_ASSET");
        address aspOracle = vm.envAddress("ORACLE");
        address rateContract = 0xd0DE14604E7B64FF22EaA5Aafc2C520C04A9bE59; // Sepolia
        // address rateContract = 0x31CA9b1779e0BFAf3F5005ac4Bf2Bd74DCB8c8cE; // Arbitrum

        // Config data parameters
        uint32 maxOracleDeviation = 5000;
        uint64 fullUtilizationRate = 90000;
        // uint256 maxLTV = 0; // noop maxLTV, allow any LTV
        uint256 maxLTV = 60000; // 60%
        uint256 liquidationFee = 10000;
        uint256 protocolLiquidationFee = 1000;

        bytes memory configData = abi.encode(
            borrowAsset,
            collateral,
            aspOracle,
            maxOracleDeviation,
            rateContract,
            fullUtilizationRate,
            maxLTV,
            liquidationFee,
            protocolLiquidationFee
        );

        // Immutable parameters
        address circuitBreakerAddress = deployer;
        address comptrollerAddress = deployer;
        address timelockAddress = deployer;

        bytes memory immutables = abi.encode(circuitBreakerAddress, comptrollerAddress, timelockAddress);

        // Custom config parameters
        string memory nameOfContract = "Test Lending Pair";
        string memory symbolOfContract = "faspVER";
        uint8 decimalsOfContract = 18;

        bytes memory customConfigData = abi.encode(nameOfContract, symbolOfContract, decimalsOfContract);

        // Deploy the contract
        FraxlendPair newPair = new FraxlendPair(configData, immutables, customConfigData);

        console2.log("New FraxlendPair deployed at:", address(newPair));

        vm.stopBroadcast();
    }
}
