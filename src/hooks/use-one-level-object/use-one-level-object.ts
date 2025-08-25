export const useOneLevelObject = (
  object: unknown | Record<string, unknown>
) => {
  if (!!object && typeof object === 'object') {
    const queue: { prefix: string; value: Record<string, unknown> }[] = [
      { prefix: '', value: object as Record<string, unknown> },
    ];
    const result: Record<string, unknown> = {};
    while (queue.length) {
      const curr = queue.pop()!;
      Object.keys(curr.value).forEach((key) => {
        if (!!curr.value[key] && typeof curr.value[key] === 'object') {
          queue.push({ prefix: `${curr.prefix}${key}.`, value: curr.value });
        } else {
          result[`${curr.prefix}${key}`] = curr.value;
        }
      });
    }
    return result;
  } else {
    return object;
  }
};
