import React from "react";
import "../assets/styles/containers/NotFound.css"


const NotFound = () => (
    <div className="Notfound">
        <div className="text-container">
          <img src="https://i.postimg.cc/VNy52t85/notfound.png" alt="cat image" className="notfound-image"/>
                <h1 className="title main-title">404</h1>
                <p>Page not found</p>
        </div>
    </div>
);

export default NotFound;