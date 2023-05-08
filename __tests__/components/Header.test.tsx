import React from 'react';
import { render } from '@testing-library/react';

import { Header } from '../../src/components';

describe('Test on <Header/> component', () => {
  test('should be match with snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
