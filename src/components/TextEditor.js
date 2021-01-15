import React, {useContext} from 'react';
import StyledTextEditor, { Editor, PlaceHolder } from '../styled/StyledTextEditor';
import { QuostPageContext } from './QuostPage';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorText } from '../actions/quostActions';



const n = ()=>{}
const TextEditor = ({onTouchMove = n, onTouchEnd = n, onTouchStart= n, onEditorBlur = n, onEditorFocus = n})=>{
    const { pageIndex } = useContext(QuostPageContext);
    const { text } = useSelector(state=>state.quostCreation.quostPages[pageIndex])
    const dispatch = useDispatch();
    const MAX_TEXT = 80;
    

    const handleEditorFocus = ()=>{
        onEditorFocus();
    }

    const handleEditorBlur = ()=>{
        onEditorBlur();
    }

    const handleTextInput = (e)=>{
        let inputText = e.target.value;
        if(inputText.length > MAX_TEXT + 10) return;
        dispatch(setEditorText({
            text: inputText,
            page: pageIndex
        }))
    }

    const handleTouchStart = ()=>{
        onTouchStart()
    }

    const handleTouchMove = ()=>{
        onTouchMove()
    }

    const handleTouchEnd = (e)=>{
        onTouchEnd();
    }

    return (
        <StyledTextEditor>
            <Editor
            value = {text}
            onFocus = {handleEditorFocus} 
            onBlur = {handleEditorBlur}
            onTouchStart = {handleTouchStart}
            onTouchMove = {handleTouchMove}
            onChange = {handleTextInput}
            onTouchEnd = {handleTouchEnd}
            onMouseUp = {handleTouchEnd}
            wrap = 'hard'
            cols = '100'
            />
            {
                text.length <= 0 &&
                <PlaceHolder>
                    <h1>Type question here</h1>
                </PlaceHolder>
            }
        </StyledTextEditor>
    );
}

export default TextEditor;