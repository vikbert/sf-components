import { writable } from 'svelte/store';

export const components = writable([
  { name: 'Asset', tag: 'utility', versions: ['5.2'] },
  { name: 'BrowserKit', tag: 'utility', versions: ['5.2'] },
  { name: 'Cache', tag: 'utility', versions: ['5.2'] },
]);
