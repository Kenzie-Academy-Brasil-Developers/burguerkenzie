import styled from 'styled-components';

export const HeaderContainer = styled.div`
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
        div {
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 14px;
        }
    }
`;