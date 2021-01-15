import { handleActions } from 'redux-actions';
import { ADD_QUOST_PAGE,  DELETE_QUOST_PAGE, SET_CURRENT_QUOST_PAGE, COPY_QUOST_PAGE, SET_EDITOR_TEXT, SET_OPTION_VALUE, SET_OPTION_VALIDITY, ADD_OPTION, SET_QUOST_DURATION, SET_OPTIONS_TYPE, REMOVE_OPTION, CHANGE_QOUST_PAGE_ORDER } from '../constants/actions';
import { produce } from "immer"
import _ from 'lodash-es';
import { insertBetween, arrayToObject } from '../utils/appUtils';


const quostPageOptionMarkup = {
    value: "",
    isValidOption: false
}
const quostPageMarkup = {
    text: JSON.stringify([
        {
          type: 'paragraph',
          children: [{ text: '' }],
        },
      ]),
    duration: 10,
    isMutipleOption: false,
    options: new Array(2).fill(quostPageOptionMarkup)
}


const initialState = {
    currentQuostPage: 0,
    quostPages: {
        0:quostPageMarkup
    },

}

export default handleActions({
    [ADD_QUOST_PAGE]: produce((state,action)=>{
        let pageToAdd = action.payload,
        quostPages = _.values(state.quostPages);
        if(pageToAdd === quostPages.length){
            state.quostPages[pageToAdd] = quostPageMarkup;
        }else{
            let combinedArray = insertBetween(quostPages,pageToAdd,quostPageMarkup),
            newQuostPages = arrayToObject(combinedArray);
            state.quostPages = newQuostPages;
        }
        state.currentQuostPage = pageToAdd;
    }),

    [COPY_QUOST_PAGE]: produce((state,action)=>{
        let pageToCopy = action.payload,
        pageToCopyTo = pageToCopy + 1,
        copiedPage = state.quostPages[pageToCopy],
        quostPages = _.values(state.quostPages);

        if(pageToCopy === quostPages.length){
            state.quostPages[pageToCopyTo] = copiedPage;
        }else{
            let combinedArray = insertBetween(quostPages,pageToCopyTo,copiedPage),
            newQuostPages = arrayToObject(combinedArray);
            state.quostPages = newQuostPages;
        }
        state.currentQuostPage = pageToCopyTo;
    }),


    [DELETE_QUOST_PAGE]:produce((state,action)=>{
        let quostPages = _.values(state.quostPages),
        pageToDelete = action.payload;
        quostPages.splice(pageToDelete,1);
        state.quostPages = arrayToObject(quostPages);
        state.currentQuostPage = _.clamp(pageToDelete - 1, 0, quostPages.length)
    }),

    [SET_CURRENT_QUOST_PAGE]: (state,action)=>({
        ...state,
        currentQuostPage: action.payload
    }),

    [SET_EDITOR_TEXT]: produce((state,action)=>{
        let { value, page } = action.payload;
        const content = JSON.stringify(value)
        state.quostPages[page].text = content;
    }),

    [SET_OPTION_VALUE]:produce((state,action)=>{
        let { value, optionIndex } = action.payload;
        state.quostPages[state.currentQuostPage].options[optionIndex].value = value
    }),

    [SET_OPTION_VALIDITY]:produce((state,action)=>{
        let { optionIndex,value,isMutipleField}= action.payload;
        isMutipleField = isMutipleField || false;
        let options = state.quostPages[state.currentQuostPage].options;

        if(!isMutipleField){
            options.forEach(option => {
                option.isValidOption = false
            });
        }

        options[optionIndex].isValidOption = value
    }),

    [ADD_OPTION]: produce((state)=>{
        state.quostPages[state.currentQuostPage].options.push(quostPageOptionMarkup)
    }),

    [SET_QUOST_DURATION]:produce((state,action)=>{
        let { pageIndex,duration }= action.payload;
        state.quostPages[pageIndex].duration = duration
    }),

    [SET_OPTIONS_TYPE]:produce((state,action)=>{
        let { pageIndex, isMutipleOption }= action.payload;
        let currentPage = state.quostPages[pageIndex];

        if(!isMutipleOption){
            let firstIndexOfSelected =  _.findIndex(currentPage.options, function(option) { return option.isValidOption });
            currentPage.options.forEach(option => {
                option.isValidOption = false
            });
            
            if(firstIndexOfSelected != -1){
                currentPage.options[firstIndexOfSelected].isValidOption = true;
            }
        }

        state.quostPages[pageIndex].isMutipleOption = isMutipleOption
    }),

    [REMOVE_OPTION]: produce((state,action)=>{
        let { optionIndex }= action.payload;
        let currentPage = state.quostPages[state.currentQuostPage];
        currentPage.options.splice(optionIndex,1);
    }),

    [CHANGE_QOUST_PAGE_ORDER]:produce((state,action)=>{
        let { order } = action.payload;
        let newOrder = {}
        let currentOrder = state.quostPages;

        order.forEach((order,index)=>{
            newOrder[index] = currentOrder[order]
        })
        state.quostPages = newOrder
    })

},initialState)
