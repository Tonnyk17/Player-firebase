import React, { useContext } from "react";
import "../assets/styles/components/CarouselContainer.css";
import Carousel from "./Carousel"
import AppContext from "../context/AppContext";

const CarouselsContainer = () => {
    const{ video } = useContext(AppContext);
  
    
    return(
        <>
            <div className="carousel-container">
                {video.map(item => (
                    
                  <Carousel title={item.title} id={item.id} info={item.info} key={item.id}/>
                    
                ))

                }
            </div>
        </>
    );
}

export default CarouselsContainer;