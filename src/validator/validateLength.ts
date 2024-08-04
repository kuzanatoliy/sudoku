/**
 * @param value property that should be validated
 * @param options required validation configuration (min - minimun value, max - maximin value)
 * @returns
 */
export const validateLength = <TValue extends { length: number }>(
  value: TValue,
  options: { min: number; max: number }
) => value.length > options.min && value.length < options.max;

/**
 * @param value property that should be validated
 * @param options required validation configuration (min - minimun value)
 * @returns true if value more than min
 */
export const validateMinLength = <TValue extends { length: number }>(
  value: TValue,
  options: { min: number }
) => value.length > options.min;

/**
 * @param value property that should be validated
 * @param options required validation configuration (max - maximum value)
 * @returns true if value less than max
 */
export const validateMaxLength = <TValue extends { length: number }>(
  value: TValue,
  options: { max: number }
) => value.length < options.max;
