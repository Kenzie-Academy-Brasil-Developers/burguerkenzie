import styled from 'styled-components';

export const FormContainer = styled.section`
    width: 500px;
    border: 2px solid var(--color-grey-0);
    border-radius: 5px;
    padding: 2.0625rem 1.5rem 1.75rem;

    & > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 27px;

        & > h4 {
            color: var(--color-grey-100);
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
    }

    & > form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;