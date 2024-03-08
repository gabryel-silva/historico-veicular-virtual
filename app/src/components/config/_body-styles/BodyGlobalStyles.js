import { createGlobalStyle } from "styled-components"

export const BodyGlobalStyles = createGlobalStyle`
    @import url(var(--font-family));

    body{
        width: 100vw;
        height: 100%;
        font-family: "Inter", sans-serif;
    }
`