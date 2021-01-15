import styled from "styled-components";

const StyledContainer  = styled.div`
    height:100%;
    width:100%;
    max-width: 2560px;
    margin: 0 auto;
    color: ${props=>props.theme.primaryTextColor};
`;


export { StyledContainer as default};