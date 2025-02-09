"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initiator__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "dope_",
                type: "address",
            },
            {
                internalType: "contract IERC20",
                name: "paper_",
                type: "address",
            },
            {
                internalType: "address",
                name: "controller_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "Opened",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "cost",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "isOpened",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "bytes4",
                        name: "color",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "background",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes2",
                        name: "options",
                        type: "bytes2",
                    },
                    {
                        internalType: "uint8[4]",
                        name: "viewbox",
                        type: "uint8[4]",
                    },
                    {
                        internalType: "uint8[4]",
                        name: "body",
                        type: "uint8[4]",
                    },
                    {
                        internalType: "uint8[10]",
                        name: "order",
                        type: "uint8[10]",
                    },
                    {
                        internalType: "bytes2",
                        name: "mask",
                        type: "bytes2",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                ],
                internalType: "struct IHustlerActions.SetMetadata",
                name: "meta",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint32",
                name: "gasLimit",
                type: "uint32",
            },
        ],
        name: "mintFromDopeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "bytes4",
                        name: "color",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes4",
                        name: "background",
                        type: "bytes4",
                    },
                    {
                        internalType: "bytes2",
                        name: "options",
                        type: "bytes2",
                    },
                    {
                        internalType: "uint8[4]",
                        name: "viewbox",
                        type: "uint8[4]",
                    },
                    {
                        internalType: "uint8[4]",
                        name: "body",
                        type: "uint8[4]",
                    },
                    {
                        internalType: "uint8[10]",
                        name: "order",
                        type: "uint8[10]",
                    },
                    {
                        internalType: "bytes2",
                        name: "mask",
                        type: "bytes2",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                ],
                internalType: "struct IHustlerActions.SetMetadata",
                name: "meta",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint32",
                name: "gasLimit",
                type: "uint32",
            },
        ],
        name: "mintOGFromDopeTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "uint32",
                name: "gasLimit",
                type: "uint32",
            },
        ],
        name: "open",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        name: "release",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_release",
                type: "uint256",
            },
        ],
        name: "setRelease",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var Initiator__factory = /** @class */ (function () {
    function Initiator__factory() {
    }
    Initiator__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Initiator__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Initiator__factory.abi = _abi;
    return Initiator__factory;
}());
exports.Initiator__factory = Initiator__factory;
//# sourceMappingURL=Initiator__factory.js.map