import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight } from '@fortawesome/free-solid-svg-icons';
interface Props {
    suggestionsParPage:number,
    totalSuggesttions:any,
    paginate:(page:{number:number,show:boolean})=> void,
    currentPage:number
}

interface State {
    
}
export default class Pagination extends React.Component<Props,State>{

    renderPageNumbers = ()=>{
        if(this.props.suggestionsParPage && this.props.totalSuggesttions.length>0) {
            let pages = []
            for(let i = 1; i<= Math.ceil(this.props.totalSuggesttions.length/this.props.suggestionsParPage); i++){
                pages.push({number:i, show:false})
            }
            
            
            return pages.map((page:{number:number, show:boolean})=>{
                if(this.props.currentPage !== page.number) {
                return <li key={page.number} className="p-2 font-weight-bold pageIco"> 
                            <span onClick={()=> { page.show=true;
                                this.props.paginate(page);}}>
                               
                                {page.number}
                            </span>
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
                    <ul className="d-flex pageItems text-secondary align-items-center">
                        {this.renderPageNumbers()}
                        <FontAwesomeIcon icon={faAngleRight} className="text-secondary pageIco font-weight-bold"/>
                    </ul>
                </nav>
            </div>
           
        )
    }

}