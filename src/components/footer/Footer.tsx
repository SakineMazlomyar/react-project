import React from 'react';
import './footer.css';
const Footer = ()=>{
    return (
        <div className="page-footer  footerContainer  container-fluid mb-0">

            <div className="float-left align-items-center d-flex  flex-row flex-justify-content-center">
                <span className="p-1 text-secondary">Terms</span>
                <span className="p-1 text-secondary">Privecy</span>

            </div>

            <div className="float-right  align-items-center d-flex  flex-row flex-justify-content-center">
                <span className="p-1 text-success">About Skilldar</span>
                <span className="p-1 text-warning">Get started</span>
             
            </div>
            
        </div>
    )
}

export default Footer;