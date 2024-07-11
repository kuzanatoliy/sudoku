import { createContext, Accessor } from 'solid-js';

import { TFormState } from './types';

export const FormContext = createContext<Accessor<TFormState>>(() => {
  throw 'Error: It is neccessary to use FormProvider';
});
