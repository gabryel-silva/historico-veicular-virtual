import styled from "styled-components";

export const FlexDirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.jc};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  align-items: ${(props) => props.align};
`