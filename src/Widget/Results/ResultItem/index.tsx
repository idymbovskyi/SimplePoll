import React, { FC } from 'react';
import { CountWrap, Percentage, Title, Wrap, Count } from './styled';

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
      <CountWrap percentage={percentage}>
        <Count>{count}</Count>
        <Percentage>{percentage}%</Percentage>
      </CountWrap>
    </Wrap>
  );
};

export default ResultItem;
