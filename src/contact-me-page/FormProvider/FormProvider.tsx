import { TParentComponent } from 'types';

import { FormContext } from './FormContext';
import { useFormState } from './hooks';

export const DeviceProvider: TParentComponent = (props) => {
  const formState = useFormState();

  return (
    <FormContext.Provider value={formState}>
      {props.children}
    </FormContext.Provider>
  );
};
