import styled from 'styled-components';
import smallBranding from '../../assets/small-branding.svg'

export const UserContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    max-width: 1023px;
    padding: 0 .9375rem;
    margin: auto;

    @media (max-width: 770px) {
        flex-direction: column;

        section > img {
            display: none;
        }

        section:nth-child(1) {
            background-image: url(${smallBranding});
            background-size: cover;
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: center;
            width: 100%;
            max-width: 400px;
            height: 100%;
        }
    }
`;