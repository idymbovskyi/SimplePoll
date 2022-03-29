import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as hooks from './hooks';

import Widget from './index';

jest.mock('./hooks');

describe('Widget', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render proper Widget title', () => {
    jest.spyOn(hooks, 'useLocalStorage').mockImplementation(() => ([null, jest.fn()]));
    jest.spyOn(hooks, 'useWidgetInitialData').mockImplementation(() => ({
      question: '',
      options: ['option1'],
      widgetId: 'widgetId',
    }));

    const { getByTestId } = render(<Widget />);
    expect(getByTestId('widgetTitle')).toHaveTextContent('Simple vote widget');
  });

  it('should render proper Widget question', () => {
    jest.spyOn(hooks, 'useLocalStorage').mockImplementation(() => ([null, jest.fn()]));
    jest.spyOn(hooks, 'useWidgetInitialData').mockImplementation(() => ({
      question: 'test question',
      options: ['option1'],
      widgetId: 'widgetId',
    }));

    const { getByTestId } = render(<Widget />);
    expect(getByTestId('widgetQuestion')).toHaveTextContent('test question');
  });

  it('should pass correct data to setResultValue when no previous result', () => {
    const setResultValue = jest.fn();
    jest.spyOn(hooks, 'useLocalStorage').mockImplementation(() => ([null, setResultValue]));
    jest.spyOn(hooks, 'useWidgetInitialData').mockImplementation(() => ({
      question: 'test question',
      options: ['option1', 'option2'],
      widgetId: 'widgetId',
    }));

    const { getByText } = render(<Widget />);
    userEvent.click(getByText('option2'));

    expect(setResultValue).toBeCalledTimes(1);
    expect(setResultValue).toBeCalledWith({'option1': 0, 'option2': 1});
  });

  it('should pass correct data to setResultValue with previous result', () => {
    const setResultValue = jest.fn();
    jest.spyOn(hooks, 'useLocalStorage').mockImplementation(() => ([{
      'option1': 4,
      'option2': 2,
    }, setResultValue]));
    jest.spyOn(hooks, 'useWidgetInitialData').mockImplementation(() => ({
      question: 'test question',
      options: ['option1', 'option2'],
      widgetId: 'widgetId',
    }));

    const { getByText } = render(<Widget />);
    userEvent.click(getByText('option2'));

    expect(setResultValue).toBeCalledTimes(1);
    expect(setResultValue).toBeCalledWith({'option1': 4, 'option2': 3});
  });

  it('should display results after successful vote', () => {
    jest.spyOn(hooks, 'useLocalStorage').mockImplementation(() => ([null, jest.fn()]));
    jest.spyOn(hooks, 'useWidgetInitialData').mockImplementation(() => ({
      question: 'test question',
      options: ['option1', 'option2'],
      widgetId: 'widgetId',
    }));

    const { getByText, getByTestId } = render(<Widget />);
    userEvent.click(getByText('option2'));

    waitFor(() => {
      expect(getByTestId('results')).toBeInTheDocument();
    });
  });
});
