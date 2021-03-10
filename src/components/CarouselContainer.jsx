import React from "react";
import Carousel from "./Carousel";
import "../assets/styles/components/CarouselContainer.css";

const CarouselsContainer = () => {
    const titles = [
        {
        "id":1,   
        "title" : "Games",
        },
        {
        "id":2,    
        "title": "Series",
        },
        {
            "id":3,
            "title": "Movies"
        } 
         ]
    return(
        <>
            <div className="carousel-container">
                {titles.map(item => (
                    <Carousel title={item.title} id={item.id}/>
                ))

                }
            </div>
        </>
    );
}

export default CarouselsContainer;