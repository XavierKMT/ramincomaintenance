import whoweareimg from './pics/Who we are logo.jpg';
import ourservicesimg from './pics/Our services logo.jpg';
import ourteamimg from './pics/Our team logo.jpg';
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
                        <img src={whoweareimg} alt="image1" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
                        <h4>{langText.whoweare}</h4>
                        <p>
                            {langText.whowearedesc}
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <img src={ourservicesimg} alt="image2" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
                        <h4>{langText.ourservices}</h4>
                        <p dangerouslySetInnerHTML={{__html: langText.ourservicesdesc}} />
                    </Grid>
                    <Grid item sm={4}>
                        <img src={ourteamimg} alt="image3" style={{borderRadius: '50%', maxWidth: '300px', width: '100%'}}/>
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