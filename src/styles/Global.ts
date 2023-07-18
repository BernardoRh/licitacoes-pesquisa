/* eslint-disable dot-notation */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        outline: 0;
    }

    a, p, h1, h2, h3, h4, h5, h6, input, span, select {
        color: ${(props) => props.theme['base-text']}
    }

    html {
        background: ${(props) => props.theme['background']};
        overflow-x: hidden;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

`
