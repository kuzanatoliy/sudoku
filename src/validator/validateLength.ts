/**
 * @param value property that should be validated
 * @param min minimun value
 * @param max maximin value
 * @returns true if value more than min and less than max
 */
export const validateLength = <TValue extends { length: number }>(
  value: TValue,
  min: number,
  max: number
) => value.length > min && value.length < max;

/**
 * @param value property that should be validated
 * @param min minimun value
 * @returns true if value more than min
 */
export const validateMinLength = <TValue extends { length: number }>(
  value: TValue,
  min: number
) => value.length > min;

/**
 * @param value property that should be validated
 * @param max maximin value
 * @returns true if value less than max
 */
export const validateMaxLength = <TValue extends { length: number }>(
  value: TValue,
  max: number
) => value.length < max;
