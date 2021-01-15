import styled from "styled-components";

const Button = styled.button`
    outline: none;
    background:none;
    border:none;
    border-radius: 5px;
    font-size:1.4rem;
    width:100%;
    font-family: Poppins, sans-serif;
    display:flex;
    justify-content:center;
    cursor: pointer;
    align-items:center;
    background: ${props=>props.theme.primaryMainColor};
`;


const TertiaryButton = styled.button`
    outline: none;
    background:transparent;
    border:none;
    border-radius: 5px;
    font-size:1.4rem;
    font-family: Poppins, sans-serif;
    display:flex;
    padding: 10px 0px;
    align-items:center;
`;

const PrimaryButton = styled.button`

`

const SimpleButton = styled.button`
    display:flex;
    justify-content:center;
    cursor: pointer;
    align-items:center;
    border:none;
    outline:none;
    background:none;
`;


const SecondaryButton = styled.button`
    outline: none;
    background:${props=>props.theme.primaryMainColor};
    border:none;
    border-radius: 50px;
    font-size:1.4rem;
    font-family: Poppins, sans-serif;
    height:45px;
    padding:10px 20px;
`

const BorderButton = styled(Button)`
    height:${props=>props.height || '45px'};
    width:${props=>props.width || '45px'};
    border-radius:50%;
    background-color: transparent;
    border: 1px solid ${props=>props.theme.optionBorder};
`;

const DirectionButton = styled(Button)`
    height:40px;
    width:40px;
    border-radius:50%;
    background-color: ${props=>props.theme.secondaryBackgroundColor1};
`;

const RoundButton = styled(DirectionButton)`
    height:55px;
    width:55px;
    position:relative;
    overflow:hidden;
`;



const IconButton = styled(Button)`
    height: ${props=>props.size ? props.size + 'px' : '37px'};
    width: ${props=>props.size ? props.size + 'px' : '37px'};
    border-radius:50%;
    background-color: transparent;

    svg{
        color: ${props=>props.theme.primaryMainColor};
    }
    :hover{
        background: ${props=>props.theme.hoverColor1};
    }
`;


const StyledMarkButton = styled.button`
    outline: none;
    background:none;
    border:none;
    cursor: pointer;

    svg{
        color: ${props=>props.isActive ? props.theme.primaryMainColor : props.theme.secondaryTextColor}
    }
`;

export { TertiaryButton, PrimaryButton, SecondaryButton, RoundButton,DirectionButton, BorderButton, IconButton,StyledMarkButton, SimpleButton}