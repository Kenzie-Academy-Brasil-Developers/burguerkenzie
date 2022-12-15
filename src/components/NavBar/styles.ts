import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    li {
        position: relative;
        width: max-content;
        display: flex;
        align-items: center;
    }

    button {
        position: absolute;
        right: 10px;
    }

    @media (max-width: 700px) {
        justify-content: center;

        input {
            width: 100%;
        }
    }
`;