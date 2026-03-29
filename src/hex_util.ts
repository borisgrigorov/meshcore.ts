class HexUtil {
    static bytesToHex(bytes: Uint8Array): string {
        return Array.from(bytes)
            .map((byte) => {
                return byte.toString(16).padStart(2, "0");
            })
            .join("");
    }
}

export default HexUtil;
