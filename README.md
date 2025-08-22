# Bytes-Base64

For converting between `Uint8Array` and `Base64` strings. This library is primarily developed for **WeChat Mini Programs** and has been verified to work on mini programs.

- Extremely small compressed size
- No dependencies (no need to install [Buffer](https://www.npmjs.com/package/buffer)) 
- Compatible with `Node.js`, browser, and `WeChat Mini Programs`
- Tested with `Jest`

----

用于 `Uint8Array` 和 `Base64` 字符串的相互转换，此库主要为**微信小程序**开发，已在小程序上验证。

- 非常小的压缩尺寸
- 没有任何依赖（无需安装 [Buffer](https://www.npmjs.com/package/buffer)）
- 兼容 `Node.js`、浏览器，以及**微信小程序**
- 通过 `Jest` 测试

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

test('[1]', () => {
  const base64 = 'SGVsbG8gd29ybGQ=';
  const bytes = base64ToBytes(base64);
  expect(bytes).toEqual(new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]));
});

test('[2]', () => {
  const bytes = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
  const base64 = bytesToBase64(bytes);
  expect(base64).toBe('SGVsbG8gd29ybGQ=');
});

test('[3]', () => {
  const bytes = base64ToBytes('SGVsbG8gd29ybGQ=');
  const base64 = bytesToBase64(bytes);
  expect(base64).toBe('SGVsbG8gd29ybGQ=');
});

test('[4]', () => {
  const bytes = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
  const base64 = bytesToBase64(bytes);
  const decodedBytes = base64ToBytes(base64);
  expect(decodedBytes).toEqual(bytes);
});
```

