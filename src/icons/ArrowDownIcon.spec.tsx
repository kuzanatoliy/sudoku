import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ArrowDownIcon } from './ArrowDownIcon';

describe('ArrowDownIcon', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    const { container } = render(() => <ArrowDownIcon />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
