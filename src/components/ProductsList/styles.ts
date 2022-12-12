import styled from 'styled-components';

export const ProductsBox = styled.div`
    padding-bottom: 20px;
    width: 100%;

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    @media (max-width: 900px) {
        overflow: auto;

        ul {
            flex-wrap: nowrap;
            width: max-content;
        }
    }
`;

export const FilterTools = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 52px 32px 0;

    div {
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }

    div h3 {
        font-weight: 700;
        font-size: 1.625rem;
        line-height: 2.125rem;
        color: var(--color-grey-100);
    }

    div span {
        font-weight: 700;
        font-size: 1.625rem;
        line-height: 2.125rem;
        color: var(--color-grey-50);
    }

    @media (max-width: 682px) {
        height: 60px;

        button {
            display: none;
        }
    }

    @media (max-width: 425px) {
        height: 100px;
    }
`;