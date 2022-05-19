import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FBFBFF;
        --slate: #93959E;
        --dark-gray: #383A43;
        --black: #13151E;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    @media only screen and (max-width: 48em) {
        html {
            font-size: 50%;
        }
    }

    @media only screen and (max-width: 30em) {
        html {
            font-size: 46.87%
        }
    }

    body {
        background-color: var(--black);
        box-sizing: border-box;
        line-height: 1.7;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
`;

export default GlobalStyle;