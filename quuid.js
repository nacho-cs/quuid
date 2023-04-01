import crypto from "crypto";
class uuid {
  v4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
      (c === "x"
        ? (Math.random() * 16) | 0
        : (Math.random() * 16) | (0 & 0x3) | 0x8
      ).toString(16)
    );
  }

  short() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) =>
      (c === "x"
        ? (Math.random() * 16) | 0
        : (Math.random() * 16) | (0 & 0x3) | 0x8
      ).toString(16)
    );
  }

  v1() {
    const n = Date.now();
    return "xxxxxxxx-xxxx-1xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
      (c === "x"
        ? (n + Math.random() * 16) % 16 | 0
        : (Math.random() * 16) | (0 & 0x3) | 0x8
      ).toString(16)
    );
  }

  id(bytes) {
    const arr = new Uint8Array(bytes);
    crypto.getRandomValues(arr);
    const num = BigInt.asUintN(
      bytes * 8,
      BigInt(
        "0x" +
          Array.from(arr)
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("")
      )
    );
    return num.toString(36);
  }
}

export default uuid;
