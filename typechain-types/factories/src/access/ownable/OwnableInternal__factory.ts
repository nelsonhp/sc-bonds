/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OwnableInternal,
  OwnableInternalInterface,
} from "../../../../src/access/ownable/OwnableInternal";

const _abi = [
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
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
] as const;

export class OwnableInternal__factory {
  static readonly abi = _abi;
  static createInterface(): OwnableInternalInterface {
    return new Interface(_abi) as OwnableInternalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OwnableInternal {
    return new Contract(address, _abi, runner) as unknown as OwnableInternal;
  }
}
