import React from 'react';
import { StyledRadioSelect, StyledCheckboxSelect } from '../styled/StyledSelect';
import Icon from './Icon';
import { n } from '../utils/appUtils';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Check } from '../svg';



const RadioSelect = ({selected,selectedColor})=>{
    const theme = useContext(ThemeContext);
    selectedColor = selectedColor || theme.primaryMainColor;
    return (
        <StyledRadioSelect selectedColor = {selectedColor} selected = {selected} className = "selector Flex">
            {
                selected &&
                <Check width = "20" height = "20" stroke = "white"/>
            }
        </StyledRadioSelect>
    );
}

const CheckSelect = ({selected,onSelected = n, selectedColor})=>{
    const theme = useContext(ThemeContext);
    selectedColor = selectedColor || theme.primaryMainColor;

    const handleSelection = ()=>{
        onSelected();
    }

    return (
        <StyledCheckboxSelect selectedColor = {selectedColor} onClick = {handleSelection} selected = {selected} className = "selector Flex">
            {
                selected &&
                <Check width = "20" height = "20" stroke = "white"/>
            }
        </StyledCheckboxSelect>
    );
}

export { RadioSelect, CheckSelect };