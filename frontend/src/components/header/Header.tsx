import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './header.css';



interface State{
  search:string

}
interface Props {

    getSeachText:(input:string)=>void,
}

export default class Header extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
           search:''
        }

    }
   
    
    handleOnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({search:event.target.value})
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.getSeachText(this.state.search)
        event.preventDefault();
        
    }
    render(){
        return(   

          <div className="headerContainer d-flex flex-md-row flex-sm-row justify-content-md-center align-items-center justify-content-sm-end"> 
        
                <div className="p-1">     
                    <FontAwesomeIcon className="text-danger font-weight-bold circleSize m-1"  icon={faCircle} />
                    <span className=" font-weight-bold brandTitle ">SKILLDAR</span>
                </div>

                <div className="p-1 formContainer">  
                    <form onSubmit={this.handleSubmit} className="d-flex flex-md-row flex-sm-row justify-content-md-center justify-content-sm-end ">
                            <input  className="text-secondary input" type="search" placeholder="Search" aria-label="Search" onChange={this.handleOnChange}/>
                            <button className="btn " type="submit">
                            <FontAwesomeIcon className="text-secondary" icon={faSearch}  />
                            </button>
                    </form>
                </div>
         
          </div>
        )
    }

}

