import { createAction } from "redux-actions";
import { SET_CURRENT_QUOST, SET_EDITOR_TEXT,ADD_QUOST_PAGE,COPY_QUOST_PAGE,SET_CURRENT_QUOST_PAGE, DELETE_QUOST_PAGE, SET_OPTION_VALUE, SET_OPTION_VALIDITY, ADD_OPTION, SET_QUOST_DURATION, SET_OPTIONS_TYPE, REMOVE_OPTION, CHANGE_QOUST_PAGE_ORDER } from "../constants/actions";

export const setCurrentQuost = createAction(SET_CURRENT_QUOST);
export const setCurrentQuostPage = createAction(SET_CURRENT_QUOST_PAGE);
export const addQuostPage = createAction(ADD_QUOST_PAGE);
export const deleteQuostPage = createAction(DELETE_QUOST_PAGE);
export const copyQuostPage = createAction(COPY_QUOST_PAGE);
export const setEditorText = createAction(SET_EDITOR_TEXT)
export const setOptionValue = createAction(SET_OPTION_VALUE);
export const setOptionValidity = createAction(SET_OPTION_VALIDITY);
export const addOption = createAction(ADD_OPTION);
export const setQuostDuration = createAction(SET_QUOST_DURATION);
export const setOptionsType = createAction(SET_OPTIONS_TYPE);
export const removeOption = createAction(REMOVE_OPTION);
export const changeQuostPageOrder = createAction(CHANGE_QOUST_PAGE_ORDER);