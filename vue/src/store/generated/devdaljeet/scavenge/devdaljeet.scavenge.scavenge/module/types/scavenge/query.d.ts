import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../scavenge/params";
import { Scavenge } from "../scavenge/scavenge";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Commit } from "../scavenge/commit";
export declare const protobufPackage = "devdaljeet.scavenge.scavenge";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetScavengeRequest {
    index: string;
}
export interface QueryGetScavengeResponse {
    scavenge: Scavenge | undefined;
}
export interface QueryAllScavengeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllScavengeResponse {
    scavenge: Scavenge[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCommitRequest {
    index: string;
}
export interface QueryGetCommitResponse {
    commit: Commit | undefined;
}
export interface QueryAllCommitRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCommitResponse {
    commit: Commit[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetScavengeRequest: {
    encode(message: QueryGetScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeRequest;
    fromJSON(object: any): QueryGetScavengeRequest;
    toJSON(message: QueryGetScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeRequest>): QueryGetScavengeRequest;
};
export declare const QueryGetScavengeResponse: {
    encode(message: QueryGetScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeResponse;
    fromJSON(object: any): QueryGetScavengeResponse;
    toJSON(message: QueryGetScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeResponse>): QueryGetScavengeResponse;
};
export declare const QueryAllScavengeRequest: {
    encode(message: QueryAllScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeRequest;
    fromJSON(object: any): QueryAllScavengeRequest;
    toJSON(message: QueryAllScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeRequest>): QueryAllScavengeRequest;
};
export declare const QueryAllScavengeResponse: {
    encode(message: QueryAllScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeResponse;
    fromJSON(object: any): QueryAllScavengeResponse;
    toJSON(message: QueryAllScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeResponse>): QueryAllScavengeResponse;
};
export declare const QueryGetCommitRequest: {
    encode(message: QueryGetCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitRequest;
    fromJSON(object: any): QueryGetCommitRequest;
    toJSON(message: QueryGetCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitRequest>): QueryGetCommitRequest;
};
export declare const QueryGetCommitResponse: {
    encode(message: QueryGetCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitResponse;
    fromJSON(object: any): QueryGetCommitResponse;
    toJSON(message: QueryGetCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitResponse>): QueryGetCommitResponse;
};
export declare const QueryAllCommitRequest: {
    encode(message: QueryAllCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitRequest;
    fromJSON(object: any): QueryAllCommitRequest;
    toJSON(message: QueryAllCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitRequest>): QueryAllCommitRequest;
};
export declare const QueryAllCommitResponse: {
    encode(message: QueryAllCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitResponse;
    fromJSON(object: any): QueryAllCommitResponse;
    toJSON(message: QueryAllCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitResponse>): QueryAllCommitResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Scavenge by index. */
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    /** Queries a list of Scavenge items. */
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
    /** Queries a Commit by index. */
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    /** Queries a list of Commit items. */
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
