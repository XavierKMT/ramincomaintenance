import Carousel from "./components/Carousel";
import { data } from "./components/data";


function Projects() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{padding: '8vh 20vw', backgroundColor: 'rgba(100, 100, 100, 0.5)', textAlign: 'center'}}>
                <h1
                    style={{
                        fontWeight: 'normal',
                        fontSize: 58,
                        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                        color: 'white',
                        margin: 'auto'
                    }}
                >
                    Previous Projects
                </h1>
            </div>
            <div style={{backgroundColor: 'white', padding: '5vh 0'}}>
                <Carousel data={data}/>
            </div>
        </div>
    );
}

export default Projects;