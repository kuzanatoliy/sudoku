import { createSignal } from 'solid-js';

export type TUseDisclosureProps = {
  isOpenInDefault?: boolean;
};

export const useDisclosure = (props: TUseDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = createSignal(props.isOpenInDefault || false);

  return {
    isOpen,
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
    toggle: () => {
      setIsOpen((prev) => !prev);
    },
  };
};
