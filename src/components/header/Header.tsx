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

          <div className="container headerContainer d-flex justify-content-center"> 
        
                <div>     
                    <FontAwesomeIcon className="circleSize" icon={faCircle} />
                    <span className="brandTitle">SKILLDAR</span>
                </div>
                <div className="formSeachWidth ml-3">
                    <form className="formContainer" onSubmit={this.handleSubmit}>
                            <input className="input " type="search" placeholder="Search" aria-label="Search" onChange={this.handleOnChange}/>
                            <button className="btn " type="submit">
                            <FontAwesomeIcon icon={faSearch}  />
                            </button>
                    </form>

                </div>

          </div>
        )
    }

}

