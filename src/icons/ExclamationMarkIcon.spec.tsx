import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ExclamationMarkIcon } from './ExclamationMarkIcon';

describe('ExclamationMarkIcon', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    const { container } = render(() => <ExclamationMarkIcon />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
