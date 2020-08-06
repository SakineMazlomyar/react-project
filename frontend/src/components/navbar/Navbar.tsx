import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSignInAlt, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'

import './navbar.css';

interface Props {
    toggleOpenForm:()=>void,
    openForm: boolean,
    username:string,
    handleLogOutLogin:()=>void
}

interface State {

}
export default class Navbar extends React.Component<Props, State>{



    render(){
        return(
            <nav className="navbar fixed-top navbar-bg navbar-expand-sm">
                <a className="navbar-brand">
                    <FontAwesomeIcon icon={faHashtag} className="hashtag-bg"/>
                    <span className=" ml-2 title-b font-weight-bold">Browse Skills</span>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-menu">
                    <FontAwesomeIcon icon={faBars}  className="navbar-toggler-icon mr-1"/>
                </button>

                <div className="collapse navbar-collapse" id="nav-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"> <a href="!#" className="nav-link ">  <FontAwesomeIcon icon={faInstagram} className="iconSize"/> </a> </li>
                        <li className="nav-item"> <a href="!#" className="nav-link">    <FontAwesomeIcon icon={faTwitterSquare}  className="iconSize"/> </a> </li>
                        <li className="nav-item d-flex "> 
                    
                            {
                           this.props.username && this.props.username !== '' ?
                        <div className="d-flex flex-row justifiy-content-center ">
                            <FontAwesomeIcon icon={faSignOutAlt}   onClick={this.props.handleLogOutLogin} className="loginLogOut loginLogOutIconSize "/>
                            <span className="text-white">{`Welcome ${this.props.username}`}</span>
                        </div>:

                            this.props.openForm?<span className="loginLogOut"onClick={this.props.toggleOpenForm} >close</span>:
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="text-primary text-center ">Login</span>
                                <FontAwesomeIcon icon={faSignInAlt}   onClick={this.props.toggleOpenForm} className="loginLogOut loginLogOutIconSize "/>
                            </div>
                    
                            }
                        </li>
                    </ul>
                </div>
             
            </nav>
        )

    }
  
}

