import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    } 

    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: radial-gradient(#303b37, #1a1f1d);
        color: #e1eeeb;
        min-height: 100vh;
    }
`
