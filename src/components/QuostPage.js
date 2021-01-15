import React, { useContext, useMemo, useState } from 'react';
import StyledQuostPage, { StyledEditorFooter } from '../styled/StyledQuostPage'
import TextEditor from './Text';
import QuostOptions from './QuostOptions';
import TimerSetter from './TimerSetter';
import { Time, BoldIcon, ItalicsIcon, UnderlineIcon } from '../svg';
import { useSpring } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import Progress from './Progress';
import { Slate, withReact, useFocused } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';
import { serialize, withCharLimit } from '../utils/textUtils';
import { setEditorText } from '../actions/quostActions';
import { useEffect } from 'react';
import MarkButton from './MarkButton';

export const QuostPageContext = React.createContext();
const MAX_TEXT = 100;

const QuostPage = ({pageIndex, onEditorFocused})=>{
    const editor = useMemo(() => withHistory(withReact(withCharLimit(MAX_TEXT)(createEditor()))),[])
    const { quostPages, currentQuostPage } = useSelector(state=>state.quostCreation);
    let { text } = quostPages[pageIndex],
    parsed = JSON.parse(text),
    pageText = serialize(parsed);
    const [showFooter,setShowFooter] = useState(false)

    useEffect(()=>{
        if(currentQuostPage != pageIndex) 
        onEditorFocused(false)
        setShowFooter(false)
    },[currentQuostPage])
    

    const dispatch = useDispatch();

    const onEditorChange = (value)=>{
        dispatch(setEditorText({
            value,
            page: currentQuostPage
        }))
    }

    const handleFocus = (focused)=>{
        setShowFooter(focused)
        onEditorFocused(focused);
    }
 
    return (
        <StyledQuostPage>
            <Slate editor={editor} value={parsed} onChange={onEditorChange}>
                <QuostPageContext.Provider value = {{
                    pageIndex,
                }}>
                    <div className="TextEditor">
                    <TextEditor 
                    handleFocus = {handleFocus} 
                    fontSize = "2rem"
                    fontWeight = {500}
                    />
                    </div>
                    <div className="QuestionOptions">
                        <QuostOptions/>
                    </div>
                    {/* <div className="DurationSetter">
                        <div className="Timer">
                            <Time fill = {theme.primaryMainColor}/>
                        </div>
                        <div className="Setter">
                            <TimerSetter/>
                        </div>
                    </div> */}
                </QuostPageContext.Provider>
                <EditorFooter show = {showFooter} MAX_TEXT = {MAX_TEXT} onEditorFocused = {onEditorFocused} text = {pageText}/>
            </Slate>
        </StyledQuostPage>
    );
}

const EditorFooter = ({text,MAX_TEXT,show})=>{
    const WARN_LENGTH = 15
    let textLength = text.length;
    let progress = Math.min((textLength/MAX_TEXT) * 100,100);
    let {bottom} = useSpring({bottom: show ? '0px':'-70px', from: {
        bottom: '-70px'
    }})

    return (
        <StyledEditorFooter onClick = {()=>console.log("CLICKED")} style = {{bottom}}>
            <div className = "Formatters">
                <MarkButton format = 'bold'>
                    <BoldIcon/>
                </MarkButton>
                <MarkButton format = 'italic'>
                    <ItalicsIcon/>
                </MarkButton>
                <MarkButton format = 'underline'>
                    <UnderlineIcon/>
                </MarkButton>
            </div>
            <div className="TextCounter">
                <Progress text = {MAX_TEXT - textLength <= WARN_LENGTH ? Number(MAX_TEXT - textLength).toString(): null} radius = {15} stroke = {2} progress = {progress}/>
            </div>
        </StyledEditorFooter>
    );
}

export default QuostPage;