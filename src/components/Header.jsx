import React from "react";
import "../assets/styles/components/Header.css";



const Header = () => (
    <div className="header">
            <div className="container header-container">
                <div className="row">
                    <div className="col-6 col-md-2 title-container">
                        

                            <img 
                            className="page-icon" 
                            src="https://i.postimg.cc/xC3xQL04/trailer-icon.png" 
                            alt="page icon"
                            />
                            <h1 className="title">Trailers</h1>

                      

                    </div>
                </div>
            </div>
          
    </div>
    

);

export default Header;