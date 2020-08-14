import { Types } from '../actions/Types';



interface Action { 
    type:string,
    payload:any
 };


export default (state = [], action:Action)=>{
    switch(action.type){
        case Types.SEARCH:
       
            return action.payload
            
        case Types.GETDATA:
            return action.payload
            
        

        default: return state
        
    }
}