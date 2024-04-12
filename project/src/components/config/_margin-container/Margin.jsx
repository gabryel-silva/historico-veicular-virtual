import styled from "styled-components";

export const Margin = styled.div`
    padding: 40px;
    display: ${(props) => (props.display)};
    flex-direction: ${(props) => (props.flexD)};
    gap: ${(props) => (props.gap)};
    
    @media only screen and (min-width: 744px){
        padding: 3rem 6rem;
    }
`