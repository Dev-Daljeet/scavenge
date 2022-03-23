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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
