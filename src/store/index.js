import configureStore from './configureStore';



const {store,persistedStore} = configureStore();
console.log(store.getState())
export {persistedStore, store as default}