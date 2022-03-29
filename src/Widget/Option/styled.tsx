import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    text-align: left;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    margin-bottom: 20px;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #f9a524;

    &:hover {
        text-decoration: none;
        background-color: #1c5a980f;
    }
`;
