import { writable } from 'svelte/store';

export const components = writable([
  { name: 'Asset', tag: 'utility', symfony: '5.2' },
  { name: 'BrowserKit', tag: 'utility', symfony: '5.2' },
  { name: 'Cache', tag: 'utility', symfony: '5.2' },
]);
