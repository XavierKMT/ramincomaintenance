import { Link } from "react-router-dom";
import img1 from './pics/whoweare.jpg';
import img2 from './pics/ourservices.jpg';
import img3 from './pics/ourteam.jpg';
import { Grid } from "@mui/material";


function About() {
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
                    About Raminco Maintenance 
                </h1>
            </div>
            <div style={{backgroundColor: 'white', padding: '10vh 15vw'}}>
                <Grid container spacing={5} style={{textAlign: 'center'}}>
                    <Grid item sm={4}>
                        <img src={img1} alt="image1" width={300} style={{borderRadius: '50%'}}/>
                        <h4>Who we are</h4>
                        <p>
                            Raminco Maintenance is a student run company based out of the West-Island of Montreal. We offer property maintenance services for the people who have projects that are too small for an expensive contractor, but still too big to do on their own.
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <img src={img2} alt="image2" width={300} style={{borderRadius: '50%'}}/>
                        <h4>Our Services</h4>
                        <p>
                            We offer a wide range of property maintenance projects, and we are committed to delivering high-quality work on time and within budget. For more infomation please refer to our <Link to='/'>home page</Link> or <Link to='/contact'>contact us</Link>.
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <img src={img3} alt="image3" width={300} style={{borderRadius: '50%'}}/>
                        <h4>Our Team</h4>
                        <p>
                            Our team consists of hard-working and skillful university students. With loads of pertinent experience we garantee high-quality work.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;