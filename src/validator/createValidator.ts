export type TValidatorProp<TValue, TOptions> = {
  validator: (value: TValue) => boolean;
  errorMessage: string & TOptions;
};

export const createValidator =
  <TValue, TOptions>(...props: TValidatorProp<TValue, TOptions>[]) =>
  (value: TValue) => {
    for (let i = 0; i < props.length; i++) {
      if (!props[i].validator(value)) {
        return { isValid: false, errorMessage: props[i].errorMessage };
      }
    }
    return { isValid: true };
  };
