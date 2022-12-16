import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 15px;

    li:nth-child(1) {
        position: relative;
        width: max-content;
        display: flex;
        align-items: center;
    }

    button:nth-child(2) {
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