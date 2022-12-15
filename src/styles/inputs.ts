import styled from 'styled-components';

export const DefaultInput = styled.input`
    padding: 0 8.125rem 0 1.25rem;
    border-radius: .5rem;
    height: 60px;
    width: 382px;
    background-color: var(--color-white);
    border: 2px solid var(--color-grey-20);
    caret-color: var(--color-primary);
    font-family: var(--font-family-1);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--color-grey-20);
    }

    &:focus {
        outline: none;
        border: 2px solid var(--color-primary);
    }

    &:focus::placeholder {
        color: var(--color-grey-50);
    }
`;