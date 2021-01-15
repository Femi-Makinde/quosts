import React, {useState, useRef} from 'react';
import {StyledInput, StyledInputWithIcon, StyledSearchDropDown} from "../styled/StyledInput";
import { Cancel, Search } from '../svg';
import { useOnClickOutside } from '../utils/customHooks';
import { SearchItemLoader } from '../loading';

const Input = ({onChange = ()=>{}, value = '',onFocus,placeHolder,...otherProps})=>{
    const handleChange = (e)=>{
        onChange(e.target.value)
    }
    const handleFocus = ()=>onFocus(true)
    return (
        <StyledInput 
        spellCheck = "false" 
        autoCorrect = "off" 
        autoCapitalize = "off" 
        value = {value} 
        onChange = {handleChange} 
        onFocus = {handleFocus} 
        placeholder = {placeHolder}
        {...otherProps}/>
    );
}

const InputWithIcon = ({icon: Icon,onChange,value = '',onFocus,placeHolder,...otherProps})=>{
    return (
        <StyledInputWithIcon className = "InputField">
            <div className="Icon Input--Child">
                <Icon/>
            </div>
            <div className = "Input--Child Input">
                <Input value = {value} onChange = {onChange} onFocus = {onFocus} placeHolder = {placeHolder} {...otherProps}/>
            </div>
            <div className="Icon Input--Child">
                {
                    value.length > 0 &&
                    <Cancel onClick = {()=>onChange('')}/>
                }
            </div>
        </StyledInputWithIcon>
    );
}


const empty = new Array(3).fill("");

const SearchDropDown = ({component: Component,value,onChange,items,placeHolder,loading = true,...otherProps})=>{
    const [showDropDown,setShowDropDown] = useState(false);
    const ref = useRef(null);
    const handleFocus = ()=>{
        setShowDropDown(true)
    }
    const itemsArray = loading ?  empty : items
    useOnClickOutside(ref,()=>setShowDropDown(false))
    return (
        <StyledSearchDropDown ref = {ref} dropdown = {showDropDown}>
            <div className="Input">
                <InputWithIcon 
                onFocus = {handleFocus} 
                icon = {Search} 
                value = {value} 
                onChange = {onChange}
                placeHolder = {placeHolder}
                {...otherProps}/>
            </div>
            {
                showDropDown &&
                <div className="SearchResults">
                    <ul>
                        {
                            itemsArray.map((item,index)=>{
                               return ( <li>
                                    {
                                        loading ? 
                                            <SearchItemLoader index = {index} key = {index}/>:
                                            <Component data = {item} key = {index}/>
                                    }
                                </li>
                               )
                            })
                        }
                    </ul>
                </div>
            }
        </StyledSearchDropDown>
    );
}

export { Input, InputWithIcon,SearchDropDown };