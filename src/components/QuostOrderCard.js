import React, { useMemo } from 'react';
import StyledQuostOrderCard from '../styled/StyledQuostOrderCard';
import { RoundButton, IconButton } from '../styled/StyledButtons';
import { CopyIcon, DeleteIcon } from '../svg';
import TextEditor from './Text';
import { Slate, withReact } from 'slate-react';
import { useSelector, useDispatch } from 'react-redux';
import { createEditor } from 'slate';
import QuostOptionsLarge from './QuostOptionsLarge';
import QuostOption from './QuostOption';

const fakeOption = {
    value: '',
    isValidOption: false
}

const QuostOrderCard = ({index,quostPage})=>{
    const {quostPages} = useSelector(state=>state.quostCreation);
    let { text,options,isMutipleOption } = quostPages[index],
    parsed = JSON.parse(text),
    dispatch = useDispatch();

    let optionsLength = options.length;
    const MAX_OPTIONS = 4;
    const fillLength = MAX_OPTIONS - optionsLength;
    const editor = useMemo(() => withReact(createEditor()), [])
    

    return (
        <StyledQuostOrderCard>
            <Slate value = {parsed} editor = {editor}>
                <div className="Content">
                    <div className="ContentContainer">
                        <div className = "Question">
                            <TextEditor fontSize = "1rem" readOnly = {true}/>
                        </div>
                        <div className="Options">
                            <ul>
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
                        </div>
                    </div>
                </div>
                <div className="Buttons">
                    <IconButton size = {30}>
                        <CopyIcon/>
                    </IconButton>
                    <IconButton size = {30}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Slate>
        </StyledQuostOrderCard>
    );
}


export default QuostOrderCard;