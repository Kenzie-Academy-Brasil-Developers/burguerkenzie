import SearchIcon from '@mui/icons-material/Search';
import { createTheme, IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { InputContainer } from './styles';

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
            <div style={{ display: 'flex', alignItems: 'center', width: isExpanded ? '100%' : '15%', transition: 'all .8s cubic-bezier(.47, .4, .175, 1.2)' }}>
                <TextField
                    id="outlined-full-width"
                    style={{
                        margin: 0,
                        width: isExpanded ? '100%' : '0%',
                        pointerEvents: isExpanded ? 'auto' : 'none',
                        opacity: isExpanded ? '1' : '0',
                        transition: 'all .8s cubic-bezier(.47, .4, .175, 1.2)'
                    }}
                    placeholder="Buscar"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <InputAdornment position="start" >
                    <IconButton id='search-box' style={{ position: isExpanded ? 'absolute' : 'static', pointerEvents: isExpanded ? 'none' : 'auto' }} onClick={() => setIsExpanded(!isExpanded)}>
                        <SearchIcon id='search-icon' style={{ position: isExpanded ? 'absolute' : 'static', right: '35px', color: '#BDBDBD' }}  />
                    </IconButton>
                </InputAdornment>
            </div>
        </InputContainer>
    );
};
