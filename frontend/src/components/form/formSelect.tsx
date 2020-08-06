import React from 'react';
import './form.css';



interface Props {
    options:Array<string>,
    onChange:(event:any)=>void,
    option:string
  
   
}
export default class FormSelect extends React.Component<Props, {}>{
 
    
    rendeOptions = () => {   
        return this.props.options.map((option:string)=>{
            return <button  key={option}  className="bg-dark dropdown-item text-light"   onClick={()=> this.props.onChange(option)}>{option}</button>
        })
    }

    render() {
        return (
            <div  className="dropdown">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Location
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                {this.rendeOptions()}
            </div>
              
          </div>
         
        )
    }
}

