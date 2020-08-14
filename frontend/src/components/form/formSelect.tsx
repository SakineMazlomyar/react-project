import React from 'react';
import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
    options:Array<string>,
    onChange:(city:string)=>void,
    option:string
  
   
}

export default class FormSelect extends React.Component<Props, {}>{
   
    
    rendeOptions = () => {   
        
        return this.props.options.map((option:string)=>{
            return <button  key={option} id={option} data-test="testing" className=" bg-dark dropdown-item" onClick={()=> this.props.onChange(option)}>
                 <FontAwesomeIcon  icon={faCircle}   className={this.props.option === option?'text-danger opetionDots':'text-secondary opetionDots'} />
                 <span className="text-light p-2" >{option}</span> 
                 </button>
        })
    }

    render() {
        return (
            
            <div  className="dropdown formSelectContainer text-center" data-test="button-form">
                   
                <FontAwesomeIcon  icon={faAngleDown}  className="float-right formSelecButton dropdown-toggle pb-1"  id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
            
                <span className="text-light float-left loction-font">Location</span> 

            <div className="dropdown-menu bg-dark  mt-4 dropDownMenu " aria-labelledby="dropdownMenuButton">
                {this.rendeOptions()}
            </div>
            
              
          </div>
          
         
        )
    }
}

