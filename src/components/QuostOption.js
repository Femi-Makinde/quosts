import React, { useEffect, useContext } from 'react';
import StyledQuostOption from '../styled/StyledQuostOption';
import { RadioSelect, CheckSelect } from './Select';
import { setOptionValue, setOptionValidity, removeOption } from '../actions/quostActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHold, useOnClickOutside } from '../utils/customHooks';
import { useRef } from 'react';
import { useState } from 'react';
import { Cancel } from '../svg';
import { ThemeContext } from 'styled-components';
import { useTransition,animated } from 'react-spring';




const QuostOption = ({option,optionIndex,isMutipleOption = false,optionsLength})=>{
    let { value, isValidOption } = option;
    const dispatch = useDispatch();
    const [showDeleteButton,setShowDeleteButton] = useState(false);
    const ref = useRef();
    const theme = useContext(ThemeContext);
    
    
    useOnClickOutside(ref, ()=>{
        showDeleteButton &&
        setShowDeleteButton(false);
    })

    const fadeIn = useTransition(showDeleteButton,null,{
        from: {opacity:0,visibility:"visible"},
        enter: {opacity:1},
        leave: {opacity:0, visibility:"hidden"},
    })

    useEffect(()=>{
        if(value.length <= 0 && isValidOption){
            dispatch(setOptionValidity({
                optionIndex,
                value: false
            }))
        }
    },[value,dispatch,optionIndex,isValidOption])

    const handleOptionTextChange = (e)=>{
        dispatch(setOptionValue({
            value: e.target.value,
            optionIndex,
        }))
    }

    const handleOptionValidityRadio = ()=>{
        if(isValidOption || value.length <= 0) return;
        dispatch(setOptionValidity({
            optionIndex,
            value:true,
            isMutipleField: false
        }))
    }
    
    const handleOptionValidityCheck = ()=>{
        if(value.length <= 0) return;
        dispatch(setOptionValidity({
            optionIndex,
            value: !isValidOption,
            isMutipleField: true
        }))
    }

    const handleOptionDelete = ()=>{
        if(optionsLength <= 2) return;
        dispatch(removeOption({
            optionIndex,
        }))
    }

    
    const handleShowDeleteOption = ()=>{
        if(optionsLength <= 2) return;
        setShowDeleteButton(true)
    }


    useHold(ref,handleShowDeleteOption,500,[optionsLength])

    return (
        <StyledQuostOption className = "quost-option" ref = {ref} selected = {isValidOption}>
            <div className="InputField">
                <input onChange = {handleOptionTextChange} value = {value} type="text" className = "I noselect"/>
                {
                    value.length <= 0 &&
                    <span className = "I">Option {optionIndex + 1}</span>
                }
            </div>
            {
                fadeIn.map(({item,key,props},i)=> item ? (
                    <animated.div key = {key} style = {props} onClick = {handleOptionDelete}  className = "OptionSelector Flex">
                        <Cancel fill = {theme.danger}/>
                    </animated.div>
                    ) : isMutipleOption ?
                    <animated.div key = {key} style = {props} onClick = {handleOptionValidityCheck}  className = "OptionSelector Flex">
                            <CheckSelect selected = {isValidOption}/>
                    </animated.div>:
                    <animated.div key = {key} style = {props} onClick = {handleOptionValidityRadio}  className = "OptionSelector Flex">
                        <RadioSelect selected = {isValidOption}/>
                    </animated.div>
                    )
            }
        </StyledQuostOption>
    );
}

export default QuostOption;