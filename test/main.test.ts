import { base64ToBytes, bytesToBase64 } from '@dist';

test('[1] Base64 to bytes', () => {
  const base64 = 'SGVsbG8gd29ybGQ=';
  const bytes = base64ToBytes(base64);
  expect(bytes).toEqual(new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]));
});

test('[2] Bytes to base64', () => {
  const bytes = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
  const base64 = bytesToBase64(bytes);
  expect(base64).toBe('SGVsbG8gd29ybGQ=');
});

test('[3] Base64 to bytes, bytes to base64', () => {
  const bytes = base64ToBytes('SGVsbG8gd29ybGQ=');
  const base64 = bytesToBase64(bytes);
  expect(base64).toBe('SGVsbG8gd29ybGQ=');
});

test('[4] Bytes to base64, base64 to bytes', () => {
  const bytes = new Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
  const base64 = bytesToBase64(bytes);
  const decodedBytes = base64ToBytes(base64);
  expect(decodedBytes).toEqual(bytes);
});

test('[5] Empty base64 string should return empty bytes', () => {
  const bytes = base64ToBytes('');
  expect(bytes).toEqual(new Uint8Array([]));
});

test('[6] Empty bytes should return empty base64 string', () => {
  const base64 = bytesToBase64(new Uint8Array([]));
  expect(base64).toBe('');
});

test('[7] Base64 with padding characters', () => {
  // 包含填充符 '=' 的Base64（对应字节长度不是3的倍数）
  const base64 = 'MQ=='; // 对应字节 [49]
  const bytes = base64ToBytes(base64);
  expect(bytes).toEqual(new Uint8Array([49]));
  
  // 反向转换验证
  const encoded = bytesToBase64(bytes);
  expect(encoded).toBe('MQ==');
});

test('[8] Base64 with special characters', () => {
  // 包含特殊字符的字节（如非打印ASCII）
  const bytes = new Uint8Array([0x00, 0xFF, 0x7F, 0x80, 0x20]);
  const base64 = bytesToBase64(bytes);
  expect(base64).toBe('AP9/gCA=');
  
  const decodedBytes = base64ToBytes(base64);
  expect(decodedBytes).toEqual(bytes);
});

test('[9] Long base64 string (multi-chunk processing)', () => {
  // 长字符串（测试分块处理逻辑）
  const longStr = 'a'.repeat(1000);
  const textEncoder = new TextEncoder();
  const textDecoder = new TextDecoder();
  const bytes = textEncoder.encode(longStr);
  
  const base64 = bytesToBase64(bytes);
  const decodedBytes = base64ToBytes(base64);
  
  expect(decodedBytes).toEqual(bytes);
  expect(textDecoder.decode(decodedBytes)).toBe(longStr);
});

test('[10] Invalid base64 characters should throw error', () => {
  // 包含Base64不允许的字符（如空格、中文、特殊符号）
  expect(() => base64ToBytes('SGVsbG8$d29ybGQ=')).toThrow(); // 包含$
  expect(() => base64ToBytes('SGVsbG8  d29ybGQ=')).toThrow(); // 包含空格
  expect(() => base64ToBytes('测试Base64')).toThrow(); // 包含中文
});

test('[11] Base64 with line breaks (common in some formats)', () => {
  // 包含换行符的Base64（某些场景下的格式化输出）
  const base64WithNewlines = 'SGVsbG8g\nd29ybGQ=';
  expect(() => base64ToBytes(base64WithNewlines)).toThrow(); // 严格模式下应报错
});