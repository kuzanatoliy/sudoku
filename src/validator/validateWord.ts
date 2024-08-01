import { WORD_REGEXP } from './regexp';

export const validateWord = <TValue extends string>(value: TValue) =>
  WORD_REGEXP.test(value);
