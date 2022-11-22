import styled from 'styled-components';

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    li {
        position: relative;
        width: max-content;
        display: flex;
        align-items: center;
    }

    .mediumGreen {
        position: absolute;
        right: 10px;
        pointer-events: none;
    }

    @media (max-width: 700px) {
        justify-content: center;

        input {
            width: 100%;
        }
    }
`;