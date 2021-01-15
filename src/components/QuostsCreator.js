import React, {useState, useContext} from 'react';
import StyledQuostsCreator, {StyledActions, StyledFooter, StyledButtonsFooter,} from '../styled/StyledQuostsCreator';
import Icon from './Icon';
import { RoundButton } from '../styled/StyledButtons';
import { CreatedQuostsShowIcon, CopyIcon, DeleteIcon, ForwardIcon, BackIcon, Add} from '../svg';
import QuostScrollViewer from './QuostScrollViewer';
import _ from 'lodash';
import { animated, useSpring, useTransition} from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuostPage, addQuostPage, deleteQuostPage, copyQuostPage } from '../actions/quostActions';
import QuostPage from '../components/QuostPage';
import { useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { correctOptionValidator, isOptionsAllFilled, isEmptyString } from '../utils/appUtils';
import { AddPopup, CodePopup, ImagePopup } from './Popups';
import { setPopup } from '../actions/popupActions';
import { ADD_POPUP_LABEL as ADD_POPUP } from '../constants/popuplabels';

const QuostsCreator = ()=>{
    const { currentQuostPage, quostPages } = useSelector(state=>state.quostCreation);
    const { ADD_POPUP_LABEL,CODE_POPUP_LABEL,IMAGE_POPUP_LABEL } = useSelector(state=>state.popup);
    const QUOSTS_NUMBER = Object.keys(quostPages).length;
    const [showEditorFooter,setShowEditorFooter] = useState(false);
    const dispatch = useDispatch();
    const MAX_TEXT = 80;

    useEffect(()=>{
       return function (){
        dispatch(setCurrentQuostPage(0))
       };
    },[])

    const handleIndexChange = (index)=>{
        showEditorFooter && currentQuostPage !== index && setShowEditorFooter(false)
    }

    const editorProps = {
        onEditorFocused: (focused)=>{
            setShowEditorFooter(focused);
        }
    }

    const props = useSpring({bottom: 0, from: {
        bottom: '0px'
    }})
    return (
        <StyledQuostsCreator>
            <div className="ActionSection">
                <Actions/>
            </div>
            <div className="ContentSection">
                <QuostScrollViewer editorProps = {editorProps} getCurrentIndex ={handleIndexChange} index = {currentQuostPage} component = {QuostPage}/>
            </div>
            {
                !showEditorFooter && 
                    <animated.div style = {props} className="FooterSection">
                    <Footer
                    onAddButtonClick  = {()=>dispatch(setPopup({
                        value: true,
                        popup: ADD_POPUP
                    }))}
                    maxText = {MAX_TEXT} 
                    showEditorComponent = {showEditorFooter} 
                    totalQuosts = {QUOSTS_NUMBER}
                    />
                </animated.div>
            }
            {
                ADD_POPUP_LABEL &&
                <AddPopup/>
            }
            {
                CODE_POPUP_LABEL &&
                <CodePopup/>
            }
            {
                IMAGE_POPUP_LABEL &&
                <ImagePopup/>
            }
        </StyledQuostsCreator>
    );
}




const Actions = ({isPageSet = true})=>{
    const [showActions,setShowActions] = useState(false);
    const { currentQuostPage, quostPages } = useSelector(state=>state.quostCreation);
    const QUOSTS_NUMBER = Object.keys(quostPages).length;
    const pageOptions = quostPages[currentQuostPage].options;
    const dispatch = useDispatch();

    const toggleShowActions = (e)=>{
        e.stopPropagation();
        setShowActions(!showActions);
    }

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

    const handleElementClick = ()=>setShowActions(false);

    return (
        <StyledActions onClick = {handleElementClick}>
            <div className="QuostNumber">
                <span>{INDEX}</span>
            </div>
            {
                !showActions &&
                <div onClick = {toggleShowActions} className="ActionToggler Icon">
                    <Icon icon = "more_horiz"/>
                </div>
            }
            {
                showActions &&
                <div className="Actions">
                    {
                       QUOSTS_NUMBER > 1 && INDEX > 1 &&
                        <div onClick = {onPrevious} className="Action Icon">
                            <BackIcon/>
                        </div>
                    }
                    {
                       QUOSTS_NUMBER > 1 &&  INDEX !== QUOSTS_NUMBER &&
                        <div onClick = {onNext} className="Action Icon">
                            <ForwardIcon/>
                        </div>
                    }
                    <div onClick = {onCopyPage} className="Action Icon">
                        <CopyIcon/>
                    </div>
                    {
                       QUOSTS_NUMBER > 1 &&
                        <div onClick = {onDeletePage} className="Action Icon">
                            <DeleteIcon/>
                        </div>
                    }
                    {
                        isPageSet &&
                        <div onClick = {onAddPage} className="Action Icon">
                            <Add/>
                        </div>
                    }
                </div>
            }
        </StyledActions>
    );
}

const ButtonsFooter = ({totalQuosts,showButtons,onAddButtonClick})=>{
    
    const transitions = useTransition(showButtons,null,{
        from: {opacity: 0, transform: 'translateY(-10px) scale(0.5)'},
        enter: {opacity: 1, transform: 'translateY(0px) scale(1)'},
        leave: {opacity: 0, transform: 'translateY(-10px) scale(0.5)'},
    })
    const AnimatedRoundButton = animated(RoundButton);
    const theme = useContext(ThemeContext);

    return (
        <StyledButtonsFooter>
            {
                transitions.map(({item,key,props})=>{
                    return item && (
                        <AnimatedRoundButton className = "Button" key = {key} style = {props}>
                            <div className="Content AllQuosts">
                                <CreatedQuostsShowIcon stroke = {theme.iconColor2}/>
                                <span>{totalQuosts}</span>
                            </div>
                        </AnimatedRoundButton>
                    )
                })
            }
            {
                transitions.map(({item,key,props})=>{
                    return item && (
                        <AnimatedRoundButton className = "Button" key = {key} onClick = {onAddButtonClick} style = {props}>
                            <div className="Content EditQuost">
                                <Add stroke = "white" width = {25} height = {25}/>
                            </div>
                        </AnimatedRoundButton>
                    )
                })
            }
        </StyledButtonsFooter>
    );
}



const Footer = ({totalQuosts, onAddButtonClick, showEditorComponent = false})=>{
    return (
        <StyledFooter>
            <ButtonsFooter onAddButtonClick = {onAddButtonClick} showButtons = {!showEditorComponent} totalQuosts = {totalQuosts}/>
        </StyledFooter>
    );
}


export default QuostsCreator;