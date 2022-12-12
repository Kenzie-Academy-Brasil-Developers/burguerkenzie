import styled from 'styled-components';

export const FooterStyled = styled.div`
    border-top: 2px solid var(--color-grey-20);
    background: var(--color-grey-0);
    width: 100%;
    padding: 10px;
    border-radius: 0 0 .3125rem .3125rem;
    display: flex;
    flex-direction: column;
    gap: 22px;

    .total-value {
        display: flex;
        justify-content: space-between;
    }

    .total-value h4 {
        color: var(--color-grey-100);
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem;
    }

    .total-value span {
        color: var(--color-grey-50);
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem;
    }
`;