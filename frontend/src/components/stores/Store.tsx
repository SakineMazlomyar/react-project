import { createStore, applyMiddleware } from "redux";
import  thunk from 'redux-thunk';
import reducers from '../reducers/Reducer';  

const middleware  = [thunk]

const store = createStore(()=> reducers, [], applyMiddleware(...middleware));
export default store;



