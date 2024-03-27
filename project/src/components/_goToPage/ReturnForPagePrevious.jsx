import styled from "styled-components"
import arrowLeft from "../../assets/img/arrow-left-2.svg";
import { FlexDirectionRow } from "../_flex/_flex-row/FlexDirectionRow";

export const ReturnForPagePrevious = (props) => {

  const MessageStyle = styled.h4`
    color: ${(props) => props.color};
  `

  return (
    <FlexDirectionRow gap=".5rem">
      <img src={arrowLeft} alt="icone de retorno"/>
      <MessageStyle color={props.colorText}>{props.title}</MessageStyle>
    </FlexDirectionRow>
  );
}