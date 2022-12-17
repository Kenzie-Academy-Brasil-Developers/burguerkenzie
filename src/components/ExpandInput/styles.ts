import styled from 'styled-components';

interface IInputProps {
    isExpanded: boolean;
}

export const InputContainer = styled.div<IInputProps>`
    width: ${({ isExpanded }) => isExpanded ? '280px' : '35px'};
    transition: .8s cubic-bezier(.47, .4, .175, 1.2);

    & > div {
        width: ${({ isExpanded }) => isExpanded ? '100%' : '15%'};
        transition: .8s cubic-bezier(.47, .4, .175, 1.2);
    }

    input {
        padding-right: 48px;
    }
`;