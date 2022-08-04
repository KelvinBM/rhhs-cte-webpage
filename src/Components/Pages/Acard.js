import React from 'react';
import  './../../css/Bootstrap.css';


function Acard(props) {
    return( 
            
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://th.bing.com/th/id/OIP.LE92Ux3wWKnctJJqOenzmwHaD4?pid=ImgDet&rs=1" alt="Scratch"/>
                <div id="Acard-body" className="card-body">
                <h5 id="Acard-h5" className="card-title">{props.title}</h5>
                <p id="Acard-p" className="card-text">{props.description}</p>
                 <a id="Acard-a" href={props.projectlink} className="btn btn-primary">Click Here!</a>
                 </div>
            </div>
        );
    };          
            


export default Acard; 