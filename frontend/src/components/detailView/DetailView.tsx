import React from 'react';
import './detailView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faHome } from '@fortawesome/free-solid-svg-icons';
import img from '../../job.jpg'
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
          <div className="row listGroupItem m-1 "> 
            <div className="col-md-2 bg-dark m-0 ">
                <img className="imgDetail" src={img } alt={this.props.headline}/>
                <h1></h1>
            </div >         
            <div className="col-md-10 bg-dark m-0 p-0  d-flex  flex-row justify-content-center align-items-center">
                <div>
                    <span className="font-weight-bold">Lorem ipsum dolor sit amet</span>
                    <p className="text-light text-left ac-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor. I’ve worked with many professional film teams.</p>

                </div>
               


            </div>
            <div className="align-items-center d-flex  flex-row justify-content-md-around titleLocation">
                <div className="ml-1">
                    <FontAwesomeIcon icon={faHashtag} className="hashtag-bg"/>
                    <span className="font-weight-bold">   {this.props.headline}</span>
                </div>
                <div>
                <FontAwesomeIcon icon={faHome} />   
                <span>   { this.props.city}, </span>
                <span >{this.props.country}</span>
                </div>
             

            </div>

         
          </div>
        )
    }

}