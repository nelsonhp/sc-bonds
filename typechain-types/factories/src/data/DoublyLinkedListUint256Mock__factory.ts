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
import type {
  DoublyLinkedListUint256Mock,
  DoublyLinkedListUint256MockInterface,
} from "../../../src/data/DoublyLinkedListUint256Mock";

const _abi = [
  {
    inputs: [],
    name: "DoublyLinkedList__InvalidInput",
    type: "error",
  },
  {
    inputs: [],
    name: "DoublyLinkedList__NonExistentEntry",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "contains",
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
        name: "prevValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "insertAfter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nextValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "insertBefore",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "next",
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
    name: "pop",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "prev",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oldValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "replace",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shift",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "unshift",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576105cc908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600090813560e01c806312fc41ca146103b457806335671214146103935780634cc822151461031f5780635e77a33c146102fe578063959ac48414610260578063a4ece52c14610232578063c0f0eddc1461020c578063c34052e0146101e0578063e81cf24c14610165578063edd004e5146101395763f6b3e5851461009a57600080fd5b346101355760203660031901126101355782356100b78380610488565b9083811561012557602095506100cc826103ec565b156100dd575b505050519015158152f35b61011a9394508080528086528185822055818152600186528481205590816000526000602052806040600020556000526001602052604060002055565b6001903880806100d2565b83516305d4b02f60e31b81528690fd5b5080fd5b5082346101615760203660031901126101615760209261015a913590610488565b9051908152f35b8280fd5b5082903461016157610176366103d1565b939092610182846103ec565b156101d257506101a86020946101988584610429565b6101a28685610488565b906104c7565b92836101b9575b5050519015158152f35b81526001845280828120558084528181205583806101af565b8251630f71d89360e11b8152fd5b5090346102095760203660031901126102095750610200602092356103ec565b90519015158152f35b80fd5b50346101355761020061022d602093610224366103d1565b92908092610429565b6104c7565b503461013557816003193601126101355761024f82602093610429565b9061025982610537565b5051908152f35b50903461020957602036600319011261020957823561027f8280610429565b829082156102ee5760209550610294836103ec565b156102a6575b50505090519015158152f35b82859394506102d09190816000526000602052806040600020556000526001602052604060002055565b8281528085528082812055808052600185522055600138808061029a565b84516305d4b02f60e31b81528690fd5b5034610135576102006101a2602093610316366103d1565b92908092610488565b503461013557602036600319011261013557602092829035610340816103ec565b61034e575050519015158152f35b9091925061035c8183610429565b6103668284610488565b818452838652808585205583526001855283832055815280828120558083528181205560019038806101af565b5082346101615760203660031901126101615760209261015a913590610429565b503461013557816003193601126101355761024f82602093610488565b60409060031901126103e7576004359060243590565b600080fd5b80151590816103f9575090565b600081815260208190526040812054158015935061041657505090565b6040919250808052600160205220541490565b91909182600052600181016020526040600020549283811515928361047f575b8361046a575b50505061045857565b604051630f71d89360e11b8152600490fd5b610475929350610488565b141538838161044f565b81159350610449565b9190918260005280602052604060002054928381151592836104be575b836104b35750505061045857565b610475929350610429565b811593506104a5565b600093929184918315610525576104dd846103ec565b156104e9575b50505050565b604093949550808352826020528484842055848352600160205283832055816020528083832055815260016020522055600190388080806104e3565b6040516305d4b02f60e31b8152600490fd5b90600091600090610547816103ec565b61054f575050565b9091925061055d8183610429565b6105678284610488565b81845283602052806040852055835260016020526040832055815280604081205580602052604081205560019056fea26469706673582212205379e5dbbf1d3f9e54fa85acc4e606a9321231b646dbcf70b8b96de35e63588264736f6c63430008140033";

type DoublyLinkedListUint256MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoublyLinkedListUint256MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoublyLinkedListUint256Mock__factory extends ContractFactory {
  constructor(...args: DoublyLinkedListUint256MockConstructorParams) {
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
      DoublyLinkedListUint256Mock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DoublyLinkedListUint256Mock__factory {
    return super.connect(runner) as DoublyLinkedListUint256Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoublyLinkedListUint256MockInterface {
    return new Interface(_abi) as DoublyLinkedListUint256MockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DoublyLinkedListUint256Mock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DoublyLinkedListUint256Mock;
  }
}
