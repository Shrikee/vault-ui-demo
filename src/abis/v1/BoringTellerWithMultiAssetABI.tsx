export default [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address"
            },
            {
                name: "_vault",
                type: "address",
                internalType: "address"
            },
            {
                name: "_accountant",
                type: "address",
                internalType: "address"
            },
            {
                name: "_weth",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "accountant",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract AccountantWithRateProviders"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "addAsset",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "contract ERC20"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "allowAll",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "allowFrom",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "allowOperator",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "allowTo",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "authority",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract Authority"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "beforeTransfer",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address"
            },
            {
                name: "to",
                type: "address",
                internalType: "address"
            },
            {
                name: "operator",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "bulkDeposit",
        inputs: [
            {
                name: "depositAsset",
                type: "address",
                internalType: "contract ERC20"
            },
            {
                name: "depositAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "minimumMint",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "to",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "bulkWithdraw",
        inputs: [
            {
                name: "withdrawAsset",
                type: "address",
                internalType: "contract ERC20"
            },
            {
                name: "shareAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "minimumAssets",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "to",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "assetsOut",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "denyAll",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "denyFrom",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "denyOperator",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "denyTo",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "deposit",
        inputs: [
            {
                name: "depositAsset",
                type: "address",
                internalType: "contract ERC20"
            },
            {
                name: "depositAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "minimumMint",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "depositNonce",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint96",
                internalType: "uint96"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "depositWithPermit",
        inputs: [
            {
                name: "depositAsset",
                type: "address",
                internalType: "contract ERC20"
            },
            {
                name: "depositAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "minimumMint",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "v",
                type: "uint8",
                internalType: "uint8"
            },
            {
                name: "r",
                type: "bytes32",
                internalType: "bytes32"
            },
            {
                name: "s",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        outputs: [
            {
                name: "shares",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "fromDenyList",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isPaused",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "isSupported",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ERC20"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "nativeWrapper",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract WETH"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "operatorDenyList",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "pause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "publicDepositHistory",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "refundDeposit",
        inputs: [
            {
                name: "nonce",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address"
            },
            {
                name: "depositAsset",
                type: "address",
                internalType: "address"
            },
            {
                name: "depositAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "shareAmount",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "depositTimestamp",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "shareLockUpPeriodAtTimeOfDeposit",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "removeAsset",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "contract ERC20"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setAuthority",
        inputs: [
            {
                name: "newAuthority",
                type: "address",
                internalType: "contract Authority"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "setShareLockPeriod",
        inputs: [
            {
                name: "_shareLockPeriod",
                type: "uint64",
                internalType: "uint64"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "shareLockPeriod",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint64",
                internalType: "uint64"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "shareUnlockTime",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "toDenyList",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "unpause",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "vault",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract BoringVault"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "event",
        name: "AllowFrom",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "AllowOperator",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "AllowTo",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "AssetAdded",
        inputs: [
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "AssetRemoved",
        inputs: [
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "AuthorityUpdated",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "newAuthority",
                type: "address",
                indexed: true,
                internalType: "contract Authority"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "BulkDeposit",
        inputs: [
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "depositAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "BulkWithdraw",
        inputs: [
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "shareAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "DenyFrom",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "DenyOperator",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "DenyTo",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Deposit",
        inputs: [
            {
                name: "nonce",
                type: "uint256",
                indexed: true,
                internalType: "uint256"
            },
            {
                name: "receiver",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "depositAsset",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "depositAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "shareAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "depositTimestamp",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "shareLockPeriodAtTimeOfDeposit",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "DepositRefunded",
        inputs: [
            {
                name: "nonce",
                type: "uint256",
                indexed: true,
                internalType: "uint256"
            },
            {
                name: "depositHash",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32"
            },
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "Paused",
        inputs: [],
        anonymous: false
    },
    {
        type: "event",
        name: "Unpaused",
        inputs: [],
        anonymous: false
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__AssetNotSupported",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__BadDepositHash",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__DualDeposit",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__MinimumAssetsNotMet",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__MinimumMintNotMet",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__Paused",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__PermitFailedAndAllowanceTooLow",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__ShareLockPeriodTooLong",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__SharesAreLocked",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__SharesAreUnLocked",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__TransferDenied",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address"
            },
            {
                name: "to",
                type: "address",
                internalType: "address"
            },
            {
                name: "operator",
                type: "address",
                internalType: "address"
            }
        ]
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__ZeroAssets",
        inputs: []
    },
    {
        type: "error",
        name: "TellerWithMultiAssetSupport__ZeroShares",
        inputs: []
    }
]

