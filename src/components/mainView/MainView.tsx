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
    selectChoosenCity:(city:string)=>void
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

    renderData = ()=>{
        if(this.props.data && this.props.data.length > 0) {

            return this.props.data.map((item:any)=>{
    
                return <DetailView 
                logo_url={item.logo_url} 
                description={item.description.text} 
                headline={item.occupation.label}
                city={item.workplace_address.city}
                country={item.workplace_address.country}
                />
        
            })
        }
      
    }

    renderSearchRelatedTerms = () =>{
       let searches = getValueFromLocalstoreage('searches');
      
       if(searches && searches.length > 0){
           return searches.map((search:string, i:number)=>{
                return <li className="text-danger" key={i}><FontAwesomeIcon icon={faHashtag} className="text-danger"/>{search}</li>
           })
       }
    }


    renderCitiesForSort = () => {
        if(this.props.cities && this.props.cities.length > 0) {
            return this.props.cities.map((city:string) => {
                return <option value={city} key={city}>{city}</option>
            })
        }
    }

    handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({city: event.target.value});
      }
    
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.city)
        this.props.selectChoosenCity(this.state.city)
      }


    render(){
       
        return(
        <div className="container d-flex flex-md-row">
             <div>
                <h6 className="text-secondary">SEARCHED RELATED</h6>
                <ul>
                    {this.renderSearchRelatedTerms()}
                </ul>

            </div>
            <div className="list-group "> 
                    {this.renderData()}
                    
            </div>
            <div>
                <h6 className="text-secondary">SEARCHED RELATED</h6>
            </div>

            <div>
            <FormSelect options={this.props.cities} 
            onSubmit={this.handleSubmit} 
            onChange={this.handleChange} 
            option={this.state.city}
            label ={'SORT RESULTS'}
            />
            <h1>{this.state.city}</h1>
            </div>
        </div>
        )
    }

}