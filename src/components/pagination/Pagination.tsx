import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './pagination.css'
interface Props {
    suggestionsParPage:number,
    totalSuggesttions:any,
    paginate:(page:number)=> void
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
            
    
            return pages.map((page:any)=>{
           
                return <li key={page} className="page-item"> 
                            <a href="!#" className="page-link" onClick={()=> this.props.paginate(page)}>
                                {page}
                            </a>
                        </li>
            })

        }
    }
    render(){
        return(
            <nav> s
                <ul className="pagination">
                    {this.renderPageNumbers()}
                </ul>
            </nav>
        )
    }

}