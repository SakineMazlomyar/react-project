import React from 'react';
import './detailView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faSquare, faHome } from '@fortawesome/free-solid-svg-icons';
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
            <div className="col-md-6 bg-dark">
                <img className="float-left" src={this.props.logo_url} alt={this.props.headline}/>

            </div >
            <div className="col-md-6 bg-dark">
                <FontAwesomeIcon icon={faSquare} className="hashtag-bg"/>
                <h4 className=" font-weight-bold">Lorem ipsum dolor sit amet</h4>
                <p className="text-light text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor. I’ve worked with many professional film teams.</p>


            </div>
            <div className="align-items-center d-flex  flex-row flex-justify-content-end">
                <div>
                    <FontAwesomeIcon icon={faHashtag} className="hashtag-bg"/>
                    <span className="font-weight-bold">{this.props.headline}</span>
                </div>
                <div>
                <FontAwesomeIcon icon={faHome} />
                <span className="font-weight-bold">{this.props.city}</span>
                <span className="font-weight-bold">{this.props.country}</span>
                </div>
             

            </div>

         
          </div>
        )
    }

}