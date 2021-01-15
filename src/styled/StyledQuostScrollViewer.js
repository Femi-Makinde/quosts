import styled from "styled-components";
import { animated } from "react-spring";

const QuostScrollViewer = styled.div`
    height:100%;
    width: 100%;
    display:flex;
`;


const QuostScrollViewComponent = styled.div`
    width:100%;
    min-width:100%;
    height:100%;
    /* padding:0 16px; */
    flex-shrink:0;
`;

const StyledQuostScrollViewComponent = animated(QuostScrollViewComponent)
const StyledQuostScrollViewer = animated(QuostScrollViewer)

export { StyledQuostScrollViewer as default,StyledQuostScrollViewComponent}