import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey-0);
    margin-bottom: 26px;
    height: max-content;
    padding: 10px 0;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    @media (max-width: 700px) {
        input,
        input + button {
            display: none;
        }
    }
`;