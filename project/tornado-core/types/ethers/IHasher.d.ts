/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IHasherInterface extends Interface {
  functions: {
    MiMCSponge: TypedFunctionDescription<{
      encode([in_xL, in_xR]: [BigNumberish, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class IHasher extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IHasher;
  attach(addressOrName: string): IHasher;
  deployed(): Promise<IHasher>;

  on(event: EventFilter | string, listener: Listener): IHasher;
  once(event: EventFilter | string, listener: Listener): IHasher;
  addListener(eventName: EventFilter | string, listener: Listener): IHasher;
  removeAllListeners(eventName: EventFilter | string): IHasher;
  removeListener(eventName: any, listener: Listener): IHasher;

  interface: IHasherInterface;

  functions: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      xL: BigNumber;
      xR: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  MiMCSponge(
    in_xL: BigNumberish,
    in_xR: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "MiMCSponge(uint256,uint256)"(
    in_xL: BigNumberish,
    in_xR: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    xL: BigNumber;
    xR: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  filters: {};

  estimate: {
    MiMCSponge(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "MiMCSponge(uint256,uint256)"(
      in_xL: BigNumberish,
      in_xR: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}