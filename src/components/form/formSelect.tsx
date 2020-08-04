import React from 'react';
import './form.css';



interface Props {
    options:Array<string>,
   
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void,
    option:string
  
   
}
export default class FormSelect extends React.Component<Props, {}>{
 
    
    rendeOptions = () => {   
        return this.props.options.map((option:string)=>{
            return <option className="bg-dark" value={option}>{option}</option>
        })
    }


    render() {
        return (
            <form >
              <select value={this.props.option} onChange={this.props.onChange}>
                {this.rendeOptions()}
              </select>
          </form>
         
        )
    }
}

