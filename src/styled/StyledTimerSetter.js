import styled from "styled-components";
import { animated } from 'react-spring';

const StyledTimerSetter = styled.div`
    position: relative;
`;

const TimerSetterElement = styled.div`
    position: absolute;
    top:0;
    left:0;
    height:40px;
    width: 40px;
    background:${props=>props.theme.secondaryBackgroundColor2};
    /* box-shadow: 0px 4px 7px rgba(0,0,0,.2); */
    border-radius:50%;
    
    p{
        height:100%;
        width:100%;
        flex-direction:column;
        color: ${props=>props.theme.secondaryTextColor};

        & span:first-child{
            font-size: 1.2rem;
            margin:0;
            padding:0;
        }

        & span:nth-child(2){
            margin:0;
        }
    }
`;


const StyledTimerSetterElement = animated(TimerSetterElement)
export { StyledTimerSetter as default, StyledTimerSetterElement}