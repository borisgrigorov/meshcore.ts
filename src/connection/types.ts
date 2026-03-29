export interface Contact {
    // 32 byte public key of the contact
    publicKey: Uint8Array;
    type: number;
    flags: number;
    outPathLen: number;
    // 64 byte array of the out path, only first outPathLen bytes are valid
    outPath: Uint8Array;
    advName: string;
    lastAdvert: number;
    /// Latitude with 6 decimals, multiplied by 10^6. For example, 49.155250 would be represented as 49155250.
    advLat: number;
    /// Longitude with 6 decimals, multiplied by 10^6. For example, 16.546054 would be represented as 16546054.
    advLon: number;
    lastMod: number;
}

export interface SelfInfo {
    type: number;
    txPower: number;
    maxTxPower: number;
    publicKey: Uint8Array[32];
    advLat: number;
    advLon: number;
    reserved: Uint8Array[3];
    manualAddContacts: number;
    radioFreq: number;
    radioBw: number;
    radioSf: number;
    radioCr: number;
    name: string;
}

export interface SendMessageResult {
    result: number;
    expectedAckCrc: number;
    estTimeout: number;
}

export interface DeviceInfo {
    firmwareVer: number;
    reserved: Uint8Array;
    firmware_build_date: string;
    manufacturerModel: string;
}
export interface ContactMessage {
    pubKeyPrefix: Uint8Array;
    pathLen: number;
    txtType: number;
    senderTimestamp: number;
    text: string;
}

export interface ChannelMessage {
    channelIdx: number;
    pathLen: number;
    txtType: number;
    senderTimestamp: number;
    text: string;
}

export interface WaitingMessage {
    contactMessage?: ContactMessage;
    channelMessage?: ChannelMessage;
    channelData?: any;
}

export interface Channel {
    channelIdx: number;
    name: string;
    secret: Uint8Array;
}

export interface StatusResult {
    batt_milli_volts: number;
    curr_tx_queue_len: number;
    noise_floor: number;
    last_rssi: number;
    n_packets_recv: number;
    n_packets_sent: number;
    total_air_time_secs: number;
    total_up_time_secs: number;
    n_sent_flood: number;
    n_sent_direct: number;
    n_recv_flood: number;
    n_recv_direct: number;
    err_events: number;
    last_snr: number;
    n_direct_dups: number;
    n_flood_dups: number;
}
