import React from 'react';
import Clock from './clock'
import './head.css'
const Head =() =>{
    return(
        <nav className="sticky-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1" align="center">
                        <Clock/>
                    </div>
                </div>
            </div>
            

        </nav>
    )
    
}
export default Head;