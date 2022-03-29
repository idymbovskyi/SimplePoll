import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 20px 0;
`;

export const Title = styled.p<{ isSelected: boolean }>`
  color: ${({ isSelected }) => isSelected ? '#f9a524' : 'inherit'};
  margin: 0;
  padding-bottom: 8px;
`;

export const Count = styled.span<{ percentage: number, count: number }>`
    background-color: #ddd;
    transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
    width: 100%;
    display: inline-block;
    padding-left: 8px;
    box-sizing: border-box;
    position: relative;
    height: 24px;
  &:after {
    box-sizing: border-box;
    content: '${({ count }) => count}';
    display: inline-block;
    background-color: #f9a524;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding-left: 8px;
    width: ${({ percentage }) => percentage}%;
  }
`;

export const Percentage = styled.span`
  position: absolute;
  right: 0;
  z-index: 1;
`;

