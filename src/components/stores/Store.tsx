import { createStore, applyMiddleware } from "redux";
import  thunk from 'redux-thunk';
import reducers from '../reducers/Reducer';  

/*
createStore(reducer, [preloadedState], [enhancer]);

A reducer is a function that returns the next state of app. A preloadedState is an optional argument
and is the initial state of your app. An enhancer is also an optional argument. It will help you enhance 
store with third-party capabilities.
A store has three important methods as given below − 
*/
const middleware  = [thunk]

const store = createStore(()=> reducers, [], applyMiddleware(...middleware));
export default store;



