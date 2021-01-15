import {handleAction} from 'redux-actions';
import { SET_POPUP } from '../constants/actions';
import {CODE_POPUP_LABEL,ADD_POPUP_LABEL} from '../constants/popuplabels'
import produce from 'immer';

const initalState = {
    CODE_POPUP_LABEL: false,
    ADD_POPUP_LABEL: false
}


export default handleAction(SET_POPUP,produce((state,action)=>{
    let { popup, value } = action.payload
    console.log("POPUP",popup,value)
    if(value){
        for(let key in state){
            state[key] = false
        }
        state[popup] = value
        return;
    }
    state[popup] = value
}),initalState);

