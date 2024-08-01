/**
 * @param value property that should be validated
 * @returns true if value is not empty
 */
export const validateRequiredValue = <TValue>(value: TValue) => !!value;
