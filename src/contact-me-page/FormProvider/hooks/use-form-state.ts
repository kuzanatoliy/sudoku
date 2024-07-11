import { createSignal } from 'solid-js';

export const useFormState = () => {
  const [state] = createSignal({});

  return state;
};
