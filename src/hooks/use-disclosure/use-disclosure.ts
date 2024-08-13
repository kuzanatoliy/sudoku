import { createSignal } from 'solid-js';

export type TUseDisclosureProps = {
  isOpenInDefault?: boolean;
};

export const useDisclosure = (props: TUseDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = createSignal(props.isOpenInDefault || false);

  return {
    isOpen,
    onOpen: () => {
      setIsOpen(true);
    },
    onClose: () => {
      setIsOpen(false);
    },
    onToggle: () => {
      setIsOpen((prev) => !prev);
    },
  };
};
