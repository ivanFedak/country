import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1rem;
    background-color: var(--ui-base);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--main-color);
    line-height: 2.5;
`;