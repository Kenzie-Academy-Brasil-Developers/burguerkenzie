import styled from 'styled-components';

interface INavBarProps {
    isExpanded: boolean;
}

export const NavBarContainer = styled.nav<INavBarProps>`
    display: flex;
    align-items: center;
    gap: 15px;

    li:nth-child(1) {
        position: relative;
        width: auto;
    }

    @media (max-width: 580px) {
        .to-toggle {
            display: ${({ isExpanded }) => isExpanded ? 'none' : 'block'};
        }
    }
`;;