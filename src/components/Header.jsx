import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";



const Header = () => (
    <div className="header">
            <div className="header-container">
                
                <Link to="/">
                 <div className="title-container">
                       
                        <img 
                            className="page-icon" 
                            src="https://i.postimg.cc/xC3xQL04/trailer-icon.png" 
                            alt="page icon"
                            />
                            <h1 className="title">Trailers</h1>

                    </div>
                </Link>
                    
                
            </div>
          
    </div>
    

);

export default Header;