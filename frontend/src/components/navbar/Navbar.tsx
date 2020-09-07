import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSignInAlt, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'


interface Props {
    toggleOpenForm:()=>void,
    openForm: boolean,
  
}
interface State {
   
}
export default class Navbar extends React.Component<Props, State>{

    render(){
        return(

            <nav className="navbar navbar-expand-md sticky-top navbar-dark">
                <a className="navbar-brand" href="/">
                    <FontAwesomeIcon className="navbar-hashtag" icon={faHashtag}/>
                    <span className="navbar-brand-name">Browse Skills</span>
                </a>   
                
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#nav-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="nav-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="/" className="nav-link">   <FontAwesomeIcon icon={faInstagram} className="socialMediaItemNavbar-instagram" /> </a></li>
                       <li> <a href="/" className="nav-link  ">    <FontAwesomeIcon icon={faTwitterSquare}  className="socialMediaItemNavbar-twitter"/> </a> </li>
                        <li className="nav-item"> 

                        {this.props.openForm ? 
                         
                        <div className="container  pr-0">
                            <div className="row">
                                <div className="col-6">
                                    <span className="nav-sign-in-out">Logout</span>
                                </div>
                                <div className="col-6">
                                    <FontAwesomeIcon className="nav-sign-in-out-icon" onClick={this.props.toggleOpenForm} icon={faSignOutAlt} />
                                </div>
                            </div>
                               
                        </div>:

                        <div className="container pr-0">
                            <div className="row">
                                <div className="col-6 pl-0">
                                    <span className="nav-sign-in-out">Login</span>
                                </div>
                                <div className="col-6 pl-0">
                                <FontAwesomeIcon icon={faSignInAlt} className="nav-sign-in-out-icon"  onClick={this.props.toggleOpenForm}/>
                                </div>
                            </div> 
                        </div>}
                        </li>
                    </ul>
                </div>
            </nav>
        )

    }
  
}

