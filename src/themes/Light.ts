import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#27AE60',
            dark: '#219653',
            light: '#93D7AF',
            contrastText: '#F5F5F5',
        },
        secondary: {
            main: '#E0E0E0', 
            dark: '#828282',
            light: '#F5F5F5',
            contrastText: '#828282',
        }
    }
});