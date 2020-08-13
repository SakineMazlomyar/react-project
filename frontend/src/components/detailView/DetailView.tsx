import React from 'react';
import './detailView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faHome } from '@fortawesome/free-solid-svg-icons';
import img from '../../job.jpg';
import stars from '../../stars.png';   
interface Props {
    logo_url:string,
    description:string,
    headline:string,
    city:string,
    country:string
}


export default class DetailView extends React.Component<Props,{}>{

    render(){
        return(
        <div className="container">
            <div className="row listGroupItem m-1 mb-4 mt-4"> 
  
              <div className="col-md-2 imgAndDescriptionBg m-0 ">
                  <img className="imgDetail" src={img } alt={this.props.headline}/>
              
              </div >         
              <div className=" col-md-10 imgAndDescriptionBg d-flex  flex-row justify-content-center align-items-center descriptionContainer">
                  <div> 
                      <span className="font-weight-bold">LOREM IPSUM SIT AMET</span>
                      <span className="float-right "> <img className="stars p-3" src={stars }/>       657</span>
                      <p className="text-light text-left ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor. I’ve worked with many professional film teams..</p>
  
                  </div>
                 
              </div>
              <div className="container p-3">
                  <div className="row">
                  <div className="col-2"></div>
                      <div className="col-6 d-flex  flex-row  alig-items-center">
                         <span className="font-weight-bold"> <FontAwesomeIcon className="hashtag-bg-nav" icon={faHashtag} />   {this.props.headline}</span>
                      </div>
                      <div className="col-md-4">
                      <FontAwesomeIcon icon={faHome} />   
                      <span>   { this.props.city}, </span>
                      <span >{this.props.country}</span>
                      </div>
  
                  </div>
               
  
              </div>
  
           
            </div>
          

        </div>
        )
    }

}