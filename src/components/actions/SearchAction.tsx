import { Types} from './Types';
import axios from 'axios';

export function SEARCH(input:string) {
    return async function (dispatch: any) {
      
        let response = await axios.get(`https://jobsearch.api.jobtechdev.se/search?q=${input}`, {
            headers:  {
                'Content-Type': 'application/json',
                'api-key':process.env.REACT_APP_API_KEY
              }})

        

        if(response.status === 200 && response.data.hits  )  {
            let relResponse= await response.data.hits
            return dispatch({
                type:Types.SEARCH,
                payload:relResponse
            })

        }else{
            return dispatch({
                type:Types.SEARCH,
                payload:[]
            })
        }
        

     
        
    };
}

export function getDefaultData() {
    return async function (dispatch: any) {
     
        let response = await axios.get(`https://jobsearch.api.jobtechdev.se/search`, {
            headers:  {
                'Content-Type': 'application/json',
                'api-key':'YidceDk4XHgxZnB3NHlRU1x4ZWZceGU1O21ceGZkXHhlNCJceDliXHhkNlx4YWFDXHhmNic'
              }})

        

        if(response.status === 200)  {
            let relResponse= await response.data.hits
            return dispatch({
                type:Types.SEARCH,
                payload:relResponse
            })

        }else{
            return dispatch({
                type:Types.SEARCH,
                payload:[]
            })
        }
        
    };
}