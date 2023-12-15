import './style.css';
import { base64ToBytes, bytesToBase64 } from '../lib';

const text = '5L2g5aW9IEhlbGxvIFdvcmxkICE=';
const bytes = base64ToBytes(text);
const base64 = bytesToBase64(bytes);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Bytes-Base64</h1>
      <p class="text">
        origin base64: "${text}"
      </p>
      <p class="text">
      base64ToBytes("${text}") === [${bytes}]
      </p>
      <p class="text">
      bytesToBase64([${bytes}]) === "${base64}"
      </p>
  </div>
`
