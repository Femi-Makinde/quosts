import React, {useState,useMemo} from 'react';
import StyledQuostCreatorLarge from "../styled/StyledQuostCreatorLarge";
import ReorderListView from './ReorderListView';
import QuostOrderCard from './QuostOrderCard';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash-es';
import { changeQuostPageOrder, deleteQuostPage, addQuostPage, copyQuostPage, setEditorText } from '../actions/quostActions';
import { setCurrentQuostPage } from '../actions/quostActions';
import { isOptionsAllFilled, isEmptyString, correctOptionValidator } from '../utils/appUtils';
import { StyledActionsLarge } from '../styled/StyledQuostCreatorLarge';
import { BackIcon, ForwardIcon, CopyIcon, DeleteIcon, Add, Photo,Code, BoldIcon, ItalicsIcon, UnderlineIcon } from '../svg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IconButton } from '../styled/StyledButtons';
import Progress from './Progress';
import TextEditor from './Text';
import MarkButton from './MarkButton';
import { Slate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';
import { serialize, withCharLimit } from '../utils/textUtils';
import QuostOption from './QuostOption';
import QuostOptionsLarge from './QuostOptionsLarge';

const WARN_LENGTH = 15;
const MAX_TEXT = 100;

const QuostCreatorLarge = ()=>{
    const {quostPages,currentQuostPage} = useSelector(state=>state.quostCreation);
    let { text,options,isMutipleOption } = quostPages[currentQuostPage],
    parsed = JSON.parse(text),
    textLength = serialize(parsed).length,
    progress = Math.min((textLength/MAX_TEXT) * 100,100)
    const dispatch = useDispatch();
    const editor = useMemo(() => withHistory(withReact(withCharLimit(MAX_TEXT)(createEditor()))),[])

    const onEditorChange = (value)=>{
        dispatch(setEditorText({
            value,
            page: currentQuostPage
        }))
    }
    const handleOrderChange = (order)=>{
        dispatch(changeQuostPageOrder({
            order: order
        }))
    }

    return (
        <StyledQuostCreatorLarge>
            <header>
                <div className = "Container">
                    <div className="CurrentPage FlexHS">
                        <h1>{currentQuostPage + 1}</h1>
                    </div>
                    <div>
                        <Actions/>
                    </div>
                </div>
            </header>
            <aside>
               <div className="CreatedPages">
                    <div className="Header FlexHS">
                        <h1>Pages</h1>
                    </div>
                    <div className="PagesContainer">
                        <div className="Pages">
                            <div>
                                <ReorderListView onOrderChange = {handleOrderChange} contentHeight = {150} component = {QuostOrderCard}/>
                            </div>
                        </div>
                    </div>
                </div> 
            </aside>
            <main>
                <div className="Main">
                    <div className="Editor">
                        <Slate editor={editor} value={parsed} onChange={onEditorChange}>
                            <div className="QuostContent">
                                <div className="Text">
                                    <TextEditor/>
                                </div>
                                <div className="Addons">

                                </div>
                            </div>
                            <div className="EditorFooter">
                                <div className = "Content">
                                <div className="Addons">
                                    <div className="Buttons">
                                        <IconButton size = {45} className = "Button">
                                            <Code/>
                                        </IconButton>
                                        <IconButton size = {45} className = "Button">
                                            <Add/>
                                        </IconButton>
                                        <IconButton size = {45} className = "Button">
                                            <Photo/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="TextActions">
                                    <div className="Action">
                                        <MarkButton format = 'bold'>
                                            <BoldIcon/>
                                        </MarkButton>
                                    </div>
                                    <div className="Action">
                                        <MarkButton format = 'italic'>
                                            <ItalicsIcon/>
                                        </MarkButton>
                                    </div>
                                    <div className="Action">
                                        <MarkButton format = 'underline'>
                                            <UnderlineIcon/>
                                        </MarkButton>
                                    </div>
                                    <div className="Action">
                                    <div>
                                        <Progress text = {MAX_TEXT - textLength <= WARN_LENGTH ? Number(MAX_TEXT - textLength).toString(): null} radius = {15} stroke = {2} progress = {progress}/>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </Slate>
                        </div>
                    <div className="Options-Container">
                        <QuostOptionsLarge options = {options} isMutipleOption = {isMutipleOption} pageIndex = {currentQuostPage}/>
                    </div>
                </div>
            </main>
        </StyledQuostCreatorLarge>
    );
}

const Actions = ({isPageSet = true})=>{
    const { currentQuostPage, quostPages } = useSelector(state=>state.quostCreation);
    const QUOSTS_NUMBER = Object.keys(quostPages).length;
    const pageOptions = quostPages[currentQuostPage].options;
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext)
    const onNext = (e)=>{
        e.stopPropagation()
        dispatch(setCurrentQuostPage(_.clamp(currentQuostPage + 1, 0, QUOSTS_NUMBER-1)))
    }

    const onPrevious = (e)=>{
        e.stopPropagation()
        dispatch(setCurrentQuostPage(_.clamp(currentQuostPage - 1, 0, QUOSTS_NUMBER-1)))
    }

    const onAddPage = (e)=>{
        e.stopPropagation();
        //Check if question is set
        let isQuestionNotSet = quostPages[currentQuostPage].text <= 0;
        if(isQuestionNotSet){
            console.log("QUESTION NOT SET")
            return
        }
        //Check if all options are filled
        let isAllTextNotFilled = isOptionsAllFilled(pageOptions,isEmptyString);
        if(isAllTextNotFilled){
            console.log("SOME OPTIONS NOT FILLED")
            return
        };

        //Checked if the correct option is selected
        let optionSelected = isOptionsAllFilled(pageOptions,correctOptionValidator);
        if(!optionSelected) {
            console.log('SELECT VALID OPTION')
            return
        };
        
        
        dispatch(addQuostPage(currentQuostPage + 1))
    }

    const onDeletePage = (e)=>{
        e.stopPropagation();
        dispatch(deleteQuostPage(currentQuostPage))
    }

    const onCopyPage = (e)=>{
        e.stopPropagation();
        dispatch(copyQuostPage(currentQuostPage));
    }

    const INDEX = currentQuostPage + 1;

    return (
        <StyledActionsLarge>
            <div className="Actions">
                {
                    QUOSTS_NUMBER > 1 && INDEX > 1 &&
                    <IconButton onClick = {onPrevious} className="Button">
                        <BackIcon />
                    </IconButton>
                }
                {
                    QUOSTS_NUMBER > 1 &&  INDEX !== QUOSTS_NUMBER &&
                    <IconButton onClick = {onNext} className="Button">
                        <ForwardIcon />
                    </IconButton>
                }
                <IconButton onClick = {onCopyPage} className="Button">
                    <CopyIcon/>
                </IconButton>
                {
                    QUOSTS_NUMBER > 1 &&
                    <IconButton onClick = {onDeletePage} className="Button">
                        <DeleteIcon/>
                    </IconButton>
                }
                {
                    isPageSet &&
                    <IconButton onClick = {onAddPage} className="Button">
                        <Add />
                    </IconButton>
                }
            </div>
        </StyledActionsLarge>
    );
}






export default QuostCreatorLarge;