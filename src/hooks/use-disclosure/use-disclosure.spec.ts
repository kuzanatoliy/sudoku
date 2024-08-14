import { renderHook as render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { useDisclosure, TUseDisclosureProps } from './use-disclosure';

describe('useDisclosure', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const DEFAULT_PROPS: TUseDisclosureProps = {};

  const renderHook = (props?: Partial<TUseDisclosureProps>) =>
    render(() => useDisclosure({ ...DEFAULT_PROPS, ...props }));

  it.each`
    isOpenInDefault | isOpen
    ${undefined}    | ${false}
    ${false}        | ${false}
    ${true}         | ${true}
  `(
    'Should check isOpen property in default',
    ({
      isOpenInDefault,
      isOpen,
    }: Record<'isOpenInDefault' | 'isOpen', boolean>) => {
      const { result } = renderHook({ isOpenInDefault });
      expect(result.isOpen()).toBe(isOpen);
    }
  );

  it('Should set up isOpen to true when call onOpen', () => {
    const { result } = renderHook({ isOpenInDefault: false });
    expect(result.isOpen()).toBeFalsy();
    result.onOpen();
    expect(result.isOpen()).toBeTruthy();
  });

  it('Should set up isOpen to false when call onClose', () => {
    const { result } = renderHook({ isOpenInDefault: true });
    expect(result.isOpen()).toBeTruthy();
    result.onClose();
    expect(result.isOpen()).toBeFalsy();
  });

  it('Should change isOpen when call onToggle', () => {
    const { result } = renderHook();
    const initValue = result.isOpen();
    result.onToggle();
    expect(result.isOpen()).toBe(!initValue);
  });
});
