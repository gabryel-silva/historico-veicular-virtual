import styled from "styled-components";

export const TituloStyle = styled.h3`
    padding: 10px 40px 10px 20px;
    border-left: 5px solid var(--yellow-50);
    width: max-content;
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,0));
    font-size: 20px;
    color: ${(props) => (props.color)};
    text-align: ${(props) => (props.align)}
`

export const TitleSection = (props) => {
    return (
        <TituloStyle color={props.color} align={props.align}>{props.title}</TituloStyle>
    );
}