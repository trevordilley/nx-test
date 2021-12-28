import { render } from '@testing-library/react';

import WebShared from './web-shared';

describe('WebShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebShared />);
    expect(baseElement).toBeTruthy();
  });
});
