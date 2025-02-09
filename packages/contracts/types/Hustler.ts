/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface HustlerInterface extends ethers.utils.Interface {
  functions: {
    "addRles(uint8,bytes[])": FunctionFragment;
    "attributes(uint256)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "bodyRle(uint8,uint256)": FunctionFragment;
    "carParts(uint256)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "enforcer()": FunctionFragment;
    "hustlerParts(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "metadata(uint256)": FunctionFragment;
    "mintOGTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)": FunctionFragment;
    "mintTo(address,bytes)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "render(string,string,uint8,bytes4,bytes4,uint8[4],bytes[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setEnforcer(address)": FunctionFragment;
    "setMetadata(uint256,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unequip(uint256,uint8[])": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRles",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "attributes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "bodyRle",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "carParts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "enforcer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hustlerParts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "metadata",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOGTo",
    values: [
      string,
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "render",
    values: [
      string,
      string,
      BigNumberish,
      BytesLike,
      BytesLike,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setEnforcer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMetadata",
    values: [
      BigNumberish,
      string,
      BytesLike,
      BytesLike,
      BytesLike,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unequip",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addRles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attributes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bodyRle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "carParts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enforcer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hustlerParts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintOGTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "render", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnforcer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unequip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "AddRles(uint8,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "MetadataUpdate(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddRles"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetadataUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type AddRlesEvent = TypedEvent<
  [number, BigNumber],
  { part: number; len: BigNumber }
>;

export type AddRlesEventFilter = TypedEventFilter<AddRlesEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { account: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type MetadataUpdateEvent = TypedEvent<[BigNumber], { id: BigNumber }>;

export type MetadataUpdateEventFilter = TypedEventFilter<MetadataUpdateEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export type URIEvent = TypedEvent<
  [string, BigNumber],
  { value: string; id: BigNumber }
>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface Hustler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HustlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRles(
      part: BigNumberish,
      _rles: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    attributes(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    bodyRle(
      part: BigNumberish,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    carParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    enforcer(overrides?: CallOverrides): Promise<[string]>;

    hustlerParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    metadata(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, string] & {
        color: string;
        background: string;
        mask: string;
        options: string;
        age: BigNumber;
        name: string;
      }
    >;

    mintOGTo(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mintTo(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mintTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)"(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    render(
      title: string,
      subtitle: string,
      resolution: BigNumberish,
      background: BytesLike,
      color: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      parts: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEnforcer(
      enforcer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMetadata(
      hustlerId: BigNumberish,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unequip(
      hustlerId: BigNumberish,
      slots: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  addRles(
    part: BigNumberish,
    _rles: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  attributes(
    hustlerId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  bodyRle(
    part: BigNumberish,
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  carParts(
    hustlerId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  enforcer(overrides?: CallOverrides): Promise<string>;

  hustlerParts(
    hustlerId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metadata(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber, string] & {
      color: string;
      background: string;
      mask: string;
      options: string;
      age: BigNumber;
      name: string;
    }
  >;

  mintOGTo(
    to: string,
    name: string,
    color: BytesLike,
    background: BytesLike,
    options: BytesLike,
    viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    mask: BytesLike,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mintTo(address,bytes)"(
    to: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mintTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)"(
    to: string,
    name: string,
    color: BytesLike,
    background: BytesLike,
    options: BytesLike,
    viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    mask: BytesLike,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  render(
    title: string,
    subtitle: string,
    resolution: BigNumberish,
    background: BytesLike,
    color: BytesLike,
    viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    parts: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEnforcer(
    enforcer_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMetadata(
    hustlerId: BigNumberish,
    name: string,
    color: BytesLike,
    background: BytesLike,
    options: BytesLike,
    viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    mask: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(hustlerId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unequip(
    hustlerId: BigNumberish,
    slots: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addRles(
      part: BigNumberish,
      _rles: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    attributes(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    bodyRle(
      part: BigNumberish,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    carParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    enforcer(overrides?: CallOverrides): Promise<string>;

    hustlerParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metadata(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, string] & {
        color: string;
        background: string;
        mask: string;
        options: string;
        age: BigNumber;
        name: string;
      }
    >;

    mintOGTo(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mintTo(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)"(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    render(
      title: string,
      subtitle: string,
      resolution: BigNumberish,
      background: BytesLike,
      color: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      parts: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setEnforcer(enforcer_: string, overrides?: CallOverrides): Promise<void>;

    setMetadata(
      hustlerId: BigNumberish,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unequip(
      hustlerId: BigNumberish,
      slots: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddRles(uint8,uint256)"(part?: null, len?: null): AddRlesEventFilter;
    AddRles(part?: null, len?: null): AddRlesEventFilter;

    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "MetadataUpdate(uint256)"(id?: null): MetadataUpdateEventFilter;
    MetadataUpdate(id?: null): MetadataUpdateEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    addRles(
      part: BigNumberish,
      _rles: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    attributes(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bodyRle(
      part: BigNumberish,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    carParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    enforcer(overrides?: CallOverrides): Promise<BigNumber>;

    hustlerParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metadata(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mintOGTo(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mintTo(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mintTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)"(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    render(
      title: string,
      subtitle: string,
      resolution: BigNumberish,
      background: BytesLike,
      color: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      parts: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEnforcer(
      enforcer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMetadata(
      hustlerId: BigNumberish,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unequip(
      hustlerId: BigNumberish,
      slots: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addRles(
      part: BigNumberish,
      _rles: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    attributes(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bodyRle(
      part: BigNumberish,
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    carParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enforcer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hustlerParts(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metadata(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintOGTo(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mintTo(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mintTo(address,string,bytes4,bytes4,bytes2,uint8[4],uint8[4],bytes2,bytes)"(
      to: string,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      title: string,
      subtitle: string,
      resolution: BigNumberish,
      background: BytesLike,
      color: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      parts: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEnforcer(
      enforcer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMetadata(
      hustlerId: BigNumberish,
      name: string,
      color: BytesLike,
      background: BytesLike,
      options: BytesLike,
      viewbox: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      body: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      mask: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      hustlerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unequip(
      hustlerId: BigNumberish,
      slots: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
