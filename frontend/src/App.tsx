import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';

import Navbar from './components/navbar/Navbar';
import { SEARCH, getDefaultData } from './components/actions/SearchAction';
import MiniHeader from './components/miniHeader/MiniHeader';
import MainView from './components/mainView/MainView';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';
import { setValueToLocalstoreage,  getValueFromLocalstoreage} from './components/helps/Helps';
interface State{
   openForm:boolean,
    suggestions:any,
    currentPage:number,
    suggestionParPage:number,
    cities:string[],
    choosenCity:string,
    sorted: any

}    
interface Props {
   
    SEARCH:(text:string)=>any,
    getDefaultData:()=>any
}
class App extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
           openForm:false,
            suggestions:'',
            currentPage:1,
            suggestionParPage:3,
            cities:[],
            choosenCity:'',
            sorted:[]

        }

    }
   
    toggleOpenForm = () => {
        this.setState({openForm:!this.state.openForm})
    }

    getSeachText = (text:string) => {

    let response = this.props.SEARCH(text);

        response.then((suggestions:any)=>{
            let c:string[] = []
            c.unshift('All Cities')
            suggestions.payload.map((obj:any)=> {
                if(obj.workplace_address.municipality !== "" && obj.workplace_address.municipality !== null ){
                    c.push(obj.workplace_address.municipality)
                }
            })
            
            this.setState({suggestions:suggestions.payload, cities:c},()=>{

                let searches:any =  getValueFromLocalstoreage('searches');
                if(searches !== null ) {
                    searches.push(text)
                    setValueToLocalstoreage('searches', searches);
                  
                }else {
                    setValueToLocalstoreage('searches', []);

                }
            })
           
        });

    }
     
    componentDidMount(){ this.getDefaultData()}

    getDefaultData = () =>{
        this.props.getDefaultData().then((data:any)=>{
            let c:string[] = []
            c.unshift('All Cities')
            data.payload.map((obj:any)=> {

                if(obj.workplace_address.municipality !== "" &&obj.workplace_address.municipality !== null ){
                    c.push(obj.workplace_address.municipality)
                }

            })
           
            this.setState({suggestions:data.payload, cities:c})
        }
        
        
        );
    }
    handlePaginate = (num: number)=> { this.setState({currentPage:num}) };

    getCity = (city:string)=> { this.setState({choosenCity:city},()=>{this.sortSuggestions()})};

    sortSuggestions = () => {
        if(this.state.suggestions && this.state.suggestions.length > 0 ) {
        
            let sorted:any = []
         
            this.state.suggestions.map((item:any) => {
                
                
                if(item.workplace_address.municipality === this.state.choosenCity){
                   
                    sorted.push(item)
                }
            });
            this.setState({sorted:sorted})
        }
    }
         

    render(){
       
        let finalData = this.state.sorted.length> 0?this.state.sorted:this.state.suggestions;
        let indexOfLastSuggest = this.state.currentPage * this.state.suggestionParPage;
        let indexOfFirstSuggest = indexOfLastSuggest - this.state.suggestionParPage;
        let currentSuggestions = finalData.slice(indexOfFirstSuggest, indexOfLastSuggest)
      
    
         
        return( 
            <div className="appContainer"> 
               
               <Navbar toggleOpenForm={this.toggleOpenForm} 
                openForm={this.state.openForm} 
                
                        />  
                <Header  getSeachText={this.getSeachText}/>
                <MiniHeader />
                <MainView 
                data={currentSuggestions} 
                cities={this.state.cities.filter((c,i,self) => 
                {return self.indexOf(c)=== i})} selectChoosenCity={this.getCity}
                grouped={this.state.sorted}
                />
                <Pagination 
                suggestionsParPage={this.state.suggestionParPage}
                totalSuggesttions = {finalData}
                paginate = {this.handlePaginate}
            
                currentPage = {this.state.currentPage}
                />
                <Footer/>
          <h1>hhhhhhhhhhhhhhhh</h1>
            </div>
        )
    }

}


export default connect(null, {SEARCH, getDefaultData})(App)

