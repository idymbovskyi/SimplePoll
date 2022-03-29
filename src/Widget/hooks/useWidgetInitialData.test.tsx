import { renderHook } from '@testing-library/react-hooks';

import { useWidgetInitialData } from './useWidgetInitialData';

describe('useWidgetInitialData', () => {
  it('should return correct initial values', () => {
    const widgetElement = {
      current: {
        closest: () => ({
          getAttribute: (attribute: string) => {
            if (attribute === 'id') {
              return 'widgetId';
            }
            if (attribute === 'data-question') {
              return 'question';
            }
            if (attribute === 'data-options') {
              return 'option1;option2';
            }
          },
        }),
      } as never,
    };

    const { result } = renderHook(() => useWidgetInitialData(widgetElement));

    expect(result.current.options).toStrictEqual(['option1', 'option2']);
    expect(result.current.question).toBe('question');
    expect(result.current.widgetId).toBe('widgetId');
  });
});
