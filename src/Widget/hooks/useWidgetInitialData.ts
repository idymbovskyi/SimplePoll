import { RefObject, useEffect, useState } from 'react';

type UseWidgetInitialData = {
  question: string;
    options: string[];
    widgetId: string;
}

export const useWidgetInitialData = (widgetRef: RefObject<HTMLDivElement>): UseWidgetInitialData => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [widgetId, setWidgetId] = useState('');

  useEffect(() => {
    const element = widgetRef.current?.closest('.poll_widget[data-question]');
    setWidgetId(element?.getAttribute('id') || window.location.toString());
    setQuestion(element?.getAttribute('data-question') || '');
    setOptions(element?.getAttribute('data-options')?.split(';') || []);
  }, [widgetRef]);

  return {
    question,
    options,
    widgetId,
  };
};
