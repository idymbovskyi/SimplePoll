import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Option from './index';

describe('Option', () => {
  it('should render component with correct title', () => {
    const { getByTestId } = render(<Option title='test' onClick={jest.fn()} />);

    expect(getByTestId('option')).toHaveTextContent('test');
  });

  it('should pass correct title on click', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Option title='test' onClick={handleClick} />);

    userEvent.click(getByTestId('option'));

    expect(handleClick).toBeCalledWith('test');
  });
});
