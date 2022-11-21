import styled from 'styled-components';

export const NavBar = styled.nav`
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
`;