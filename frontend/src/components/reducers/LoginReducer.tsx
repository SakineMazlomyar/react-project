import {Types } from '../actions/Types';


const initialState = {
    items:[],
    item:{}
}
interface Action { 
    type:string,
    payload:any
 };


export default (state = initialState, action:Action)=>{
    switch(action.type){
        case Types.LOGIN:
       
            return {
                ...[action.payload]
            }
        case Types.REGISTER:
            return {
                ...[action.payload]
            }
        

        default: return state
        
    }
}