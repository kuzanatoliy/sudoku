import { EMAIL_REGEXP } from './regexp';

/**
 * @param value property that should be validated
 * @returns true if value is email
 */
export const validateEmail = <TValue extends string>(value: TValue) =>
  EMAIL_REGEXP.test(value);
