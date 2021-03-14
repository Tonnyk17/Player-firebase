import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Carouselitem.css";

const Carouselitem = ({Character}) => {
   
    

    return(
        <div>
             <div className="item">
                 
                 <img 
                     src={Character.image}
                     alt={Character.name} 
                     className="item-image"
                />
                <Link to="/watch">
                     <div className="item-info">
                         <div className="play-button">
                             <i className="fas fa-play-circle size"/>
                         </div>
                            <div className="item-text">
                                <h2 className="item-title">{Character.name}</h2>
                                 <p>{Character.status}</p>
                            </div>
                     </div> 
                </Link>
            </div>
        </div>
    );

}



export default Carouselitem;