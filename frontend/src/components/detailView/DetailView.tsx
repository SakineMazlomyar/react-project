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
            <div className="row listGroupItem m-1 mb-4 mt-4 p-0"> 
  
              <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 p-0 m-0 row">

                  <div className="col-2">
                    <img className="imgDetail" data-test='detail-view-img' src={img } alt={this.props.headline}/> 
                  </div>
                  <div className="col-7"> 
                      <span className="font-weight-bold" data-test='detail-view-title'>LOREM IPSUM SIT AMET</span>
                      <p className="text-light text-left ac-text" data-test="detail-view-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor. I’ve worked with many professional film teams..</p>
  
                  </div>
                  <div className="col-3 mt-3">
                    <img className="stars" src={stars }/>  
                    <span> 657</span>
                  </div>
              
              </div>         
              <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12 m-0 p-0 colItemTwo">
                  <div className="row p-1">
                        <div className="col-lg-2 col-xl-2 col-md-12 col-sm-12 col-xs-12"></div>
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 d-flex  flex-row  alig-items-center">
                            <span className="font-weight-bold ml-1"> <FontAwesomeIcon className="hashtag-item-job" icon={faHashtag} />   {this.props.headline}</span>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-12 cl-sm-12 col-xs-12">
                            <FontAwesomeIcon icon={faHome} />   
                            <span data-test="detail-view-city">   { this.props.city}, </span>
                            <span data-test="detail-view-country">{this.props.country}</span>
                        </div>
                  </div>
              </div>
  
            </div>
          

        </div>
        )
    }

}