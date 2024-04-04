import { useState } from "react";
import leftArrow from '../pics/left.png';
import rightArrow from '../pics/right.png';
import './Carousel.css';

export default function Carousel({ data }) {

    const [index, setIndex] = useState(0);

    const handleLeft = () => {
        index === 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1);
    }

    const handleRight = () => {
        index === data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
    }

    return (
        <div className='carousel-div'>
            <div onClick={handleLeft} className='arrow-div'>
                <img src={leftArrow} alt="left arrow" />
            </div>
            <div style={{textAlign: 'center'}}>
                <img src={data[index].img} alt="pic" className='project-img' />
                <p>
                    {data[index].title}
                </p>
            </div>
            <div onClick={handleRight} className='arrow-div'>
                <img src={rightArrow} alt="right arrow" />
            </div>
        </div>
    );
}