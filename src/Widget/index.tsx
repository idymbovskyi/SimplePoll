import React, { useRef, useState } from 'react';
import { useLocalStorage, useWidgetInitialData } from './hooks';

import Option from './Option';
import Results from './Results';

import { Wrap, Options, WidgetTitle, Question, Body } from './styled';
import { Options as OptionsType } from './types';

const Widget = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const currentWidget = useRef<HTMLDivElement>(null);

  const { options, question, widgetId } = useWidgetInitialData(currentWidget);

  const [results, setResultValue] = useLocalStorage<OptionsType>(widgetId, null);

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

  return (
    <Wrap ref={currentWidget}>
      <WidgetTitle data-testid="widgetTitle">Simple vote widget</WidgetTitle>
      <Question data-testid="widgetQuestion">{question}</Question>
      <Body>
        {showResults ? <Results selectedOption={selectedOption} widgetId={widgetId} /> : <Options>
          {options.map((option, i) => <Option key={i} title={option} onClick={handleClick} />)}
        </Options>}
      </Body>
    </Wrap>
  );
};

export default Widget;
