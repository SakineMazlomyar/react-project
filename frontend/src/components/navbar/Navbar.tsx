import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSignInAlt, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'
import './navbar.css';

interface Props {
    toggleOpenForm:()=>void,
    openForm: boolean,
  
}
interface State {
    changeHeight:boolean
}
export default class Navbar extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
          changeHeight:false

        }

    }
    handleChangeHeight = ()=>{ this.setState({changeHeight:!this.state.changeHeight})}
    render(){
        return(
            <nav id={this.state.changeHeight?"heightNavbarCollaps":"heightNavbarNormal"} className="navbar fixed-top containerNavbar navbar-expand-sm ">
                <a className="navbar-brand" href="/">
                    <FontAwesomeIcon icon={faHashtag} className="hashtagNavbar"/>
                    <span className=" ml-2 titleNavbar font-weight-bold">Browse Skills</span>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-menu">
                    <FontAwesomeIcon icon={faBars}  className="navbar-toggler-icon mr-1" onClick={this.handleChangeHeight}/>
                </button>

                <div className="collapse navbar-collapse" id="nav-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item test"> <a href="/" className="nav-link pr-0">   <FontAwesomeIcon icon={faInstagram} className="socialMediaItemNavbar" /> </a> </li>
                        <li className="nav-item"> <a href="/" className="nav-link  ">    <FontAwesomeIcon icon={faTwitterSquare}  className="socialMediaItemNavbar"/> </a> </li>
                        <li className="nav-item d-flex  ml-2"> 

                        {this.props.openForm ? 

                        <div className="d-flex justify-content-center align-items-center">
                            <span className="text-center loginLogOut ">Logout</span>
                            <FontAwesomeIcon icon={faSignOutAlt}   onClick={this.props.toggleOpenForm} className="loginLogOut loginLogOutIconSize "/>
                        </div>:

                        <div className="d-flex justify-content-center align-items-center">
                            <span className="text-center loginLogOut ">Login</span>
                            <FontAwesomeIcon icon={faSignInAlt}   onClick={this.props.toggleOpenForm} className="loginLogOut loginLogOutIconSize "/>
                        </div>}
                        </li>
                    </ul>
                </div>
             
            </nav>
        )

    }
  
}

