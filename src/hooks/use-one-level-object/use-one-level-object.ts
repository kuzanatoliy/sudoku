import { createSignal, createEffect } from 'solid-js';
import { turnObjectToOneLevel } from './helpers';

export type TUseOneLevelObject = {
  object: unknown | Record<string, unknown>;
};

export const useOneLevelObject = (props: TUseOneLevelObject) => {
  const [transformedObject, setTransformedObject] = createSignal<unknown>('');

  createEffect(() => {
    setTransformedObject(turnObjectToOneLevel(props.object));
  });

  return transformedObject;
};
