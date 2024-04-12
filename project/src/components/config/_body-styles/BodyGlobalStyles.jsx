import { createGlobalStyle } from "styled-components"
import '../_variables/root.css'

export const BodyGlobalStyles = createGlobalStyle`
    @import url(var(--font-family));

    body{
        width: 100vw;
        height: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        background: ${(props) => props.bg};
        color: ${(props) => props.colorText};
        overflow-x: hidden;

        h1, h2{
            font-size: ${(props) => props.titleSize};
            font-weight: 700;
        }

        h3, h4, h5{
            font-size: ${(props) => props.subtitleSize};
            font-weight: 600;            
        }
    }
`