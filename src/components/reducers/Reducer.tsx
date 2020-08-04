
import {combineReducers} from 'redux';
import  LoginReducer  from './LoginReducer';
import  SeachReducer from './SearchReducer';
export default combineReducers({  
    login:LoginReducer,
    search:SeachReducer,
  
})