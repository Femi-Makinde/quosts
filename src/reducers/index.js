  
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appTheme from "./appTheme";
import popup from "./popup";
import quostCreation from "./quostCreation";

const rootReducer =  combineReducers({
    appTheme,
    quostCreation,
    popup
})

const persistConfig = {
    key:'quosts',
    storage,
    blacklist: ['popup']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;