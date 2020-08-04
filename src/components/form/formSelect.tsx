import React from 'react';
import './form.css';



interface Props {
    options:Array<string>,
    onSubmit:(event: React.FormEvent<HTMLFormElement>)=>void,
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void,
    option:string
    label:string
 
   
}
export default class FormSelect extends React.Component<Props, {}>{
 
    
    rendeOptions = () => {   
        return this.props.options.map((option:string)=>{
            return <option value={option}>{option}</option>
        })
    }


    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
            <label>
                {this.props.label}
              <select value={this.props.option} onChange={this.props.onChange}>
                {this.rendeOptions()}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
         
        )
    }
}

