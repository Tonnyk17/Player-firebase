import React, { Suspense, lazy } from "react";
const Carousel= lazy(() => import ("./Carousel"));
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
                    <Suspense fallback={<h1>Loading...</h1>}>
                         <Carousel title={item.title} id ={item.id}/>
                    </Suspense>
                ))

                }
            </div>
        </>
    );
}

export default CarouselsContainer;