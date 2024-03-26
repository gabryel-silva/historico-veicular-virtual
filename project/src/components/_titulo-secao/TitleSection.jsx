import styled from "styled-components";

export const TituloStyle = styled.h3`
    padding: 10px 20px;
    border-left: 5px solid var(--yellow-50);
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,0));
`

export const TitleSection = (props) => {
    return (
        <TituloStyle>{props.title}</TituloStyle>
    );
}