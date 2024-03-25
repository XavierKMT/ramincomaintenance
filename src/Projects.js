import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import CarouselMobile from "./components/CarouselMobile";
import { data } from "./components/data";
import './Projects.css';
import text from './components/TextLanguage.json';


function Projects() {
    const langText = text[text.lang];

    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    useEffect(()=>{
        const handler = () => {
            setScreenWidth(window.screen.width);
        };
        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return (
        <div className='projects-div'>
            <div className='projects-header'>
                <h1 className='projects-title'>
                    {langText.projecttitle}
                </h1>
            </div>
            <div style={{backgroundColor: 'white', padding: '5vh 0'}}>
                {screenWidth > 1024 ? <Carousel data={data}/> : <CarouselMobile data={data}/>}                
            </div>
        </div>
    );
}

export default Projects;