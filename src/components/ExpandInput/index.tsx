import SearchIcon from '@mui/icons-material/Search';
import { createTheme, IconButton, InputAdornment } from '@mui/material';
import { useEffect, useState } from 'react';
import { Input, InputContainer } from './styles';

const CartTheme = createTheme({
    palette: {
        primary: {
            main: '#BDBDBD',
        }
    },
});

export const ExpandInput = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.id !== 'outlined-full-width' && target.id !== 'search-icon' && target.id !== 'search-box') {
                setIsExpanded(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <InputContainer isExpanded={isExpanded}>
            <div>
                <Input
                    id="outlined-full-width"
                    isExpanded={isExpanded}
                    placeholder="Buscar"
                    fullWidth
                    variant="outlined"
                />
                <InputAdornment position="start" >
                    <IconButton id='search-box' style={{ position: isExpanded ? 'absolute' : 'static', pointerEvents: isExpanded ? 'none' : 'auto' }} onClick={() => setIsExpanded(!isExpanded)}>
                        <SearchIcon id='search-icon' style={{ position: isExpanded ? 'absolute' : 'static', right: '35px', color: '#BDBDBD' }} />
                    </IconButton>
                </InputAdornment>
            </div>
        </InputContainer>
    );
};
