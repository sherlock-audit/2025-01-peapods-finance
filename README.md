# Peapods contest details

- Join [Sherlock Discord](https://discord.gg/MABEWyASkp)
- Submit findings using the **Issues** page in your private contest repo (label issues as **Medium** or **High**)
- [Read for more details](https://docs.sherlock.xyz/audits/watsons)

# Q&A

### Q: On what chains are the smart contracts going to be deployed?
Ethereum, Arbitrum One, Base, Mode, Berachain
___

### Q: If you are integrating tokens, are you allowing only whitelisted tokens to work with the codebase or any complying with the standard? Are they assumed to have certain properties, e.g. be non-reentrant? Are there any types of [weird tokens](https://github.com/d-xo/weird-erc20) you want to integrate?
The main consideration we have with respect to whitelisting tokens is for pod LP rewards in the system driven by a RewardsWhitelist.sol contract we deploy, so we do have a case of requiring whitelisting of tokens but we drive and control this functionality. We do not formally work with weird tokens.
___

### Q: Are there any limitations on values set by admins (or other roles) in the codebase, including restrictions on array lengths?
For all access-controlled functions we have validations on restricting values at the beginning of the setters, so refer to those.
___

### Q: Are there any limitations on values set by admins (or other roles) in protocols you integrate with, including restrictions on array lengths?
No
___

### Q: Is the codebase expected to comply with any specific EIPs?
Many of our contracts implement ERC20 and ERC4626 which we attempt to comply with in the entirety of those standards for contracts that implement them.
___

### Q: Are there any off-chain mechanisms involved in the protocol (e.g., keeper bots, arbitrage bots, etc.)? We assume these mechanisms will not misbehave, delay, or go offline unless otherwise specified.
Our protocol and its value proposition assumes the existence of arbitrage bots across markets. We have some partners we work with for them to implement their arbitrage bots to keep market prices across assets in sync (and drive the protocol flywheel ultimately).

We will also have liquidations for our fraxlend fork implementation, which can be executed by either bots we create or third parties (liquidations are not restricted to anyone in particular).
___

### Q: What properties/invariants do you want to hold even if breaking them has a low/unknown impact?
For all vaults (ERC4626) we have in the system, the best case scenario is the collateral backing ratio (CBR, i.e. ratio of convertToAssets(shares) / shares) of the vault will always increase and never decrease. the scenario where this isn't necessarily the case is if bad debt is accrued on a lending pair. Otherwise outside of the case of bad debt we expect this CBR to only go upwards over time.
___

### Q: Please discuss any design choices you made.
The main consideration for a design choice we made is in a few places we implement unlimited (100%) slippage for dex swaps. Our expectation is wherever we implement this behavior that almost any swap from token0 to token1 will be of small enough value that it would rarely, if ever, be profitable to sandwich for profit by a bot.
___

### Q: Please provide links to previous audits (if any).
We have 3 audits that are currently unpublished by yAudit, Guardian, and Pashov. We are happy to provide the PDFs to your team upon request.
___

### Q: Please list any relevant protocol resources.
https://docs.peapods.finance/

https://peapods.finance/
___

### Q: Additional audit information.
Our codebases have a lot of intertwined protocols and integrations, however the most critical are going to be ensuring

1. WeightedIndex.sol, which is our core pod contract, is very secure as it will custody the most funds in the protocol
2. StakingPoolToken.sol and AutoCompoundingPodLp.sol also custody a lot of funds so ensuring there are no exploit vectors is critical
3. LeverageManager.sol contains the entry points `addLeverage` and `removeLeverage` where users will lever up and down their podded tokens and ultimately interact with the fraxlend fork to borrow funds among other things. There is a lot of underlying and somewhat complicated logic here but we want to make sure these two entry points are very secure and no vectors exist to drain funds.


# Audit scope

[contracts @ ac65d33fc3d269b4042cf7dfa855c1d39d9f8fe2](https://github.com/peapodsfinance/contracts/tree/ac65d33fc3d269b4042cf7dfa855c1d39d9f8fe2)
- [contracts/contracts/AutoCompoundingPodLp.sol](contracts/contracts/AutoCompoundingPodLp.sol)
- [contracts/contracts/AutoCompoundingPodLpFactory.sol](contracts/contracts/AutoCompoundingPodLpFactory.sol)
- [contracts/contracts/BulkPodYieldProcess.sol](contracts/contracts/BulkPodYieldProcess.sol)
- [contracts/contracts/DecentralizedIndex.sol](contracts/contracts/DecentralizedIndex.sol)
- [contracts/contracts/ERC20Bridgeable.sol](contracts/contracts/ERC20Bridgeable.sol)
- [contracts/contracts/IndexManager.sol](contracts/contracts/IndexManager.sol)
- [contracts/contracts/IndexUtils.sol](contracts/contracts/IndexUtils.sol)
- [contracts/contracts/LendingAssetVault.sol](contracts/contracts/LendingAssetVault.sol)
- [contracts/contracts/LendingAssetVaultFactory.sol](contracts/contracts/LendingAssetVaultFactory.sol)
- [contracts/contracts/PEAS.sol](contracts/contracts/PEAS.sol)
- [contracts/contracts/PodUnwrapLocker.sol](contracts/contracts/PodUnwrapLocker.sol)
- [contracts/contracts/ProtocolFeeRouter.sol](contracts/contracts/ProtocolFeeRouter.sol)
- [contracts/contracts/ProtocolFees.sol](contracts/contracts/ProtocolFees.sol)
- [contracts/contracts/RewardsWhitelist.sol](contracts/contracts/RewardsWhitelist.sol)
- [contracts/contracts/StakingPoolToken.sol](contracts/contracts/StakingPoolToken.sol)
- [contracts/contracts/TokenRewards.sol](contracts/contracts/TokenRewards.sol)
- [contracts/contracts/V3Locker.sol](contracts/contracts/V3Locker.sol)
- [contracts/contracts/WeightedIndex.sol](contracts/contracts/WeightedIndex.sol)
- [contracts/contracts/WeightedIndexFactory.sol](contracts/contracts/WeightedIndexFactory.sol)
- [contracts/contracts/Zapper.sol](contracts/contracts/Zapper.sol)
- [contracts/contracts/dex/AerodromeDexAdapter.sol](contracts/contracts/dex/AerodromeDexAdapter.sol)
- [contracts/contracts/dex/CamelotDexAdapter.sol](contracts/contracts/dex/CamelotDexAdapter.sol)
- [contracts/contracts/dex/UniswapDexAdapter.sol](contracts/contracts/dex/UniswapDexAdapter.sol)
- [contracts/contracts/flash/BalancerFlashSource.sol](contracts/contracts/flash/BalancerFlashSource.sol)
- [contracts/contracts/flash/FlashSourceBase.sol](contracts/contracts/flash/FlashSourceBase.sol)
- [contracts/contracts/flash/PodFlashSource.sol](contracts/contracts/flash/PodFlashSource.sol)
- [contracts/contracts/flash/UniswapV3FlashSource.sol](contracts/contracts/flash/UniswapV3FlashSource.sol)
- [contracts/contracts/interfaces/IAerodromeLpSugar.sol](contracts/contracts/interfaces/IAerodromeLpSugar.sol)
- [contracts/contracts/interfaces/IAerodromePool.sol](contracts/contracts/interfaces/IAerodromePool.sol)
- [contracts/contracts/interfaces/IAerodromePoolFactory.sol](contracts/contracts/interfaces/IAerodromePoolFactory.sol)
- [contracts/contracts/interfaces/IAerodromeRouter.sol](contracts/contracts/interfaces/IAerodromeRouter.sol)
- [contracts/contracts/interfaces/IAerodromeUniversalRouter.sol](contracts/contracts/interfaces/IAerodromeUniversalRouter.sol)
- [contracts/contracts/interfaces/IAerodromeVoter.sol](contracts/contracts/interfaces/IAerodromeVoter.sol)
- [contracts/contracts/interfaces/IAlgebraFactory.sol](contracts/contracts/interfaces/IAlgebraFactory.sol)
- [contracts/contracts/interfaces/IAlgebraKimV3Pool.sol](contracts/contracts/interfaces/IAlgebraKimV3Pool.sol)
- [contracts/contracts/interfaces/IAlgebraKimVolatilityOracle.sol](contracts/contracts/interfaces/IAlgebraKimVolatilityOracle.sol)
- [contracts/contracts/interfaces/IAlgebraSwapCallback.sol](contracts/contracts/interfaces/IAlgebraSwapCallback.sol)
- [contracts/contracts/interfaces/IAlgebraV3Pool.sol](contracts/contracts/interfaces/IAlgebraV3Pool.sol)
- [contracts/contracts/interfaces/ICCIPTokenBridge.sol](contracts/contracts/interfaces/ICCIPTokenBridge.sol)
- [contracts/contracts/interfaces/ICCIPTokenRouter.sol](contracts/contracts/interfaces/ICCIPTokenRouter.sol)
- [contracts/contracts/interfaces/ICLFactory.sol](contracts/contracts/interfaces/ICLFactory.sol)
- [contracts/contracts/interfaces/ICLPool.sol](contracts/contracts/interfaces/ICLPool.sol)
- [contracts/contracts/interfaces/ICamelotPair.sol](contracts/contracts/interfaces/ICamelotPair.sol)
- [contracts/contracts/interfaces/ICamelotRouter.sol](contracts/contracts/interfaces/ICamelotRouter.sol)
- [contracts/contracts/interfaces/ICurvePool.sol](contracts/contracts/interfaces/ICurvePool.sol)
- [contracts/contracts/interfaces/IDIAOracleV2.sol](contracts/contracts/interfaces/IDIAOracleV2.sol)
- [contracts/contracts/interfaces/IDecentralizedIndex.sol](contracts/contracts/interfaces/IDecentralizedIndex.sol)
- [contracts/contracts/interfaces/IDexAdapter.sol](contracts/contracts/interfaces/IDexAdapter.sol)
- [contracts/contracts/interfaces/IERC20Bridgeable.sol](contracts/contracts/interfaces/IERC20Bridgeable.sol)
- [contracts/contracts/interfaces/IERC20Metadata.sol](contracts/contracts/interfaces/IERC20Metadata.sol)
- [contracts/contracts/interfaces/IERC4626.sol](contracts/contracts/interfaces/IERC4626.sol)
- [contracts/contracts/interfaces/IFlashLoanRecipient.sol](contracts/contracts/interfaces/IFlashLoanRecipient.sol)
- [contracts/contracts/interfaces/IFlashLoanSource.sol](contracts/contracts/interfaces/IFlashLoanSource.sol)
- [contracts/contracts/interfaces/IFraxlendPair.sol](contracts/contracts/interfaces/IFraxlendPair.sol)
- [contracts/contracts/interfaces/IIndexManager.sol](contracts/contracts/interfaces/IIndexManager.sol)
- [contracts/contracts/interfaces/IIndexUtils.sol](contracts/contracts/interfaces/IIndexUtils.sol)
- [contracts/contracts/interfaces/IIndexUtils_LEGACY.sol](contracts/contracts/interfaces/IIndexUtils_LEGACY.sol)
- [contracts/contracts/interfaces/IInitializeSelector.sol](contracts/contracts/interfaces/IInitializeSelector.sol)
- [contracts/contracts/interfaces/ILendingAssetVault.sol](contracts/contracts/interfaces/ILendingAssetVault.sol)
- [contracts/contracts/interfaces/ILeverageManager.sol](contracts/contracts/interfaces/ILeverageManager.sol)
- [contracts/contracts/interfaces/IMinimalOracle.sol](contracts/contracts/interfaces/IMinimalOracle.sol)
- [contracts/contracts/interfaces/IMinimalSinglePriceOracle.sol](contracts/contracts/interfaces/IMinimalSinglePriceOracle.sol)
- [contracts/contracts/interfaces/INonfungiblePositionManager.sol](contracts/contracts/interfaces/INonfungiblePositionManager.sol)
- [contracts/contracts/interfaces/IPEAS.sol](contracts/contracts/interfaces/IPEAS.sol)
- [contracts/contracts/interfaces/IProtocolFeeRouter.sol](contracts/contracts/interfaces/IProtocolFeeRouter.sol)
- [contracts/contracts/interfaces/IProtocolFees.sol](contracts/contracts/interfaces/IProtocolFees.sol)
- [contracts/contracts/interfaces/IRewardsWhitelister.sol](contracts/contracts/interfaces/IRewardsWhitelister.sol)
- [contracts/contracts/interfaces/ISPTknOracle.sol](contracts/contracts/interfaces/ISPTknOracle.sol)
- [contracts/contracts/interfaces/IStakingConversionFactor.sol](contracts/contracts/interfaces/IStakingConversionFactor.sol)
- [contracts/contracts/interfaces/IStakingPoolToken.sol](contracts/contracts/interfaces/IStakingPoolToken.sol)
- [contracts/contracts/interfaces/ISwapRouter02.sol](contracts/contracts/interfaces/ISwapRouter02.sol)
- [contracts/contracts/interfaces/ISwapRouterAlgebra.sol](contracts/contracts/interfaces/ISwapRouterAlgebra.sol)
- [contracts/contracts/interfaces/ITokenRewards.sol](contracts/contracts/interfaces/ITokenRewards.sol)
- [contracts/contracts/interfaces/IUniswapV2Factory.sol](contracts/contracts/interfaces/IUniswapV2Factory.sol)
- [contracts/contracts/interfaces/IUniswapV2Pair.sol](contracts/contracts/interfaces/IUniswapV2Pair.sol)
- [contracts/contracts/interfaces/IUniswapV2Router02.sol](contracts/contracts/interfaces/IUniswapV2Router02.sol)
- [contracts/contracts/interfaces/IUniswapV3Pool.sol](contracts/contracts/interfaces/IUniswapV3Pool.sol)
- [contracts/contracts/interfaces/IV2Reserves.sol](contracts/contracts/interfaces/IV2Reserves.sol)
- [contracts/contracts/interfaces/IV3TwapUtilities.sol](contracts/contracts/interfaces/IV3TwapUtilities.sol)
- [contracts/contracts/interfaces/IVotingPool.sol](contracts/contracts/interfaces/IVotingPool.sol)
- [contracts/contracts/interfaces/IWETH.sol](contracts/contracts/interfaces/IWETH.sol)
- [contracts/contracts/interfaces/IWeightedIndexFactory.sol](contracts/contracts/interfaces/IWeightedIndexFactory.sol)
- [contracts/contracts/interfaces/IZapper.sol](contracts/contracts/interfaces/IZapper.sol)
- [contracts/contracts/libraries/AerodromeCommands.sol](contracts/contracts/libraries/AerodromeCommands.sol)
- [contracts/contracts/libraries/BokkyPooBahsDateTimeLibrary.sol](contracts/contracts/libraries/BokkyPooBahsDateTimeLibrary.sol)
- [contracts/contracts/libraries/FullMath.sol](contracts/contracts/libraries/FullMath.sol)
- [contracts/contracts/libraries/PoolAddress.sol](contracts/contracts/libraries/PoolAddress.sol)
- [contracts/contracts/libraries/PoolAddressAlgebra.sol](contracts/contracts/libraries/PoolAddressAlgebra.sol)
- [contracts/contracts/libraries/PoolAddressKimMode.sol](contracts/contracts/libraries/PoolAddressKimMode.sol)
- [contracts/contracts/libraries/PoolAddressSlipstream.sol](contracts/contracts/libraries/PoolAddressSlipstream.sol)
- [contracts/contracts/libraries/TickMath.sol](contracts/contracts/libraries/TickMath.sol)
- [contracts/contracts/libraries/VaultAccount.sol](contracts/contracts/libraries/VaultAccount.sol)
- [contracts/contracts/lvf/LeverageManager.sol](contracts/contracts/lvf/LeverageManager.sol)
- [contracts/contracts/lvf/LeverageManagerAccessControl.sol](contracts/contracts/lvf/LeverageManagerAccessControl.sol)
- [contracts/contracts/lvf/LeveragePositionCustodian.sol](contracts/contracts/lvf/LeveragePositionCustodian.sol)
- [contracts/contracts/lvf/LeveragePositions.sol](contracts/contracts/lvf/LeveragePositions.sol)
- [contracts/contracts/oracle/ChainlinkSinglePriceOracle.sol](contracts/contracts/oracle/ChainlinkSinglePriceOracle.sol)
- [contracts/contracts/oracle/DIAOracleV2SinglePriceOracle.sol](contracts/contracts/oracle/DIAOracleV2SinglePriceOracle.sol)
- [contracts/contracts/oracle/UniswapV3SinglePriceOracle.sol](contracts/contracts/oracle/UniswapV3SinglePriceOracle.sol)
- [contracts/contracts/oracle/V2ReservesCamelot.sol](contracts/contracts/oracle/V2ReservesCamelot.sol)
- [contracts/contracts/oracle/V2ReservesUniswap.sol](contracts/contracts/oracle/V2ReservesUniswap.sol)
- [contracts/contracts/oracle/aspTKNMinimalOracle.sol](contracts/contracts/oracle/aspTKNMinimalOracle.sol)
- [contracts/contracts/oracle/spTKNMinimalOracle.sol](contracts/contracts/oracle/spTKNMinimalOracle.sol)
- [contracts/contracts/twaputils/V3TwapAerodromeUtilities.sol](contracts/contracts/twaputils/V3TwapAerodromeUtilities.sol)
- [contracts/contracts/twaputils/V3TwapCamelotUtilities.sol](contracts/contracts/twaputils/V3TwapCamelotUtilities.sol)
- [contracts/contracts/twaputils/V3TwapKimUtilities.sol](contracts/contracts/twaputils/V3TwapKimUtilities.sol)
- [contracts/contracts/twaputils/V3TwapUtilities.sol](contracts/contracts/twaputils/V3TwapUtilities.sol)
- [contracts/contracts/voting/ConversionFactorPTKN.sol](contracts/contracts/voting/ConversionFactorPTKN.sol)
- [contracts/contracts/voting/ConversionFactorSPTKN.sol](contracts/contracts/voting/ConversionFactorSPTKN.sol)
- [contracts/contracts/voting/VotingPool.sol](contracts/contracts/voting/VotingPool.sol)

[fraxlend @ 5e8ac1c1341527b8eed24a21e9a77cee2ab6e892](https://github.com/peapodsfinance/fraxlend/tree/5e8ac1c1341527b8eed24a21e9a77cee2ab6e892)
- [fraxlend/src/contracts/FraxlendPair.sol](fraxlend/src/contracts/FraxlendPair.sol)
- [fraxlend/src/contracts/FraxlendPairAccessControl.sol](fraxlend/src/contracts/FraxlendPairAccessControl.sol)
- [fraxlend/src/contracts/FraxlendPairAccessControlErrors.sol](fraxlend/src/contracts/FraxlendPairAccessControlErrors.sol)
- [fraxlend/src/contracts/FraxlendPairConstants.sol](fraxlend/src/contracts/FraxlendPairConstants.sol)
- [fraxlend/src/contracts/FraxlendPairCore.sol](fraxlend/src/contracts/FraxlendPairCore.sol)
- [fraxlend/src/contracts/FraxlendPairDeployer.sol](fraxlend/src/contracts/FraxlendPairDeployer.sol)
- [fraxlend/src/contracts/FraxlendPairRegistry.sol](fraxlend/src/contracts/FraxlendPairRegistry.sol)
- [fraxlend/src/contracts/FraxlendWhitelist.sol](fraxlend/src/contracts/FraxlendWhitelist.sol)
- [fraxlend/src/contracts/LinearInterestRate.sol](fraxlend/src/contracts/LinearInterestRate.sol)
- [fraxlend/src/contracts/Timelock2Step.sol](fraxlend/src/contracts/Timelock2Step.sol)
- [fraxlend/src/contracts/VariableInterestRate.sol](fraxlend/src/contracts/VariableInterestRate.sol)
- [fraxlend/src/contracts/interfaces/IDualOracle.sol](fraxlend/src/contracts/interfaces/IDualOracle.sol)
- [fraxlend/src/contracts/interfaces/IERC4626Extended.sol](fraxlend/src/contracts/interfaces/IERC4626Extended.sol)
- [fraxlend/src/contracts/interfaces/IFraxlendPair.sol](fraxlend/src/contracts/interfaces/IFraxlendPair.sol)
- [fraxlend/src/contracts/interfaces/IFraxlendPairRegistry.sol](fraxlend/src/contracts/interfaces/IFraxlendPairRegistry.sol)
- [fraxlend/src/contracts/interfaces/IFraxlendWhitelist.sol](fraxlend/src/contracts/interfaces/IFraxlendWhitelist.sol)
- [fraxlend/src/contracts/interfaces/IRateCalculator.sol](fraxlend/src/contracts/interfaces/IRateCalculator.sol)
- [fraxlend/src/contracts/interfaces/IRateCalculatorV2.sol](fraxlend/src/contracts/interfaces/IRateCalculatorV2.sol)
- [fraxlend/src/contracts/interfaces/ISwapper.sol](fraxlend/src/contracts/interfaces/ISwapper.sol)
- [fraxlend/src/contracts/libraries/SafeERC20.sol](fraxlend/src/contracts/libraries/SafeERC20.sol)
- [fraxlend/src/contracts/libraries/VaultAccount.sol](fraxlend/src/contracts/libraries/VaultAccount.sol)
- [fraxlend/src/contracts/oracles/dual-oracles/DualOracleChainlinkUniV3.sol](fraxlend/src/contracts/oracles/dual-oracles/DualOracleChainlinkUniV3.sol)


