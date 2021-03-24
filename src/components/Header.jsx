import React from "react";
import { NavLink,Link } from "react-router-dom";
import "../assets/styles/components/Header.css";



const Header = () => (
    <div className="header">
            <div className="header-container">
                
                
                 <div className="title-container">
                     <Link to="/" className="go-home">
                        <img 
                            className="page-icon" 
                            src="https://i.postimg.cc/xC3xQL04/trailer-icon.png" 
                            alt="page icon"
                            />
                            <h1 className="title">Trailers</h1>
                            </Link>
                    
                    </div>
                
                
            </div>
          
    </div>
    

);

export default Header;