import { useState } from "react";
import leftArrow from '../pics/left.png';
import rightArrow from '../pics/right.png';

export default function Carousel({ data }) {

    const [index, setIndex] = useState(0);

    const handleLeft = () => {
        index === 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1);
    }

    const handleRight = () => {
        index === data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div onClick={handleLeft} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 0 10px 1px lightgray', borderRadius: 10, backgroundColor: 'white'}}>
                <img src={leftArrow} alt="left arrow" />
            </div>
            <div style={{textAlign: 'center'}}>
                <img src={data[index].img} alt="pic" width={500} />
                <p>
                    {data[index].title}
                </p>
            </div>
            <div onClick={handleRight} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 0 10px 1px lightgray', borderRadius: 10, backgroundColor: 'white'}}>
                <img src={rightArrow} alt="right arrow" />
            </div>
        </div>
    );
}