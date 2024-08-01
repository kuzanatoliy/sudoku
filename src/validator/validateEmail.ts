import { EMAIL_REGEXP } from './regexp';

export const validateEmail = <TValue extends string>(value: TValue) =>
  EMAIL_REGEXP.test(value);
