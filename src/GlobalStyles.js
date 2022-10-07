import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
        
    *, *::before, *::after {
        box-sizing: inherit;
    }
        
    ul, li, h1, h2, h3, p, button {
        margin: 2rem;
    }

    ul {
        list-style: none;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: whitesmoke;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;
    }

`