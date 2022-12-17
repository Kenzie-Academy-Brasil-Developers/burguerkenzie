import { IconButton as IButton, TextField as Input } from '@mui/material';
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

    #search-box {
        position: ${({ isExpanded }) => isExpanded ? 'absolute' : 'static'};
        pointer-events: ${({ isExpanded }) => isExpanded ? 'none' : 'auto'};
    }
`;

export const TextField = styled(Input) <IInputProps>`
    margin: 0;
    width: ${({ isExpanded }) => isExpanded ? '100%' : '0%'};
    pointer-events: ${({ isExpanded }) => isExpanded ? 'auto' : 'none'};
    opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
    transition: .8s cubic-bezier(.47, .4, .175, 1.2);
`;

export const IconButton = styled(IButton) <IInputProps>`

`;