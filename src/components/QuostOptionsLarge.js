import React, { useContext } from 'react';
import StyledQuostOptionsLarge from '../styled/StyledQuostOptionsLarge';
import QuostOption from './QuostOption';
import { BorderButton } from '../styled/StyledButtons';
import Icon from './Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addOption, setOptionsType } from '../actions/quostActions';
import { QuostPageContext } from './QuostPage';
import { isOptionsAllFilled, isEmptyString } from '../utils/appUtils';
import { CheckSelect } from './Select';
import { ThemeContext } from 'styled-components';
import { useHold } from '../utils/customHooks';
import { Add } from '../svg';

const fakeOption = {
    value: '',
    isValidOption: false
}

const QuostOptionsLarge = ({options,pageIndex,isMutipleOption})=>{
    const theme = useContext(ThemeContext)
    let optionsLength = options.length;
    const MAX_OPTIONS = 4;
    const fillLength = MAX_OPTIONS - optionsLength;
    const dispatch = useDispatch();
    
    const handleToggleSelectMutipleOption = ()=>{
        dispatch(setOptionsType({
            isMutipleOption: !isMutipleOption,
            pageIndex
        }))
    }

    return (
        <StyledQuostOptionsLarge>
            <div className="ToggleOptionType">
                <div>
                    <CheckSelect selectedColor = {theme.secondaryBackgroundColor2} onSelected = {handleToggleSelectMutipleOption} selected =  {isMutipleOption}/>
                </div>
                <p>Mutiple Options Select</p>
            </div>
            <ul className="Options">
                {
                    options.map((option,index)=>{
                       return <li key = {index}>
                            <QuostOption optionsLength = {options.length} isMutipleOption = {isMutipleOption} optionIndex = {index} option = {option}/>
                        </li>
                    })
                }
                {
                    new Array(fillLength).fill(fakeOption).map((option,index)=>{
                        return <li key = {index}>
                             <QuostOption optionsLength = {options.length} isMutipleOption = {isMutipleOption} optionIndex = {optionsLength + index} option = {option}/>
                         </li>
                     })  
                }
            </ul>
        </StyledQuostOptionsLarge>
    );
}

export default QuostOptionsLarge;