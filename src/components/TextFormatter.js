import React, { useMemo, useEffect, useState } from 'react'
import StyledTextFormatter from "../styled/StyledTextFormatter";
import { parseText, reverse } from '../utils/appUtils';
import { PATTERNS,PATTERNS_DESC } from '../constants/labels';
import { useRef } from 'react';

const StringSpan = ({textObject,shouldSpace = true})=>{
    let { value, formatType,suffix} = textObject,
    isFormatted =  formatType !== PATTERNS_DESC.NONE,
    pattern = PATTERNS[formatType]
    return (
        <span>
            {
                isFormatted &&
                <span className = {`Affix ${formatType}`}>{pattern}</span>
            }
                <span className = {formatType}>
                    {value}
                </span>
            {
                isFormatted &&
                <span className = {`Affix ${formatType}`}>{reverse(pattern)}</span>
            }
            {
                suffix && 
                <span>{suffix}</span>
            }
            {
                shouldSpace &&
                <span>&nbsp;</span>
            }
        </span>
    )
}

const TextSpan = ({array})=>{
    return (
        <span>
            {
                array.map((e,i)=>{
                    return (Array.isArray(e.children) ? 
                    <span className = {e.formatType}>
                        <span className = 'Affix'>{PATTERNS[e.formatType]}</span>
                            <TextSpan key = {i} array = {e.children}/>
                        <span className = 'Affix'>{PATTERNS[e.formatType]}</span>
                    </span> : <StringSpan shouldSpace = {i !== array.length - 1} key = {i} textObject = {e}/>
                    )
                 })
            }
        </span>
    )
}

const TextFormatter = ({text = "",style}) =>{
    
    return (
        <StyledTextFormatter style = {style}>
            <TextSpan array = {parseText(text)}/>
        </StyledTextFormatter>
    );
}

export default TextFormatter;