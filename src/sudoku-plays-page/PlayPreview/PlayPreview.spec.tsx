import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { ParentProps } from 'solid-js';

import { IPlayPreviewProps, PlayPreview } from './PlayPreview';

describe('PlayPreview', () => {
  const PLAY: IPlayPreviewProps['play'] = [
    0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 9, 3, 0, 0, 4, 0, 9, 0, 0,
    7, 5, 0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 7, 0, 0, 7, 3, 6,
    4, 8, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 7, 0, 0, 0, 8,
  ];

  const renderComponent = (
    props: Partial<ParentProps<IPlayPreviewProps>> = {}
  ) => render(() => <PlayPreview play={PLAY} {...props} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    const { container } = renderComponent();
    expect(container).not.toBeEmptyDOMElement();
  });
});
