import { renderHook as render, fireEvent } from '@solidjs/testing-library';
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vitest,
} from 'vitest';

import {
  useLeavingConfirmation,
  TUseLeavingConfirmationProps,
} from './use-leaving-confirmation';

describe('useLeavingConfirmation', () => {
  const originalPreventDefault = Event.prototype.preventDefault;

  beforeAll(() => {
    Event.prototype.preventDefault = vitest.fn();
  });

  afterAll(() => {
    Event.prototype.preventDefault = originalPreventDefault;
  });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const comparator = vitest.fn();

  const DEFAULT_PROPS: TUseLeavingConfirmationProps = { comparator };

  const renderHook = (props?: Partial<TUseLeavingConfirmationProps>) =>
    render(() => useLeavingConfirmation({ ...DEFAULT_PROPS, ...props }));

  it('Should not call confirmation', () => {
    comparator.mockImplementation(() => false);
    renderHook();
    fireEvent(window, new Event('beforeunload'));
    expect(comparator).toBeCalled();
    expect(Event.prototype.preventDefault).not.toBeCalled();
  });

  it('Should call confirmation', () => {
    comparator.mockImplementation(() => true);
    renderHook();
    fireEvent(window, new Event('beforeunload'));
    expect(comparator).toBeCalled();
    expect(Event.prototype.preventDefault).toBeCalled();
  });
});
