import verification from "../../assets/img/verification.svg";
import styled from "styled-components";
import { FlexDirectionColumn } from "../_flex/_flex-col/FlexDirectionColumn";
import { BodyGlobalStyles } from "../config/_body-styles/BodyGlobalStyles";

export const IconVerificationStyle = styled.img`
  width: ${(props) => props.width};
`

export const Message = (props) => {
  
  const MessageStyle = styled.h2`
    color: ${(props) => props.color}; 
  `

  return (
    <>
      <BodyGlobalStyles 
        colorText="var(--white-95)" 
        titleSize="16px"
      />
      <FlexDirectionColumn gap=".7rem" align="center">
        <IconVerificationStyle src={verification} width="20%" alt="Icone de verificação" />
        <MessageStyle colorText={props.colorText}>Cadastro efetuado com sucesso!</MessageStyle>
      </FlexDirectionColumn>
    </>
  )
}