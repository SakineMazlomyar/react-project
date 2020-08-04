export function setValueToLocalstoreage(key:string, value:any){
  
    localStorage.setItem(key, JSON.stringify(value));
   
 }
 export function getValueFromLocalstoreage(key:string){
 
    let currentValue:any =  localStorage.getItem(key);
     let currentValueParsed = JSON.parse(currentValue)
    return currentValueParsed
 }