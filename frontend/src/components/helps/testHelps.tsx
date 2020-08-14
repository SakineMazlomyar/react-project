export const findByAttr  = (component:any, attr:string)=>{
   
    let wrapper = component.find(`[data-test='${attr}']`);
    return wrapper
}