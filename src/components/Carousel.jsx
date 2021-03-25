import React from "react";
import Carouselitem from "./Carouselitem";
import "../assets/styles/components/Carousel.css";
import rightArrow from "../assets/images/right.svg";
import leftArrow from "../assets/images/left.svg";




const Carousel = ({title,id,info}) => {
    
    

    const handleMoveRight = () => {
        const fila = document.getElementById(`${id}`);
            return  fila.scrollLeft += fila.offsetWidth
    }
    ;
    const handleMoveLeft = () => {

        const fila = document.getElementById(`${id}`);
        return fila.scrollLeft -= fila.offsetWidth
    };
    
   
    return(
        <>
            <h2 className="Carousel-title h3">{title}</h2>
            <div className="main-carousel-container">
                    <img 
                    src={leftArrow} 
                    alt="Left" 
                    className="left-button" 
                    onClick={handleMoveLeft}
                    />

                    <div className="Carousel-container" id={id}>
                        { info.map(item =>(
                           
                                <Carouselitem 
                                Character={item} 
                                key={item.id} 
                                />
                            
                        ))

                        }
                    </div>
                   <img 
                   src={rightArrow} 
                   alt="Right" 
                   className="right-button" 
                   onClick={handleMoveRight}
                   />
                   
            </div>
        </>
    );

}

export default Carousel;