import styled from "styled-components";
import { animated } from 'react-spring';


const StyledSlidePopup = animated(styled.div`
    height:100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:300;
`);


const StyledPopContent = animated(styled.div`
    max-height: 100%;
    overflow:hidden;
    border-radius:5px 5px 0px 0px;
    position:absolute;
    bottom:0;
    left: 0;
    right:0;
    background: ${props=>props.theme.primaryBackgroundColor};


        .Drag{
            height: 22px;

            .DragButton{
                height:6px;
                width:40px;
                border-radius:10px;
                background: ${props=>props.theme.secondaryBackgroundColor1};;
            }
        }

    .Content{
        color:white;
    }
`);


export { StyledSlidePopup as default, StyledPopContent }