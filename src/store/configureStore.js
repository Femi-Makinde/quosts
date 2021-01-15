import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
// import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState)=>{
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware,logger),
        )
        );
        
        // sagaMiddleware.run(rootSaga)
        if(module.hot){
            module.hot.accept('../reducers',()=>{
                store.replaceReducer(rootReducer)
            })
        }

        const persistedStore = persistStore(store)
     return { store, persistedStore};
}

export default configureStore;