import { componentStore } from './componentStore';
import { writable } from 'svelte/store';

export const filter = writable({
    search: '',
    tag: 'application',
});
export const components = componentStore;
