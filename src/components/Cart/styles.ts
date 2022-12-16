import styled from 'styled-components';


interface ICartContentProps {
    heightSize: string;
}

export const CartBox = styled.section`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.5);
    inset: 0;
    display: flex;
    justify-content: center;

    & > div {
        width: 100%;
        max-width: 430px;
        height: max-content;
        margin: 80px 15px 0;
    }
`;

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
    border-radius: .3125rem .3125rem 0 0;
    padding: 0 10px 0 20px;
    height: 52px;
    width: 100%;

    & > h3 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-white);
    }
`;

export const CartContent = styled.div<ICartContentProps>`
    height: ${({ heightSize }) => heightSize};
    background-color: var(--color-grey-0);
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span + h4 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-grey-100);
    }

    h4 + span {
        font-weight: 400;
        font-size: .875rem;
        line-height: 1.5rem;
        color: var(--color-grey-50);
    }

    ul {
        width: 100%;
        height: 94%;
        padding: .2rem .625rem;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: auto;
    }
`;