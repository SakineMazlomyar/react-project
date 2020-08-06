import { Types} from './Types';
import {setValueToLocalstoreage, getValueFromLocalstoreage} from '../helps/Helps';


export interface UserRegisterd {
    email:string,
    password:string
}

export interface NewUser {
    username:string,
    email:string,
    password:string,
    isLoggedIn:boolean
}



let usersParsed = getValueFromLocalstoreage('users');
if(usersParsed === null){
    setValueToLocalstoreage('users',[])
}
export function register(user:NewUser) {
    return function(dispatch: any) {
      
       
        let userExist = false

        let users = getValueFromLocalstoreage('users');
        for(let n of users) {
            if(n.email === user.email && n.username === user.username){
                userExist = true
            }
        }
       if(userExist){

           return dispatch({
               type:Types.REGISTER,
               payload:{username:'', email:'', isLoggedIn:false}
           })
       }else{
           users.push(user);
           setValueToLocalstoreage('users',users)
           return dispatch({
            type:Types.REGISTER,
            payload:{username:user.username, email:user.email, isLoggedIn:false}
        })
       }

        
        
    };
}

export function login(user:UserRegisterd) {
    return function(dispatch: any) {
        let registeredUsers = getValueFromLocalstoreage('users');

        for(let participate of registeredUsers){
            if(participate.email === user.email &&  participate.password ===  user.password ){
                return dispatch({
                    type:Types.LOGIN,
                    payload:{username:participate.username, email:participate.email, isLoggedIn:true}
                })
            }
        }

        return false
        

     
        
    };
}
