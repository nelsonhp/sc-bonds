/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  BilateralTrade,
  BilateralTradeInterface,
} from "../../../../src/trade/bilateral/BilateralTrade";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IRegister",
        name: "_register",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_forwarder",
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
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum ITrade.Status",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "NotifyTrade",
    type: "event",
  },
  {
    inputs: [],
    name: "approve",
    outputs: [
      {
        internalType: "enum ITrade.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyerAccount",
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
    name: "details",
    outputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tradeDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "executeTransfer",
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
    name: "getDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tradeDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "valueDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ITrade.TradeDetail",
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
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
    name: "paymentID",
    outputs: [
      {
        internalType: "bytes8",
        name: "",
        type: "bytes8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
    outputs: [
      {
        internalType: "contract IRegister",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sellerAccount",
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
        components: [
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tradeDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "valueDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ITrade.TradeDetail",
        name: "_details",
        type: "tuple",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum ITrade.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060409080825234620002e757606081620011048038038091620000258285620002ec565b833981010312620002e75780516001600160a01b038082169291839003620002e757602062000063856200005b83860162000326565b940162000326565b608052600091600183556200007762000355565b9486519063c41251a160e01b9586835283600498168884015260249285818581865afa908115620002bb578791620002c5575b5080156200025d575b156200021b57839089519788521695868882015284818481855afa90811562000211578691620001dd575b50156200019b576001548684620000f462000355565b60028054919092166001600160a01b0319918216179091558954161788556001600160a81b0319161760018190559060ff6200012f62000355565b9260a01c169660068810156200018a575050865193845216917fb04efa95c2e317d8afba4237350a971f1ce59ef6fbbf2eb3f1a7e3f3f106a8f49190a451610d599081620003ab823960805181818161069d015261089a0152f35b634e487b7160e01b86526021905284fd5b875162461bcd60e51b8152808801859052601e818401527f4275796572206d75737420626520612076616c696420696e766573746f7200006044820152606490fd5b620002029150853d871162000209575b620001f98183620002ec565b8101906200033b565b38620000de565b503d620001ed565b89513d88823e3d90fd5b885162461bcd60e51b8152808901869052601f818501527f53656e646572206d75737420626520612076616c696420696e766573746f72006044820152606490fd5b506200026862000355565b89516314aa469760e31b81529085168982015285818581865afa908115620002bb57879162000299575b50620000b3565b620002b49150863d88116200020957620001f98183620002ec565b3862000292565b8a513d89823e3d90fd5b620002e09150863d88116200020957620001f98183620002ec565b38620000aa565b600080fd5b601f909101601f19168101906001600160401b038211908210176200031057604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620002e757565b90816020910312620002e757518015158103620002e75790565b6080516001600160a01b03163314806200039e575b156200039a57601319360136811162000384573560601c90565b634e487b7160e01b600052601160045260246000fd5b3390565b5060143610156200036a56fe6080604081815260048036101561001557600080fd5b600092833560e01c90816310547851146107d85750806312424e3f146107af5780631aa3a00814610786578063200d2ed214610758578063489147d7146107315780634dc415de14610712578063565974d3146106c6578063572b6c051461066c578063835d2d2e146103e1578063b787cfe614610170578063d84ffb41146101445763fbbf93a0146100a757600080fd5b3461014057826003193601126101405760a092608083516100c781610826565b828152826020820152828582015282606082015201528151906100e982610826565b60035492838352600180861b03809254169160208401928352600554908285019182526006549360608601948552608060075496019586528351968752511660208601525190840152516060830152516080820152f35b8280fd5b50503461016c578160031936011261016c57513060c01b6001600160c01b0319168152602090f35b5080fd5b5091903461016c5760a036600319011261016c5780519261019084610826565b803584526024916001600160a01b0390833582811681036103dd57602091828801918252808801604435815260608901606435815260808a01916084358352866101d8610897565b8160025416988991160361038d576001549960ff8b60a01c169a60068c101561037b578b61031a578883895116838d868b51958694859363c41251a160e01b8552840152165afa908115610310578d916102e3575b501561027c5750600080516020610d048339815191529798999a9b519586600355511698896bffffffffffffffffffffffff60a01b82541617905551600555516006555160075551908152a480f35b8960376084928a89519362461bcd60e51b85528401528201527f4275796572206d75737420626520612076616c696420696e766573746f72206560448201527f76656e206f6e206368616e67696e672064657461696c730000000000000000006064820152fd5b6103039150893d8b11610309575b6102fb8183610858565b81019061087a565b3861022d565b503d6102f1565b87513d8f823e3d90fd5b865162461bcd60e51b8152808c018a90526036818401527f43616e6e6f74206368616e6765207468652074726164652064657461696c7320604482015275756e6c65737320696e2064726166742073746174757360501b6064820152608490fd5b50634e487b7160e01b8c5260218a528bfd5b845162461bcd60e51b8152808a018890526025818c01527f4f6e6c79207468652073656c6c65722063616e20757064617465207468697320604482015264747261646560d81b6064820152608490fd5b8580fd5b5091903461016c578160031936011261016c57600282541461062a5760028255610409610897565b6002546001600160a01b0393919084169084168190036105c95760015460ff8160a01c1660068110156105b65760030361055c5760ff60a01b198116600160a21b17600155855460035485516323b872dd60e01b815280890194909452908616602484015260448301526020949190859082906064908290879087165af1908115610552578391610535575b50156104f25780600254169085541660ff60015460a01c169160035460068410156104df578686979850600080516020610d048339815191529160019751908152a4555160018152f35b634e487b7160e01b855260218852602485fd5b825162461bcd60e51b8152808601859052601760248201527f746865207472616e7366657220686173206661696c65640000000000000000006044820152606490fd5b61054c9150853d8711610309576102fb8183610858565b38610495565b84513d85823e3d90fd5b835162461bcd60e51b8152602081880152602e60248201527f546865207472616465206d75737420626520616363657074656420627920746860448201526d65206275796572206265666f726560901b6064820152608490fd5b634e487b7160e01b845260218752602484fd5b825162461bcd60e51b8152602081870152603560248201527f4f6e6c79207468652073656c6c65722063616e20636f6e6669726d20746865206044820152747061796d656e74206f6e207468697320747261646560581b6064820152608490fd5b5162461bcd60e51b8152602081840152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b5034610140576020366003190112610140576001600160a01b0391903582811691908290036106c2576020935051917f000000000000000000000000000000000000000000000000000000000000000016148152f35b8380fd5b509034610140578260031936011261014057600354915460055460065460075484519586526001600160a01b039093166020860152928401526060830191909152608082015260a09150f35b833461072e578060031936011261072e5761072b610b39565b80f35b80fd5b50346101405782600319360112610140575490516001600160a01b03909116815260209150f35b50503461016c578160031936011261016c576107829060ff60015460a01c169051918291826107fd565b0390f35b50503461016c578160031936011261016c5760015490516001600160a01b039091168152602090f35b50503461016c578160031936011261016c57610782906107cd610906565b9051918291826107fd565b84903461016c578160031936011261016c576002546001600160a01b03168152602090f35b9190602083019260068210156108105752565b634e487b7160e01b600052602160045260246000fd5b60a0810190811067ffffffffffffffff82111761084257604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761084257604052565b90816020910312610892575180151581036108925790565b600080fd5b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806108fb575b156108f75760131936013681116108e1573560601c90565b634e487b7160e01b600052601160045260246000fd5b3390565b5060143610156108c9565b61090e610897565b6002546001600160a01b0391908216908216811480610b20575b610a0757610934610897565b600454831692168214806109ec575b6109a85760405162461bcd60e51b815260206004820152603360248201527f7468652074726164652063616e6e6f7420626520617070726f76656420696e20604482015272746869732063757272656e742073746174757360681b6064820152608490fd5b60ff600360a01b8160a01b1960015416178060015560a01c169160035491600684101561081057600080516020610d0483398151915260208594604051908152a490565b5060ff60015460a01c16600681101561081057600114610943565b90600354908115610ae45760055415610aa65760065415610a685760ff600160a01b8160a01b1960015416179182600155600454169160a01c1692600684101561081057600080516020610d0483398151915260208594604051908152a490565b60405162461bcd60e51b81526020600482015260166024820152751d985b1d594819185d19481b9bdd081919599a5b995960521b6044820152606490fd5b60405162461bcd60e51b81526020600482015260166024820152751d1c9859194819185d19481b9bdd081919599a5b995960521b6044820152606490fd5b60405162461bcd60e51b81526020600482015260146024820152731c5d585b9d1a5d1e481b9bdd081919599a5b995960621b6044820152606490fd5b5060ff60015460a01c1660068110156108105715610928565b6001805460ff8160a01c169160068310156108105760028314610cc557610b5e610897565b6002546001600160a01b0390811694909391841685149081610cb9575b50610c705750610b89610897565b60045483169216821480610c42575b610bfd5760405162461bcd60e51b815260206004820152603360248201527f7468652074726164652063616e6e6f742062652072656a656374656420696e20604482015272746869732063757272656e742073746174757360681b6064820152608490fd5b805460ff60a01b1916600160a11b179081905560035460a09190911c60ff1692906006841015610810576020600080516020610d0483398151915291604051908152a4565b5060ff815460a01c16600681101561081057818114908115610c65575b50610b98565b600391501438610c5f565b60ff60a01b1916600160a11b179081905560045460035460a09290921c60ff1693921691906006841015610810576020600080516020610d0483398151915291604051908152a4565b60049150141538610b7b565b60405162461bcd60e51b8152602060048201526016602482015275151c98591948185b1c9958591e481c995a9958dd195960521b6044820152606490fdfeb04efa95c2e317d8afba4237350a971f1ce59ef6fbbf2eb3f1a7e3f3f106a8f4a2646970667358221220cf6b641b1ff1b1e86d6c7310bf84ba20c4f768d01ba991ae610d8fd1402c37ba64736f6c63430008140033";

type BilateralTradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BilateralTradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BilateralTrade__factory extends ContractFactory {
  constructor(...args: BilateralTradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _register: AddressLike,
    _buyer: AddressLike,
    _forwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _register,
      _buyer,
      _forwarder,
      overrides || {}
    );
  }
  override deploy(
    _register: AddressLike,
    _buyer: AddressLike,
    _forwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _register,
      _buyer,
      _forwarder,
      overrides || {}
    ) as Promise<
      BilateralTrade & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BilateralTrade__factory {
    return super.connect(runner) as BilateralTrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BilateralTradeInterface {
    return new Interface(_abi) as BilateralTradeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BilateralTrade {
    return new Contract(address, _abi, runner) as unknown as BilateralTrade;
  }
}