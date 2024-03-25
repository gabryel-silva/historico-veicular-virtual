import styled from "styled-components";
import { Label } from "./Label.js";
import { Input } from "./Input.js";


const listLabel = ['E-mail', 'Senha'] 

export const FieldsetStyle = styled.fieldset`
    display: flex;
    flex-direction: column;
    background-color: var(--blue-50-opacity-10);
    border-radius: 20px;
    border: 1px solid var(--blue-50);
`

export const Fieldset = () => {
    return (
        <FieldsetStyle>
            <Label>Text</Label>
            <Input/>
        </FieldsetStyle>
    );
}