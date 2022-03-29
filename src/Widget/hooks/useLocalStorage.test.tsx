import { renderHook, act, RenderResult } from '@testing-library/react-hooks';
import { Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should read value from localStorage by key', () => {
    global.Storage.prototype.getItem = jest.fn(() => '{"option1": "3"}');

    let result: RenderResult<[null, Dispatch<SetStateAction<null>>]>;

    act(() => {
      const data = renderHook(() => useLocalStorage('key', null));
      result = data.result;
    });

    expect(result!.current[0]).toStrictEqual({'option1': '3'});
  });

  it('should return initial value on error while reading from localStorage', () => {
    global.Storage.prototype.getItem = jest.fn(() => {
      throw new Error('test');
    });

    const testData = {'option5': '1'};

    let result: RenderResult<[{
      option5: string;
  } | null, Dispatch<SetStateAction<{
      option5: string;
  }>>]>;

    act(() => {
      const data = renderHook(() => useLocalStorage('key', testData));
      result = data.result;
    });

    expect(result!.current[0]).toStrictEqual({'option5': '1'});
  });

  it('should set correct value to localStorage', () => {
    const setItem = jest.fn();
    global.Storage.prototype.setItem = setItem;

    const testData = {'option5': '1'};

    const { result } = renderHook(() => useLocalStorage('key', testData));

    // eslint-disable-next-line no-unused-vars
    const [_, seValue] = result.current;

    act(() => {
      seValue({
        option5: '5',
      });
    });

    expect(setItem).toBeCalledWith('key', '{"option5":"5"}');
  });
});
