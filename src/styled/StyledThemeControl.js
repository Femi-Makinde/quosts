import styled from "styled-components";

const StyledThemeControl  = styled.div`
    height:100%;
    width:100%;
    color:${props=>props.theme.primaryMainColor};
`;


export {StyledThemeControl as default};