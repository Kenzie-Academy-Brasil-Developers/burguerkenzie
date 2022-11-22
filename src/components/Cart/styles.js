import styled from 'styled-components';

export const CartBox = styled.aside`
    width: 100%;
    max-width: 325px;
    height: max-content;
`;

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--color-primary);
    border-radius: .3125rem .3125rem 0 0;
    padding-left: 20px;
    height: 65px;
    width: 100%;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--color-white);
`;

export const CartContent = styled.div`
    height: ${(props) => props.heightSize};
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