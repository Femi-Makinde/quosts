import styled from "styled-components";

const FONT_SIZE = 1.6;
const StyledTextEditor = styled.div`
    height: 190px;
    position: relative;
`;

const Editor = styled.textarea`
    width:100%;
    height:100%;
    font-size: ${FONT_SIZE}rem;
    background: inherit;
    font-family: Poppins, sans-serif;
    border:none;
    resize: none;
    font-weight: 600;
    line-height:32px;
    overflow:hidden;
    word-spacing: 3px;
    color: ${props=>props.theme.primaryTextColor};
`;

const PlaceHolder = styled.span`
    width:100%;
    position:absolute;
    top: 0px;
    left: 0px;
    pointer-events:none;
    color: ${props=>props.theme.primaryTextColor};

    h1{
        font-size: ${FONT_SIZE}rem;
        font-weight: 600;
    }
`;
export {StyledTextEditor as default, Editor,PlaceHolder};