import styled from 'styled-components';

export const FormLoginContainer = styled.section`
    display: flex;
    flex-direction: column;
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

    & > p {
        align-self: center;
        color: var(--color-grey-50);
        width: 100%;
        max-width: 327px;
        font-weight: 400;
        font-size: .875rem;
        line-height: 1.125rem;
        text-align: center;
        margin: 19px 0 21px;
    }
`;