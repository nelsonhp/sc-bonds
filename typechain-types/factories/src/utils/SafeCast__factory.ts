/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { SafeCast, SafeCastInterface } from "../../../src/utils/SafeCast";

const _abi = [
  {
    inputs: [],
    name: "SafeCast__NegativeValue",
    type: "error",
  },
  {
    inputs: [],
    name: "SafeCast__ValueDoesNotFit",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea26469706673582212201292f50adfc7996e2623c6df8bf3573b36fec921514564d4a3b50b0768bb40fb64736f6c63430008140033";

type SafeCastConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeCastConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeCast__factory extends ContractFactory {
  constructor(...args: SafeCastConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SafeCast & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SafeCast__factory {
    return super.connect(runner) as SafeCast__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeCastInterface {
    return new Interface(_abi) as SafeCastInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SafeCast {
    return new Contract(address, _abi, runner) as unknown as SafeCast;
  }
}