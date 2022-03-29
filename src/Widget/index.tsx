import React, { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from './hooks';

import Option from './Option';
import Results from './Results';

import { Wrap, Options, WidgetTitle, Question, Body } from './styled';
import { Options as OptionsType } from './types';

const App = () => {
  const [question, setQuestion] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [widgetId, setWidgetId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const currentWidget = useRef<HTMLDivElement>(null);

  const [results, setResultValue] = useLocalStorage<OptionsType>(widgetId, null);

  useEffect(() => {
    const element = currentWidget.current?.closest('.poll_widget[data-question]');
    setWidgetId(element?.getAttribute('id') || window.location.toString());
    setQuestion(element?.getAttribute('data-question') || '');
    setOptions(element?.getAttribute('data-options')?.split(';') || []);
  }, []);

  const handleClick = (option: string) => {
    if (results) {
      setResultValue({
        ...options.reduce((acc: OptionsType, current) => {
          const currentValue = results[current] ? results[current] : 0;
          acc[current] = current === option ? currentValue + 1 : currentValue;

          return acc;
        }, {}),
      });
    } else {
      setResultValue({
        ...options.reduce((acc: OptionsType, current) => {
          acc[current] = current === option ? 1 : 0;

          return acc;
        }, {}),
      });
    }
    setSelectedOption(option);
    setShowResults(true);
  };

  return <Wrap ref={currentWidget}>
    <WidgetTitle>Simple vote widget</WidgetTitle>
    <Question>{question}</Question>
    <Body>
      {showResults ? <Results selectedOption={selectedOption} widgetId={widgetId} /> : <Options>
        {options.map((option, i) => <Option key={i} title={option} onClick={handleClick} />)}
      </Options>}
    </Body>
  </Wrap>;
};

export default App;
