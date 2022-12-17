import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment } from '@mui/material';
import { ChangeEvent, useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { InputContainer, TextField } from './styles';

export const ExpandInput = () => {
    const { isExpanded, setIsExpanded, setInputValue, isError, inputValue } = useContext(CartContext);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.id !== 'outlined-full-width'
                && target.id !== 'search-icon'
                && target.id !== 'search-box'
                && target.tagName !== 'path') {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <InputContainer isExpanded={isExpanded}
            onChange={(e: ChangeEvent<HTMLFormElement>) => setInputValue(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <TextField
                    id='outlined-full-width'
                    isExpanded={isExpanded}
                    placeholder='Buscar'
                    fullWidth
                    variant='outlined'
                    error={isError}
                    value={inputValue}
                />
                <InputAdornment position='start' >
                    <IconButton id='search-box' onClick={() => setIsExpanded(!isExpanded)}>
                        <SearchIcon id='search-icon' />
                    </IconButton>
                </InputAdornment>
            </div>
        </InputContainer>
    );
};
