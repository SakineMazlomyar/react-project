import React from 'react';

  

interface Field  {label:string, type:string, value:string, placeholder:string, name:string};
interface Props {
    fields:Array<Field>,
    onSubmit:(event: React.FormEvent<HTMLFormElement>)=>void,
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void,

}
export default class Form extends React.Component<Props, {}>{
 
    
    renderInputs = () => {   
        return this.props.fields.map((field:Field)=>{
            return <input  className="bg-dark text-light"
                    type={field.type}
                    placeholder={field.placeholder} 
                    name={field.name}
                    onChange={this.props.onChange}
                    required
                       
                    />
                        
        })
    }


    render() {
        return (<form onSubmit={this.props.onSubmit} 
        className="d-flex flex-md-row flex-lg-row flex-sm-column justify-content-center align-items-center form-c">
                        {this.renderInputs()}

                        <input type="submit" className="btn btn-secondary text-light m-1" value="Submit" />
                </form>
         
        )
    }
}

