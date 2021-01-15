import React, { useContext } from 'react';
import StyledQuostOptions from '../styled/StyledQuostOptions';
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


const QuostOptions = ()=>{
    const theme = useContext(ThemeContext)
    const { quostPages} = useSelector(state=>state.quostCreation)
    const { pageIndex } = useContext(QuostPageContext);
    const { options, isMutipleOption } = quostPages[pageIndex];
    const MAX_OPTIONS = 4;
    let optionsLength = options.length;
    const dispatch = useDispatch();

    

    const handleAddOption = ()=>{
        if(optionsLength > MAX_OPTIONS) return;
        if(isOptionsAllFilled(options,isEmptyString)) return;
        dispatch(addOption())
    }
    
    const handleToggleSelectMutipleOption = ()=>{
        dispatch(setOptionsType({
            isMutipleOption: !isMutipleOption,
            pageIndex
        }))
    }

    return (
        <StyledQuostOptions>
            <div className="ToggleOptionType">
                <p>Mutiple Options Select</p>
                <div>
                    <CheckSelect selectedColor = {theme.secondaryBackgroundColor2} onSelected = {handleToggleSelectMutipleOption} selected =  {isMutipleOption}/>
                </div>
            </div>
            <ul className="Options">
                {
                    options.map((option,index)=>{
                       return <li key = {index}>
                            <QuostOption optionsLength = {options.length} isMutipleOption = {isMutipleOption} optionIndex = {index} option = {option}/>
                        </li>
                    })
                }
            </ul>
            {
                optionsLength < MAX_OPTIONS  &&
                <div className="AddOption">
                    <BorderButton onClick = {handleAddOption} style = {{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%'
                    }}>
                        <Add/>
                    </BorderButton>
                </div>
            }
        </StyledQuostOptions>
    );
}

export default QuostOptions;