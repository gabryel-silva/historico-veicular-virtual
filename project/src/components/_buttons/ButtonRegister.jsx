import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 100%;
    background-color: var(--blue-50-opacity-10);
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid var(--blue-50);
    padding: 1.5rem;
`

export const ButtonRegister = (props) =>{
    return <ButtonStyle>{props.cta}</ButtonStyle>
}