const EnvironmentABI = [
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyBlockProducer",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyNotLastBlock",
    type: "error",
  },
  {
    inputs: [],
    name: "PastEpoch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "detail",
        type: "string",
      },
    ],
    name: "ValidationError",
    type: "error",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "findValue",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epochPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commissionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validatorThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IEnvironment.EnvironmentValue",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epochPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commissionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validatorThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IEnvironment.EnvironmentValue",
        name: "initialValue",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFirstBlock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isLastBlock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextValue",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epochPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commissionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validatorThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IEnvironment.EnvironmentValue",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epochPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commissionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validatorThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IEnvironment.EnvironmentValue",
        name: "newValue",
        type: "tuple",
      },
    ],
    name: "updateValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "updates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "epochPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commissionRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "validatorThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jailPeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IEnvironment.EnvironmentValue",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
    outputs: [
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epochPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commissionRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validatorThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jailThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jailPeriod",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const StakeManagerABI = [
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyInUse",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyJoined",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountMismatched",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyBLS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBLSLength",
    type: "error",
  },
  {
    inputs: [],
    name: "Locked",
    type: "error",
  },
  {
    inputs: [],
    name: "NoAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NotZeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "ObsoletedMethod",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyBlockProducer",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyNotLastBlock",
    type: "error",
  },
  {
    inputs: [],
    name: "PastEpoch",
    type: "error",
  },
  {
    inputs: [],
    name: "SameAsOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "StakerDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
    ],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedSender",
    type: "error",
  },
  {
    inputs: [],
    name: "UnknownToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AddedRewardBalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "oldBLSPublicKey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newBLSPublicKey",
        type: "bytes",
      },
    ],
    name: "BLSPublicKeyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimedCommissions",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockedUnstake",
        type: "uint256",
      },
    ],
    name: "ClaimedLockedUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimedRewards",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldOperator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockedUnstake",
        type: "uint256",
      },
    ],
    name: "UnstakedV2",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
    ],
    name: "ValidatorActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
    ],
    name: "ValidatorDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    name: "ValidatorJailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "ValidatorJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "ValidatorSlashed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
    ],
    name: "activateValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addRewardBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "allowlist",
    outputs: [
      {
        internalType: "contract IAllowlist",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "blsPublicKeyToOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "candidateManager",
    outputs: [
      {
        internalType: "contract ICandidateValidatorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "claimCommissions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockedUnstake",
        type: "uint256",
      },
    ],
    name: "claimLockedUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimUnstakes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "epochs",
        type: "uint256[]",
      },
    ],
    name: "deactivateValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "environment",
    outputs: [
      {
        internalType: "contract IEnvironment",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getBlockAndSlashes",
    outputs: [
      {
        internalType: "uint256",
        name: "blocks",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slashes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "getCommissions",
    outputs: [
      {
        internalType: "uint256",
        name: "commissions",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lockedUnstake",
        type: "uint256",
      },
    ],
    name: "getLockedUnstake",
    outputs: [
      {
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "claimable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getLockedUnstakeCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getLockedUnstakes",
    outputs: [
      {
        internalType: "enum Token.Type[]",
        name: "tokens",
        type: "uint8[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "unlockTimes",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "claimable",
        type: "bool[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getOperatorStakes",
    outputs: [
      {
        internalType: "uint256",
        name: "stakes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "getRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getStakerStakes",
    outputs: [
      {
        internalType: "address[]",
        name: "_validators",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "oasStakes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "woasStakes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "soasStakes",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getStakers",
    outputs: [
      {
        internalType: "address[]",
        name: "_stakers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_validators",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "getTotalRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getTotalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getUnstakes",
    outputs: [
      {
        internalType: "uint256",
        name: "oasUnstakes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "woasUnstakes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "soasUnstakes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getValidatorInfo",
    outputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "jailed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "candidate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "stakes",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "blsPublicKey",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getValidatorOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getValidatorStakes",
    outputs: [
      {
        internalType: "uint256",
        name: "stakes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getValidatorStakes",
    outputs: [
      {
        internalType: "address[]",
        name: "_stakers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "stakes",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getValidators",
    outputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "operators",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "stakes",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "blsPublicKeys",
        type: "bytes[]",
      },
      {
        internalType: "bool[]",
        name: "candidates",
        type: "bool[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEnvironment",
        name: "_environment",
        type: "address",
      },
      {
        internalType: "contract IAllowlist",
        name: "_allowlist",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "joinValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "operatorToOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "restakeCommissions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochs",
        type: "uint256",
      },
    ],
    name: "restakeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blocks",
        type: "uint256",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakeAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakeUpdates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakerSigners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum Token.Type",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
      {
        internalType: "enum Token.Type",
        name: "token",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstakeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "blsPublicKey",
        type: "bytes",
      },
    ],
    name: "updateBLSPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "updateOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validatorOwners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "validators",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastClaimCommission",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "blsPublicKey",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const CandidateManagerABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_environment",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakeManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_highStakes",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "PastEpoch",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "afterStakeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "environment",
    outputs: [
      {
        internalType: "contract IEnvironment",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getAll",
    outputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "operators",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "actives",
        type: "bool[]",
      },
      {
        internalType: "bool[]",
        name: "jailed",
        type: "bool[]",
      },
      {
        internalType: "uint256[]",
        name: "stakes",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "blsPublicKeys",
        type: "bytes[]",
      },
      {
        internalType: "bool[]",
        name: "candidates",
        type: "bool[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "howMany",
        type: "uint256",
      },
    ],
    name: "getHighStakes",
    outputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "operators",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "actives",
        type: "bool[]",
      },
      {
        internalType: "bool[]",
        name: "jailed",
        type: "bool[]",
      },
      {
        internalType: "uint256[]",
        name: "stakes",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "blsPublicKeys",
        type: "bytes[]",
      },
      {
        internalType: "bool[]",
        name: "candidates",
        type: "bool[]",
      },
      {
        internalType: "uint256",
        name: "newCursor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "highStakes",
    outputs: [
      {
        internalType: "contract IAddressList",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeManager",
    outputs: [
      {
        internalType: "contract IStakeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
