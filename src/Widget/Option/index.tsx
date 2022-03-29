import React, { FC } from 'react';

import { Button } from './styled';

type Props = {
  title: string;
  onClick(title: string): void;
};

const Option: FC<Props> = ({ title, onClick }) => {
  const handleClick = () => onClick(title);

  return (
    <Button data-testid="option" type="button" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default Option;
