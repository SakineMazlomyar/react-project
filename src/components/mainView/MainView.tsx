import React from 'react';
import './mainView.css';
import DetailView  from '../detailView/DetailView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getValueFromLocalstoreage} from '../helps/Helps';
import { faHashtag} from '@fortawesome/free-solid-svg-icons';
import FormSelect from '../form/formSelect';
interface Props {
    data:any,
    cities:string[],
    selectChoosenCity:(city:string)=>void,
    grouped:any
}

interface State {
    city:string
}

export default class MainView extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
           city:''

        }

    }

    renderJobs = ()=>{
        let sortedOrOrigin = this.props.grouped && this.props.grouped.length>0?this.props.grouped:this.props.data;
        if(sortedOrOrigin && sortedOrOrigin.length > 0) {

            return  sortedOrOrigin.map((item:any)=>{
               
                return <DetailView  key={Math.floor(Math.random()*1000)}
                logo_url={item.logo_url} 
                description={item.description.text} 
                headline={item.occupation.label}
                city={item.workplace_address.municipality}
                country={item.workplace_address.country}
                />
        
            })
        }
      
    }

    renderSearchRelatedTerms = () =>{
       let searches = getValueFromLocalstoreage('searches');
      
       if(searches && searches.length > 0){
           return searches.filter((t:string, i:number,self:string[])=>{
                return self.indexOf(t) === i;
           }).map((search:string, i:number)=>{
           
                return <li className="text-danger m-1" key={i}><FontAwesomeIcon icon={faHashtag} className="text-danger"/>{ search}</li>
           })
       }
    }


      

    handleChange = (event:any) => {
        this.setState({city:event},()=>{ this.props.selectChoosenCity(this.state.city)});
      }
    

    render(){
        
        return(
        <div className="d-flex mainContainer container-fluid justify-content-center  p-4  flex-md-row">
            
                <div className="searchRelatedContainer">
                    
                  <p className="text-secondary text-center">RELATED SEARCHES</p>
                    <ul className="itemContainer d-flex flex-column justify-content-center align-items-center" >
                        {this.renderSearchRelatedTerms()}
                    </ul>

                </div>
                <div className="listGroupContainer" > 
                
                 {  this.renderJobs()}
                             
                </div>
            
       
                <div className="sortContainer ">
                
                  <p className="text-secondary text-left">SORT RESULTS</p>
                    <FormSelect options={this.props.cities} 
                    onChange={this.handleChange} 
                    option={this.state.city}
                   
                    />
                </div>
            
        </div>
        )
    }

}