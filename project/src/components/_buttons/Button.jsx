import styled from "styled-components";

export const Btn = styled.button`
    padding: .5rem;
    background-color: #0077C0;
    color: white;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    width: 100%;
`

export const Button = (props) => {
    return (
        <Btn>{props.cta}</Btn>
    )
}