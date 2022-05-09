import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins"
import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        transition: 0.2s;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
        background-color: aquamarine;
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
        background: transparent linear-gradient(90deg, #FFFFFF 0%, #E6E6E6 100%) 0% 0% no-repeat padding-box;;
    }
`
