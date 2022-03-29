import styled from 'styled-components';

export const Wrap = styled.div`
  text-align: center;
  color: #303133;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #fff;
  max-width: 400px;
  margin: auto;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  `
;

export const Options = styled.div`
    display: flex;
    flex-flow: column;
`;

export const WidgetTitle = styled.h2`
    margin: 0;
    padding: 16px;
    border-bottom: 1px solid #ddd;
`;

export const Question = styled.h3`
    padding-left: 20px;
    text-align: left;
`;

export const Body = styled.div`
    padding: 0 20px;
    text-align: left;
`;
