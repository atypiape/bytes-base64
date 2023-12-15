# Bytes-Base64

For the mutual conversion of `Uint8Array` and `Base64` strings.

- Very small minzipped size
- No dependencies (no need to install Buffer) 
- Compatible with `Node.js`, browser, and `Wechat-miniprogram`

----

用于 `Uint8Array` 和 `Base64` 字符串的相互转换。

- 非常小的压缩尺寸
- 没有任何依赖（无需安装 [Buffer](https://www.npmjs.com/package/buffer)）
- 兼容 `Node.js`、浏览器，以及**微信小程序**

## Usage

**NPM**

```bash
npm i bytes-base64
```

**YARN**

```bash
yarn add bytes-base64
```

### Example

```javascript
import { bytesToBase64, base64ToBytes } from 'bytes-base64';

// base64 -> Uint8Array
const bytes = base64ToBytes('5L2g5aW9IEhlbGxvIFdvcmxkICE=');

// Uint8Array -> base64
const base64 = bytesToBase64(bytes);

// Output: '5L2g5aW9IEhlbGxvIFdvcmxkICE='
console.log(base64);
```

