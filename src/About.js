import img1 from './pics/whoweare.jpg';
import img2 from './pics/ourservices.jpg';
import img3 from './pics/ourteamforreal.jpg';
import { Grid } from "@mui/material";
import './About.css';
import text from './components/TextLanguage.json';


function About() {
    const langText = text[text.lang];
    return (
        <div className='about-div'>
            <div className='about-header'>
                <h1 className='about-header-title'>
                    {langText.abouttitle}
                </h1>
            </div>
            <div className='about-pics-div'>
                <Grid container spacing={5} style={{textAlign: 'center'}}>
                    <Grid item sm={4}>
                        <img src={img1} alt="image1" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
                        <h4>{langText.whoweare}</h4>
                        <p>
                            {langText.whowearedesc}
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <img src={img2} alt="image2" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
                        <h4>{langText.ourservices}</h4>
                        <p dangerouslySetInnerHTML={{__html: langText.ourservicesdesc}} />
                    </Grid>
                    <Grid item sm={4}>
                        <img src={img3} alt="image3" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
                        <h4>{langText.ourteam}</h4>
                        <p>
                            {langText.ourteamdesc}
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;