import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li,
    a {
        list-style: none;
        text-decoration: none;
    }

    :root {

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --color-grey-100: #333333;
        --color-grey-50: #828282;
        --color-grey-20: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --color-white: #fff;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;

        --font-family-1: 'Inter', sans-serif;
    }

    body {
        font-family: var(--font-family-1);
    }

    .container {
        width: 100%;
        max-width: 1200px;
        padding: 0 0.6rem;
        margin: auto;
    }
`;