export const fraxlendPairAbi = [
  {
    "inputs": [
      { "internalType": "bytes", "name": "_configData", "type": "bytes" },
      { "internalType": "bytes", "name": "_immutables", "type": "bytes" },
      { "internalType": "uint256", "name": "_maxLTV", "type": "uint256" },
      { "internalType": "uint256", "name": "_liquidationFee", "type": "uint256" },
      { "internalType": "uint256", "name": "_maturityDate", "type": "uint256" },
      { "internalType": "uint256", "name": "_penaltyRate", "type": "uint256" },
      { "internalType": "bool", "name": "_isBorrowerWhitelistActive", "type": "bool" },
      { "internalType": "bool", "name": "_isLenderWhitelistActive", "type": "bool" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  { "inputs": [], "name": "AlreadyInitialized", "type": "error" },
  { "inputs": [], "name": "BadProtocolFee", "type": "error" },
  { "inputs": [], "name": "BadSwapper", "type": "error" },
  { "inputs": [], "name": "BorrowerSolvent", "type": "error" },
  { "inputs": [], "name": "BorrowerWhitelistRequired", "type": "error" },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_borrow", "type": "uint256" },
      { "internalType": "uint256", "name": "_collateral", "type": "uint256" },
      { "internalType": "uint256", "name": "_exchangeRate", "type": "uint256" }
    ],
    "name": "Insolvent",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_assets", "type": "uint256" },
      { "internalType": "uint256", "name": "_request", "type": "uint256" }
    ],
    "name": "InsufficientAssetsInContract",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_expected", "type": "address" },
      { "internalType": "address", "name": "_actual", "type": "address" }
    ],
    "name": "InvalidPath",
    "type": "error"
  },
  { "inputs": [], "name": "NameEmpty", "type": "error" },
  { "inputs": [], "name": "NotDeployer", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "NotOnWhitelist", "type": "error" },
  { "inputs": [], "name": "OnlyApprovedBorrowers", "type": "error" },
  { "inputs": [], "name": "OnlyApprovedLenders", "type": "error" },
  { "inputs": [], "name": "OnlyTimeLock", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "_oracle", "type": "address" }], "name": "OracleLTEZero", "type": "error" },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_blockTimestamp", "type": "uint256" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" }
    ],
    "name": "PastDeadline",
    "type": "error"
  },
  { "inputs": [], "name": "PastMaturity", "type": "error" },
  { "inputs": [], "name": "PriceTooLarge", "type": "error" },
  { "inputs": [], "name": "ProtocolOrOwnerOnly", "type": "error" },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_minOut", "type": "uint256" },
      { "internalType": "uint256", "name": "_actual", "type": "uint256" }
    ],
    "name": "SlippageTooHigh",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_sender", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_collateralAmount", "type": "uint256" }
    ],
    "name": "AddCollateral",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "_interestEarned", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_rate", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_deltaTime", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_feesAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_feesShare", "type": "uint256" }
    ],
    "name": "AddInterest",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "_receiver", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_borrowAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_sharesAdded", "type": "uint256" }
    ],
    "name": "BorrowAsset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "uint32", "name": "_newFee", "type": "uint32" }],
    "name": "ChangeFee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "caller", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "assets", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "_swapperAddress", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_borrowAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_borrowShares", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_initialCollateralAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_amountCollateralOut", "type": "uint256" }
    ],
    "name": "LeveragedPosition",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_collateralForLiquidator", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_sharesToLiquidate", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_amountLiquidatorToRepay", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_sharesToAdjust", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_amountToAdjust", "type": "uint256" }
    ],
    "name": "Liquidate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_sender", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_collateralAmount", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "_receiver", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" }
    ],
    "name": "RemoveCollateral",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_payer", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_amountToRepay", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_shares", "type": "uint256" }
    ],
    "name": "RepayAsset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_borrower", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "_swapperAddress", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_collateralToSwap", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_amountAssetOut", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_sharesRepaid", "type": "uint256" }
    ],
    "name": "RepayAssetWithCollateral",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_address", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "SetApprovedBorrower",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "_address", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "SetApprovedLender",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_swapper", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "SetSwapper",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "_oldAddress", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "_newAddress", "type": "address" }
    ],
    "name": "SetTimeLock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_rate", "type": "uint256" }],
    "name": "UpdateExchangeRate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "_ratePerSec", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_deltaTime", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_utilizationRate", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "_newRatePerSec", "type": "uint256" }
    ],
    "name": "UpdateRate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "caller", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "assets", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint128", "name": "_shares", "type": "uint128" },
      { "indexed": false, "internalType": "address", "name": "_recipient", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "_amountToTransfer", "type": "uint256" }
    ],
    "name": "WithdrawFees",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "CIRCUIT_BREAKER_ADDRESS",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "COMPTROLLER_ADDRESS",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DEPLOYER_ADDRESS",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "FRAXLEND_WHITELIST_ADDRESS",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TIME_LOCK_ADDRESS",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_collateralAmount", "type": "uint256" },
      { "internalType": "address", "name": "_borrower", "type": "address" }
    ],
    "name": "addCollateral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "addInterest",
    "outputs": [
      { "internalType": "uint256", "name": "_interestEarned", "type": "uint256" },
      { "internalType": "uint256", "name": "_feesAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "_feesShare", "type": "uint256" },
      { "internalType": "uint64", "name": "_newRate", "type": "uint64" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "approvedBorrowers",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "approvedLenders",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "asset",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_borrowAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "_collateralAmount", "type": "uint256" },
      { "internalType": "address", "name": "_receiver", "type": "address" }
    ],
    "name": "borrowAsset",
    "outputs": [{ "internalType": "uint256", "name": "_shares", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "borrowerWhitelistActive",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint32", "name": "_newFee", "type": "uint32" }],
    "name": "changeFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cleanLiquidationFee",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "collateralContract",
    "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentRateInfo",
    "outputs": [
      { "internalType": "uint64", "name": "lastBlock", "type": "uint64" },
      { "internalType": "uint64", "name": "feeToProtocolRate", "type": "uint64" },
      { "internalType": "uint64", "name": "lastTimestamp", "type": "uint64" },
      { "internalType": "uint64", "name": "ratePerSec", "type": "uint64" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }
    ],
    "name": "decreaseAllowance",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_amount", "type": "uint256" },
      { "internalType": "address", "name": "_receiver", "type": "address" }
    ],
    "name": "deposit",
    "outputs": [{ "internalType": "uint256", "name": "_sharesReceived", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dirtyLiquidationFee",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchangeRateInfo",
    "outputs": [
      { "internalType": "uint32", "name": "lastTimestamp", "type": "uint32" },
      { "internalType": "uint224", "name": "exchangeRate", "type": "uint224" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getConstants",
    "outputs": [
      { "internalType": "uint256", "name": "_LTV_PRECISION", "type": "uint256" },
      { "internalType": "uint256", "name": "_LIQ_PRECISION", "type": "uint256" },
      { "internalType": "uint256", "name": "_UTIL_PREC", "type": "uint256" },
      { "internalType": "uint256", "name": "_FEE_PRECISION", "type": "uint256" },
      { "internalType": "uint256", "name": "_EXCHANGE_PRECISION", "type": "uint256" },
      { "internalType": "uint64", "name": "_DEFAULT_INT", "type": "uint64" },
      { "internalType": "uint16", "name": "_DEFAULT_PROTOCOL_FEE", "type": "uint16" },
      { "internalType": "uint256", "name": "_MAX_PROTOCOL_FEE", "type": "uint256" }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "addedValue", "type": "uint256" }
    ],
    "name": "increaseAllowance",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      { "internalType": "address[]", "name": "_approvedBorrowers", "type": "address[]" },
      { "internalType": "address[]", "name": "_approvedLenders", "type": "address[]" },
      { "internalType": "bytes", "name": "_rateInitCallData", "type": "bytes" }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lenderWhitelistActive",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_swapperAddress", "type": "address" },
      { "internalType": "uint256", "name": "_borrowAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "_initialCollateralAmount", "type": "uint256" },
      { "internalType": "uint256", "name": "_amountCollateralOutMin", "type": "uint256" },
      { "internalType": "address[]", "name": "_path", "type": "address[]" }
    ],
    "name": "leveragedPosition",
    "outputs": [{ "internalType": "uint256", "name": "_totalCollateralBalance", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint128", "name": "_sharesToLiquidate", "type": "uint128" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" },
      { "internalType": "address", "name": "_borrower", "type": "address" }
    ],
    "name": "liquidate",
    "outputs": [{ "internalType": "uint256", "name": "_collateralForLiquidator", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maturityDate",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxLTV",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracleDivide",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracleMultiply",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oracleNormalization",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "penaltyRate",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rateContract",
    "outputs": [{ "internalType": "contract IRateCalculator", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rateInitCallData",
    "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_shares", "type": "uint256" },
      { "internalType": "address", "name": "_receiver", "type": "address" },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "redeem",
    "outputs": [{ "internalType": "uint256", "name": "_amountToReturn", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_collateralAmount", "type": "uint256" },
      { "internalType": "address", "name": "_receiver", "type": "address" }
    ],
    "name": "removeCollateral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_shares", "type": "uint256" },
      { "internalType": "address", "name": "_borrower", "type": "address" }
    ],
    "name": "repayAsset",
    "outputs": [{ "internalType": "uint256", "name": "_amountToRepay", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_swapperAddress", "type": "address" },
      { "internalType": "uint256", "name": "_collateralToSwap", "type": "uint256" },
      { "internalType": "uint256", "name": "_amountAssetOutMin", "type": "uint256" },
      { "internalType": "address[]", "name": "_path", "type": "address[]" }
    ],
    "name": "repayAssetWithCollateral",
    "outputs": [{ "internalType": "uint256", "name": "_amountAssetOut", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "_borrowers", "type": "address[]" },
      { "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "setApprovedBorrowers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "_lenders", "type": "address[]" },
      { "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "setApprovedLenders",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_swapper", "type": "address" },
      { "internalType": "bool", "name": "_approval", "type": "bool" }
    ],
    "name": "setSwapper",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_newAddress", "type": "address" }],
    "name": "setTimeLock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "swappers",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_shares", "type": "uint256" },
      { "internalType": "bool", "name": "_roundUp", "type": "bool" }
    ],
    "name": "toBorrowAmount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_amount", "type": "uint256" },
      { "internalType": "bool", "name": "_roundUp", "type": "bool" }
    ],
    "name": "toBorrowShares",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalAsset",
    "outputs": [
      { "internalType": "uint128", "name": "amount", "type": "uint128" },
      { "internalType": "uint128", "name": "shares", "type": "uint128" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBorrow",
    "outputs": [
      { "internalType": "uint128", "name": "amount", "type": "uint128" },
      { "internalType": "uint128", "name": "shares", "type": "uint128" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCollateral",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  {
    "inputs": [],
    "name": "updateExchangeRate",
    "outputs": [{ "internalType": "uint256", "name": "_exchangeRate", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "userBorrowShares",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "userCollateralBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "version",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint128", "name": "_shares", "type": "uint128" },
      { "internalType": "address", "name": "_recipient", "type": "address" }
    ],
    "name": "withdrawFees",
    "outputs": [{ "internalType": "uint256", "name": "_amountToTransfer", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
