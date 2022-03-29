import React, { FC, useMemo } from 'react';
import { useLocalStorage } from '../hooks';

import { Options } from '../types';
import ResultItem from './ResultItem';

type Props = {
  selectedOption: string;
  widgetId: string;
}

const Results: FC<Props> = ({ selectedOption, widgetId }) => {
  const [results] = useLocalStorage<Options>(widgetId, null);

  const total = useMemo(() => results ? Object.values(results).reduce((acc, current) => acc + current, 0 ) : 0, [results]);


  if (!results) {
    return null;
  }

  return (
    <div>
      {Object.keys(results).map((title, index) => (
        <ResultItem isSelected={selectedOption === title} title={title} key={index} count={results[title]} percentage={Math.round(results[title] / total * 100)} />
      ))}
    </div>
  );
};

export default Results;
