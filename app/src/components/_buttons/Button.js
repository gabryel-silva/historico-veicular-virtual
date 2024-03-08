import styled from "styled-components";
import { Margin } from "../config/_margin-container/Margin.js";


export const Btn = styled.button`
    padding: .5rem;
    background-color: #0077C0;
    color: white;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    width: 100%;
`

function Button(){
    return(
        <Margin>
            <Btn>Botão</Btn>
        </Margin>
    );
}

export default Button;