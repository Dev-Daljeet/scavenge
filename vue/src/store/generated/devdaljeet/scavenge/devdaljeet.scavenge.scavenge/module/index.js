// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRevealSolution } from "./types/scavenge/tx";
import { MsgSubmitScavenge } from "./types/scavenge/tx";
import { MsgCommitSolution } from "./types/scavenge/tx";
const types = [
    ["/devdaljeet.scavenge.scavenge.MsgRevealSolution", MsgRevealSolution],
    ["/devdaljeet.scavenge.scavenge.MsgSubmitScavenge", MsgSubmitScavenge],
    ["/devdaljeet.scavenge.scavenge.MsgCommitSolution", MsgCommitSolution],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgRevealSolution: (data) => ({ typeUrl: "/devdaljeet.scavenge.scavenge.MsgRevealSolution", value: MsgRevealSolution.fromPartial(data) }),
        msgSubmitScavenge: (data) => ({ typeUrl: "/devdaljeet.scavenge.scavenge.MsgSubmitScavenge", value: MsgSubmitScavenge.fromPartial(data) }),
        msgCommitSolution: (data) => ({ typeUrl: "/devdaljeet.scavenge.scavenge.MsgCommitSolution", value: MsgCommitSolution.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
