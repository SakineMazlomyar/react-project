import React from 'react';
import './form.css';


interface Field  {label:string, type:string, value:string, placeholder:string, name:string};
interface Props {
    fields:Array<Field>,
    onSubmit:(event: React.FormEvent<HTMLFormElement>)=>void,
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void,

}
export default class Form extends React.Component<Props, {}>{
 
    
    renderInputs = () => {   
        return this.props.fields.map((field:Field)=>{
            return <div className="col-md-8">
                        <div className="form-group">
                            <input 
                            type={field.type} className="form-control" 
                            placeholder={field.placeholder} 
                            name={field.name}
                            onChange={this.props.onChange}
                            />
                        </div>
                    </div>
        })
    }


    render() {
        return (<form onSubmit={this.props.onSubmit} >
                    {this.renderInputs()}
                    <input type="submit" className="btn btn-primary text-light rounded btnSubmit " value="Submit" />
                </form>
         
        )
    }
}

