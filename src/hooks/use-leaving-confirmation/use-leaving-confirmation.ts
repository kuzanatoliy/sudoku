import { onMount, onCleanup } from 'solid-js';

export type TUseLeavingConfirmationProps = {
  comparator: () => boolean;
};

export const useLeavingConfirmation = (props: TUseLeavingConfirmationProps) => {
  const onBeforeUnload = (event: BeforeUnloadEvent) => {
    if (props.comparator()) {
      event.preventDefault();
      event.returnValue = true;
    }
  };

  onMount(() => {
    window.addEventListener('beforeunload', onBeforeUnload);
  });

  onCleanup(() => {
    window.removeEventListener('beforeunload', onBeforeUnload);
  });
};
