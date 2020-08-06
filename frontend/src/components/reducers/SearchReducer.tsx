import { Types } from '../actions/Types';


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
        case Types.SEARCH:
       
            return {
                ...[action.payload]
            }
        case Types.GETDATA:
            return {
                ...[action.payload]
            }
        

        default: return state
        
    }
}