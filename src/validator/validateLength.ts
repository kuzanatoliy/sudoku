export const validateLength = <TValue extends { length: number }>(
  value: TValue,
  min: number,
  max: number
) => value.length > min && value.length < max;

export const validateMinLength = <TValue extends { length: number }>(
  value: TValue,
  min: number
) => value.length > min;

export const validateMaxLength = <TValue extends { length: number }>(
  value: TValue,
  max: number
) => value.length < max;
