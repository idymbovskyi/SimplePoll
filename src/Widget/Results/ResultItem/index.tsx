import React, { FC } from 'react';
import { Count, Percentage, Title, Wrap } from './styled';

type Props = {
  title: string;
  count: number;
  percentage: number;
  isSelected: boolean;
}

const ResultItem: FC<Props> = ({ title, count, percentage, isSelected }) => {
  return (
    <Wrap>
      <Title isSelected={isSelected}>{title}</Title>
      <Count count={count} percentage={percentage}>{count}
        <Percentage>{percentage}%</Percentage>
      </Count>
    </Wrap>
  );
};

export default ResultItem;
