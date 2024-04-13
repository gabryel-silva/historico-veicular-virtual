import styled from "styled-components"

export const DialogBox = styled.p`
  color: ${(props) => (props.color)};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.96px;

  display: flex;
  padding: ${(props) => (props.p)};
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  
  border-radius: 10px;
  background: ${(props) => (props.bg)};
`