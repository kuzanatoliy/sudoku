import { render /*, screen*/ } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ISkeletonProps } from './Skeleton.types';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  const renderComponent = (props: Partial<ISkeletonProps> = {}) => {
    return render(() => <Skeleton {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    const { container } = renderComponent({ height: 100, width: 100 });
    expect(container).not.toBeEmptyDOMElement();
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    const { container } = renderComponent({ class: customClass });
    expect(container).not.toBeEmptyDOMElement();
  });
});
