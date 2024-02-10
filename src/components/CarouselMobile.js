import { useState } from "react";
import leftArrow from '../pics/left.png';
import rightArrow from '../pics/right.png';
import './CarouselMobile.css';

export default function CarouselMobile({ data }) {

    const [index, setIndex] = useState(2);

    const handleLeft = () => {
        index === 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1);
    }

    const handleRight = () => {
        index === data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
    }

    return (
        <div className='carousel-m-div'>
            <img src={data[index].img} alt="pic" />
            <div className='carousel-m-controls'>
                <img src={leftArrow} alt="left arrow" onClick={handleLeft} />
                <div className='carousel-m-title'>
                    <p>{data[index].title} </p>
                </div>
                <img src={rightArrow} alt="right arrow" onClick={handleRight} />
            </div>
        </div>
    );
}