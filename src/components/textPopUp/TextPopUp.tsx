import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
interface Props {
    show:boolean,
    close:()=>void,
    title:string,
    text:string
}

export default class TextPopUp extends React.Component<Props, {}>{
 
    renderText = () => {
        if(this.props.show){
        return <div className="termsPrivecyContainer container-fluid border p-0 m-0">
                  <FontAwesomeIcon  className="iconSize" icon={faWindowClose} onClick={this.props.close}/>
              
                <p className="text-light text-center text-justify">
               
        <span className="font-weight-bold text-light font-italic"> {this.props.title} </span>
                    {this.props.text}
                    </p> 

                </div>

        }
    }


    render(){

        return <div>
                {this.renderText()}
        </div>
        }
    }

