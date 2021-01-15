import styled from "styled-components";

const StyledRadioSelect = styled.div`
    height: 18px;
    width: 18px;
    border-radius:50%;
    border: ${props => `1px solid ${props.selected ? 'transparent' : props.theme.optionBorder}`};
    background: ${props => props.selected ? props.selectedColor : 'none'};
    cursor: pointer;
    i{
        font-size:13px;
        color: white;
    }
`;



const StyledCheckboxSelect = styled(StyledRadioSelect)`
    border-radius: 5px;
`;

export { StyledRadioSelect, StyledCheckboxSelect}