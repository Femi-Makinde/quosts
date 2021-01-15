import {handleAction} from 'redux-actions';
import { SET_APP_THEME } from '../constants/actions';
import { LIGHT } from "../constants/labels";


export default handleAction(SET_APP_THEME,(state,action)=>{
    return action.payload
},LIGHT);

