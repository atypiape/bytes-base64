import { BASE64_CHARS } from './common';

/**
 * Converts `Uint8Array` byte array to Base64 string
 * @param {Uint8Array} bytes - `Uint8Array` byte array
 * @returns {string} Base64 string
 */
export function bytesToBase64(bytes: Uint8Array): string {
  if (!ArrayBuffer.isView(bytes) || bytes.BYTES_PER_ELEMENT !== 1) {
    throw new Error("bytesToBase64: parameter 1 must be a 'Uint8Array'");
  }

  // 创建一个空的字符串，用来存储 base64 字符
  let base64 = "";

  // 遍历字节数组，每三个字节为一组
  for (let i = 0; i < bytes.length; i += 3) {
    // 将三个字节拼接成一个 24 位的二进制数
    const bits = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
    // 将 24 位的二进制数分成四个 6 位的二进制数
    const b1 = (bits >> 18) & 63;
    const b2 = (bits >> 12) & 63;
    const b3 = (bits >> 6) & 63;
    const b4 = bits & 63;
    // 将四个 6 位的二进制数转换成对应的 base64 字符，然后拼接到字符串
    base64 +=
    BASE64_CHARS[b1] + BASE64_CHARS[b2] + BASE64_CHARS[b3] + BASE64_CHARS[b4];
  }
  
  // 根据字节数组的长度，判断是否需要在 base64 字符串末尾添加等号
  const padding = bytes.length % 3;
  if (padding > 0) {
    // 如果字节数组的长度不是 3 的倍数，那么需要添加等号，每个等号代表一个字节
    base64 =
      base64.substring(0, base64.length - (3 - padding)) +
      "===".substring(0, 3 - padding);
  }

  return base64;
}
