/* eslint-disable solid/no-proxy-apis */
import { createStore } from 'solid-js/store';
import { createSignal, createEffect } from 'solid-js';

import { TFormState } from '../types';

export const useFormState = () => {
  const [store, setStore] = createStore<TFormState>({
    firstName: '',
  });

  createEffect(() => {
    console.log(store.firstName);
  });

  const [state] = createSignal({
    ...store,
    onChangeFirstName: (value: string) => setStore('firstName', value),
  });

  return state;
};
