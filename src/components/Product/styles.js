import styled from 'styled-components';

export const ProductContent = styled.li`
    width: 255px;
    height: 346px;
    border-radius: .3125rem;
    border: 2px solid var(--color-grey-20);

    .img-box {
        height: 150px;
        display: flex;
        justify-content: center;
        background-color: var(--color-grey-0);
    }
`;

export const ProductInfo = styled.div`
    height: 56%;
    padding: 1.25rem 1.4375rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-grey-100);
    }

    h3 + span {
        font-weight: 400;
        font-size: .75rem;
        line-height: 1rem;
        color: var(--color-grey-50);
    }

    span + span {
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem;
        color: var(--color-primary);
    }
`;