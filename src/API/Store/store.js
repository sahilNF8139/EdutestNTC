import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../Reducer/index';

const store = configureStore({
  reducer: rootReducer
})
// import {  applyMiddleware ,createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';


// const Store = configureStore({
//   reducer:{
//    rootReducer: rootReducer,
//    applyMiddleware :applyMiddleware(thunk) }}
// );

export default store;