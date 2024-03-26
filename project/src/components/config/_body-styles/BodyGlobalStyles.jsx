import { createGlobalStyle } from "styled-components"
import '../_variables/root.css'

export const BodyGlobalStyles = createGlobalStyle`
    @import url(var(--font-family));

    body{
        width: 100vw;
        height: 100%;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
`