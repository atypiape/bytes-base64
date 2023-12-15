import { BASE64_CHARS } from './common';

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;

/**
 * Converts Base64 string to `Uint8Array` byte array
 * @param {string} base64 Base64 string
 * @returns {Uint8Array} `Uint8Array` byte array
 */
export function base64ToBytes(base64: string): Uint8Array {
    if ((base64.length * 3) % 4 !== 0) {
        throw new TypeError(`[base64ToBytes]: Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.test(base64)) {
        throw new TypeError(`[base64ToBytes]: Invalid base64 string.`);
    }

    // 计算 base64 字符串末尾的等号代表的位数
    const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
    // 去掉 base64 字符串末尾的等号
    const temp = base64.replace(/=/g, "A");

    // 创建一个空的数组，用来存储字节
    let bytes: number[] = [];

    // 遍历 base64 字符串，每四个字符为一组
    for (let i = 0; i < temp.length; i += 4) {
      // 将四个 base64 字符转换成对应的 6 位的二进制数
      let b1 = BASE64_CHARS.indexOf(temp[i]);
      let b2 = BASE64_CHARS.indexOf(temp[i + 1]);
      let b3 = BASE64_CHARS.indexOf(temp[i + 2]);
      let b4 = BASE64_CHARS.indexOf(temp[i + 3]);
      // 将四个 6 位的二进制数拼接成一个 24 位的二进制数
      let bits = (b1 << 18) | (b2 << 12) | (b3 << 6) | b4;
      // 将 24 位的二进制数分成三个 8 位的二进制数
      let c1 = (bits >> 16) & 255;
      let c2 = (bits >> 8) & 255;
      let c3 = bits & 255;
      // 将三个 8 位的二进制数转换成对应的字节，然后存入数组
      bytes.push(c1, c2, c3);
    }

    // 根据末尾的等号代表的位数删除多余的字节
    bytes = bytes.slice(0, bytes.length - padding);

    // 返回字节数组
    return new Uint8Array(bytes);
  }