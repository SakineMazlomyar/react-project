import React from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';

import Navbar from './components/navbar/Navbar';
import { register,login } from './components/actions/LoginAction';
import Form from './components/form/Form';
import {UserRegisterd, NewUser} from './components/actions/LoginAction';
import { SEARCH, getDefaultData } from './components/actions/SearchAction';
import MiniHeader from './components/miniHeader/MiniHeader';
import MainView from './components/mainView/MainView';
import Pagination from './components/pagination/Pagination';
import Footer from './components/footer/Footer';
import { setValueToLocalstoreage,  getValueFromLocalstoreage} from './components/helps/Helps'
interface LogedInUser { 
    username:string,
    email:string,
    isLoggedIn:boolean
}

interface State{
    signIn:boolean,
    signInForm: boolean,
    username:string,
    email:string,
    password:string,
    loggedInUser:LogedInUser,
    suggestions:any,
    currentPage:number,
    suggestionParPage:number,
    cities:string[],
    choosenCity:string,
    sorted: any

}    
interface Props {
    register:(user:NewUser)=>void,
    login:(user:UserRegisterd)=>{type:string, payload:{email:string, username:string}},
    SEARCH:(text:string)=>any,
    getDefaultData:()=>any
}
class App extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            signIn:false,
            signInForm: false,
            username:'',
            email:'',
            password:'',
            loggedInUser:{username:'', email:'', isLoggedIn:false},
            suggestions:'',
            currentPage:1,
            suggestionParPage:3,
            cities:[],
            choosenCity:'',
            sorted:[]

        }

    }
   
    signInSignOut = () => {
        this.setState({signIn:!this.state.signIn})
    }


    onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
     
        if(event.target.name === "email") {
         
            this.setState({email:event.target.value});
        }
        if(event.target.name === "password") {
            this.setState({password:event.target.value});
         
        }
        if(event.target.name === "username") {
         
            this.setState({username:event.target.value});

        }
        
        
    }


    handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
        let userLogedIn = this.props.login({email:this.state.email, password:this.state.password});
        console.log(userLogedIn)

        userLogedIn && userLogedIn.payload?
        this.setState({ 
            loggedInUser:{username:userLogedIn.payload.username, email:userLogedIn.payload.email,  isLoggedIn:true },
            signIn:false
        }):alert('Try Later');
        event.preventDefault();
        
    }

    handleLogOutLogin = () => {
        this.setState({loggedInUser:{username:'', email:'', isLoggedIn:false}})
    }
    handleSubmitRegister = (event: React.FormEvent<HTMLFormElement>) => {
     
        this.props.register({email:this.state.email, password:this.state.password, username:this.state.username})
    
        alert('Welcome New User');
        event.preventDefault();
    }


    toggleTitleSignInSignUp = () => {
        this.setState({signInForm:!this.state.signInForm})
    }
    renderSingInSignUp = () => {
        if(this.state.signIn){
            return <div className="form-content p-2">
            <button  type="button" className="btn btn-primary mb-4" onClick={this.toggleTitleSignInSignUp}> <span>{!this.state.signInForm ?"Sign In":"Sign Up"}</span></button>
                { this.state.signInForm? 
                    <Form fields={[
                        { label:"Username", type:"text", value:"", name:"username", placeholder:"username"},
                        {label:"Email", type:"email", value:"",  name:"email", placeholder:"email"},
                        {label:"Password", type:"password", name:"password", value:"",  placeholder:"password"}
                ]} onSubmit={this.handleSubmitRegister} onChange={this.onChange}/>:
                    <Form fields={[
    
                        {label:"Email", type:"email", name:"email", value:"",  placeholder:"email"},
                        {label:"Password", type:"password", name:"password", value:"",  placeholder:"password"}
                ]} onSubmit={this.handleSubmitLogin} onChange={this.onChange}/>}
                    
                </div>
        }
    }

    getSeachText = (text:string) => {
    let response = this.props.SEARCH(text);

        response.then((suggestions:any)=>{
            let c:string[] = []
            c.unshift('All Cities')
            suggestions.payload.map((obj:any)=> {
                if(obj.workplace_address.municipality !== "" &&obj.workplace_address.municipality !== null ){
                    c.push(obj.workplace_address.municipality)
                }
            })
            
            console.log(suggestions, 'hhh')
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
    handlePaginate = (num: number)=>{
        console.log(num)
        this.setState({currentPage:num}) }

    getCity = (city:string)=> { this.setState({choosenCity:city},()=>{this.sortSuggestions()})}

    sortSuggestions = () => {
        if(this.state.suggestions && this.state.suggestions.length > 0 ) {
            let origin = this.state.suggestions
            let sorted:any = []
         
            this.state.suggestions.map((item:any) => {
                
                
                if(item.workplace_address.municipality === this.state.choosenCity){
                    console.log(item.workplace_address.municipality , this.state.choosenCity)
                    sorted.push(item)
                }
            });
            this.setState({sorted:sorted})
        }
    }


    render(){
        console.log(this.state.suggestions)
        let finalData = this.state.sorted.length>0?this.state.sorted:this.state.suggestions;
        let indexOfLastSuggest = this.state.currentPage * this.state.suggestionParPage;
        let indexOfFirstSuggest = indexOfLastSuggest - this.state.suggestionParPage;
        let currentSuggestions = finalData.slice(indexOfFirstSuggest, indexOfLastSuggest)
      
     
         
        return( 
            <div>    
               <Navbar signInSignOut={this.signInSignOut} 
                        signIn={this.state.signIn} 
                        username={this.state.loggedInUser.isLoggedIn?this.state.loggedInUser.username:''}
                        handleLogOutLogin={this.handleLogOutLogin}
                        />  
                {this.renderSingInSignUp()}
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
                
            </div>
        )
    }

}


export default connect(null, { register,login, SEARCH, getDefaultData})(App)

