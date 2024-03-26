import styled from "styled-components"

export const FlexDirectionColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
`