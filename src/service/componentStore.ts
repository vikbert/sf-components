import { writable } from 'svelte/store';
import data from './componentData';
import type Component from '../type/Component';

const createStore = (data: Component[]) => {
  const backup: Component[] = data;

  const { subscribe, set, update } = writable(data);

  const search = (searchKey: string) => {
    update((value) => {
      const searchLowerCase = searchKey.toLowerCase();
      return value.filter((item: Component) => {
        return (
          item.name.toLowerCase().includes(searchLowerCase) ||
          item.desc.toLowerCase().includes(searchLowerCase)
        );
      });
    });
    return backup;
  };

  const recovery = () => {
    set(backup);
  };

  return { subscribe, recovery, search };
};

export const componentStore = createStore(data);
