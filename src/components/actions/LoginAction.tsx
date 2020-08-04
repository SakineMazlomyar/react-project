import { Types} from './Types';



export interface UserRegisterd {
    email:string,
    password:string
}

export interface NewUser {
    username:string,
    email:string,
    password:string
}
let users:any = []
export function register(user:NewUser) {
    return function(dispatch: any) {
        console.log(user)
        users.push(user)
        

        return dispatch({
            type:Types.REGISTER,
            payload:users
        })
        
    };
}

export function login(user:UserRegisterd) {
    return function(dispatch: any) {
     
        for(let participate of users){
            if(user.email === participate.email){
                return dispatch({
                    type:Types.LOGIN,
                    payload:{username:participate.username, email:participate.email}
                })
            }
        }

        return dispatch({
            type:Types.LOGIN,
            payload:{}
        })
        

     
        
    };
}
