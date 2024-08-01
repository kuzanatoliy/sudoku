import { WORD_REGEXP } from './regexp';

/**
 * @param value property that should be validated
 * @returns true if value is word
 */
export const validateWord = <TValue extends string>(value: TValue) =>
  WORD_REGEXP.test(value);
