import React, { Suspense, lazy, useContext } from "react";
const Carousel= lazy(() => import ("./Carousel"));
import "../assets/styles/components/CarouselContainer.css";

import AppContext from "../context/AppContext";

const CarouselsContainer = () => {
    const{ video } = useContext(AppContext);
  
    return(
        <>
            <div className="carousel-container">
                {video.map(item => (
                    <Suspense fallback={<h1>Loading...</h1>}>
                         <Carousel title={item.title} id={item.id} info={item.info} key={item.id}/>
                    </Suspense>
                ))

                }
            </div>
        </>
    );
}

export default CarouselsContainer;