import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;

    @media (max-width: 900px) {
        & {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;