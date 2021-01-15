import styled from "styled-components";


const StyledHome  = styled.div`
    height:100vh;
    width:100%;
    background:${props=>props.theme.primaryBackgroundColor};
    display:flex;
    justify-content:center;
    overflow:hidden;
`;

const StyledX = styled.div`
    height: 150px;
    width: 255px;
    background:${props=>props.theme.secondaryBackgroundColor1};
    pointer-events:none;
    div{
        display:flex;
        height:100%;
        align-items:center;
        justify-content:center;
        font-size:30px; 
        pointer-events:none; 

        h3{
            color:${props=>props.theme.secondaryTextColor};
        }          
    }    
`;


export { StyledHome as default, StyledX};