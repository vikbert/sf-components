import { componentStore } from './componentStore';
import { writable } from 'svelte/store';

const DEFAULT_TAB_NAME = 'components';
const DEFAULT_TAG_NAME = 'application';

export const filter = writable({
    search: '',
    tag: DEFAULT_TAG_NAME,
});

export const currentTab = writable(DEFAULT_TAB_NAME);
export const components = componentStore;
