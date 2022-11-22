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