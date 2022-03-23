import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "devdaljeet.scavenge.scavenge";
export interface MsgSubmitScavenge {
    creator: string;
    solutionHash: string;
    description: string;
    reward: string;
}
export interface MsgSubmitScavengeResponse {
}
export interface MsgCommitSolution {
    creator: string;
    solutionHash: string;
    solutionScavengerHash: string;
}
export interface MsgCommitSolutionResponse {
}
export declare const MsgSubmitScavenge: {
    encode(message: MsgSubmitScavenge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitScavenge;
    fromJSON(object: any): MsgSubmitScavenge;
    toJSON(message: MsgSubmitScavenge): unknown;
    fromPartial(object: DeepPartial<MsgSubmitScavenge>): MsgSubmitScavenge;
};
export declare const MsgSubmitScavengeResponse: {
    encode(_: MsgSubmitScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitScavengeResponse;
    fromJSON(_: any): MsgSubmitScavengeResponse;
    toJSON(_: MsgSubmitScavengeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitScavengeResponse>): MsgSubmitScavengeResponse;
};
export declare const MsgCommitSolution: {
    encode(message: MsgCommitSolution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolution;
    fromJSON(object: any): MsgCommitSolution;
    toJSON(message: MsgCommitSolution): unknown;
    fromPartial(object: DeepPartial<MsgCommitSolution>): MsgCommitSolution;
};
export declare const MsgCommitSolutionResponse: {
    encode(_: MsgCommitSolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolutionResponse;
    fromJSON(_: any): MsgCommitSolutionResponse;
    toJSON(_: MsgCommitSolutionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCommitSolutionResponse>): MsgCommitSolutionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
