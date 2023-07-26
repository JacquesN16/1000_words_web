import React, {useEffect, useState} from "react";
import {ArrowForward} from "../icons/ForwardArrow.tsx";
import {ArrowBack} from "../icons/BackArrow.tsx";
import './carousel.scss'

interface CarouselProps {
    items: string[];
    setCurrentWord: (val: string)=> void
}

const Carousel: React.FC<CarouselProps> = ({items, setCurrentWord}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    useEffect(() => {
        if(items.length >0 ) {
            setCurrentWord(items[currentIndex])
        }
    },[currentIndex])

    return (<>
            <div className="carousel-container">
                <div className="carousel-controls">
                    <button onClick={handlePrevious} className="custom-arrow">
                        <ArrowBack/>
                    </button>
                    <span className="carousel-text-container">{items[currentIndex]}</span>
                    <button onClick={handleNext} className="custom-arrow">
                        <ArrowForward/>
                    </button>
                </div>
                <div className="carousel-indice-container center-flex">
                    <span>{(currentIndex + 1) + '/' + items.length}</span>
                </div>

            </div>

        </>
    );
};

export default Carousel;