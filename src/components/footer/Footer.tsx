import React from 'react';
import './footer.css';
import TextPopUp from '../textPopUp/TextPopUp';
interface Props {

}
interface State {
    showPrivecy:boolean,
    showAboutUs:boolean
}
export default class Footer extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
           showPrivecy:false,
           showAboutUs:false
        }

    }
   

   /*  show:boolean,
    close:()=>void,
    title:string,
    text:string */
    render(){

        return (
            <div className="footerMainContainer container-fluid m-0 p-0">
                    <TextPopUp show={this.state.showAboutUs} 
                                close={()=>this.setState({showAboutUs:false})}
                                title ={"About Us"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                                 />
                    <TextPopUp show={this.state.showPrivecy} 
                                close={()=>this.setState({showPrivecy:false})}
                                title ={"Terms Privecy"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
                                 />
                
                <div className="page-footer    mb-0 border">
                   
                        
                    <div className="float-left align-items-center d-flex  flex-row flex-justify-content-center">
                        
                        <span className="p-1 text-secondary" onClick={()=>this.setState({showPrivecy:true})}> Terms Privecy</span>
        
                    </div>
                 
                    <div className="float-right  align-items-center d-flex  flex-row flex-justify-content-center">
                        <span className="p-1 text-success" onClick={()=>this.setState({showAboutUs:true})}>About Skilldar</span>
                        <a href="/" className="p-1 text-warning">Get started</a>
                    
                    </div>
                    
                </div>

            </div>
          
        )
    }
    }

