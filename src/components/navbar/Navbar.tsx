import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'

import './navbar.css';

interface Props {
    signInSignOut:()=>void,
    signIn: boolean,
    username:string
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
                    <span className="navbar-toggler-icon">click here</span>
                </button>
                <div className="collapse navbar-collapse" id="nav-menu">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">{this.props.username !== ''?`Welcome ${this.props.username}`:''}</li>
                        <li className="nav-item"> <a href="/" className="nav-link ">  <FontAwesomeIcon icon={faInstagram} className="iconSize"/> </a> </li>
                        <li className="nav-item"> <a href="/" className="nav-link">    <FontAwesomeIcon icon={faTwitterSquare}  className="iconSize"/> </a> </li>
                        <li className="nav-item logInIcon"> 
                        {this.props.signIn?<span className="loginLogOut" >close</span>:<span className="loginLogOut">Login</span>}
                        <FontAwesomeIcon icon={faSignInAlt}   onClick={this.props.signInSignOut} className="loginLogOut loginLogOutIconSize "/></li>
    
                    </ul>
                </div>
             
            </nav>
        )

    }
  
}

