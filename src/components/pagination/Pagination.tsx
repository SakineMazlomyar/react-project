import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight } from '@fortawesome/free-solid-svg-icons';
interface Props {
    suggestionsParPage:number,
    totalSuggesttions:any,
    paginate:(page:number)=> void,
    currentPage:number
}

interface State {
    
}
export default class Pagination extends React.Component<Props,State>{

    renderPageNumbers = ()=>{
        if(this.props.suggestionsParPage && this.props.totalSuggesttions.length>0) {
            let pages = []
            for(let i = 1; i<= Math.ceil(this.props.totalSuggesttions.length/this.props.suggestionsParPage); i++){
                pages.push(i)
            }
            
            console.log(this.props.currentPage)
            return pages.map((page:number)=>{
                if(this.props.currentPage !== page) {
                    
                return <li className="page-item  pageItem">
                            <a href="#" className="page-link bg-dark text-secondary pageLink"  onClick={()=> this.props.paginate(page)}> {page} </a>
                      
                </li>
                }
            })
         
        }
    }
    render(){  
        return(
            <div className="d-flex justify-content-end  containerPaginate"> 
               
                <div className="p-2">
                    <span className="text-secondary font-weight-bold pageIco p-1"> PAGE </span>
                    <FontAwesomeIcon icon={faAngleRight} className="text-secondary pageIco font-weight-bold "/>
                    <span className="text-warning font-weight-bold p-1">{this.props.currentPage}</span>
                </div>
                 <nav>  
                    <ul className="d-flex pageItems align-items-center pr-1">
                        {this.renderPageNumbers()}
                        <FontAwesomeIcon icon={faAngleRight} className="text-secondary pageIco font-weight-bold"/>
                    </ul>
                </nav>
            </div>
           
        )
    }

}