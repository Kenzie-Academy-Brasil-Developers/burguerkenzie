import styled, { css } from 'styled-components';

interface IStyledButton {
    variant: 'defaultGreen' | 'mediumGreen' | 'defaultGrey' | 'mediumGrey';
}

const ButtonVariant = {
    defaultGreen: css`
         background-color: var(--color-primary);
        color: var(--color-white);
        height: 3.75rem;

        &:hover {
            background-color: var(--color-primary-50);
        }
    `,
    mediumGreen: css`
        background-color: var(--color-primary);
        color: var(--color-white);
        height: 2.5rem;

        &:hover {
            background-color: var(--color-primary-50);
        }
    `,
    defaultGrey: css`
        background-color: var(--color-grey-20);
        color: var(--color-grey-50);
        height: 3.75rem;

        &:hover {
            background-color: var(--color-grey-50);
            color: var(--color-grey-20);
        }
    `,
    mediumGrey: css`
        background-color: var(--color-grey-20);
        color: var(--color-grey-50);
        height: 2.5rem;

        &:hover {
            background-color: var(--color-grey-50);
            color: var(--color-grey-20);
        }
    `,
};

export const Button = styled.button<IStyledButton>`
    font-family: var(--font-family-1);
    font-weight: 600;
    font-size: 1rem;
    padding: 0 1.25rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    transition: all .3s;

    ${({ variant }) => ButtonVariant[variant]}
`;