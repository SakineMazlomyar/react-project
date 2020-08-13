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
        event.preventDefault();
        this.props.getSeachText(this.state.search)
        this.setState({search:""})
        
    }
    render(){
        return(   

          <div className="headerContainer d-flex flex-md-row  justify-content-center align-items-center "> 
        
                <div className="headerItem">     
                    <FontAwesomeIcon className="text-danger font-weight-bold circleSize m-1"  icon={faCircle} />
                    <span className="brandTitle ">SKILLDAR</span>
                </div>

                <div className="formContainer">  
                    <form onSubmit={this.handleSubmit} className="d-flex flex-md-row flex-sm-row justify-content-md-center justify-content-sm-end ">
                            <input 
                             className="input placeHolerText" 
                             type="text" placeholder="Search" 
                             value={this.state.search} aria-label="Search" 
                             onChange={this.handleOnChange} autoFocus/>
                            <button className="btn p-0 border-0" type="submit">
                            <FontAwesomeIcon className="headerIconSearch ml-1" icon={faSearch}  />
                            </button>
                    </form>
                </div>
         
          </div>
        )
    }

}

