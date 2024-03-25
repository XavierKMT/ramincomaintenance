import React, { forwardRef, useRef } from 'react';
import ServicesCard from './components/ServicesCard';
import ContactUs from './components/ContactUs';
import { Button } from '@mui/material';
import './Home.css';
import textData from './components/TextLanguage.json';

const Home = forwardRef((props, ref) =>  {
    const contactForm = useRef(null);
    const languageText = textData[textData.lang];
    return (
        <div>
            <div className='tagline-div'>
                <h1 className='tagline' onClick={() => console.log(textData)}>
                    {languageText.hometagline}
                </h1>
                <h2 className='sub-tagline'>
                    {languageText.homesubtagline}
                </h2>
                <Button 
                    id='req-btn'
                    onClick={() => contactForm.current.scrollIntoView({behavior: 'smooth'})}
                >
                    {languageText.makereq}
                </Button>
            </div>
            <div className='services-div'>
                <h1 ref={ref}>
                    {languageText.services}
                </h1>
                <ServicesCard />
            </div>
            <div className='form-div'>
                <h1>
                    {languageText.anotherjob}
                </h1>
                <h2 ref={contactForm}>
                    {languageText.contactenquiries}
                </h2>
                <ContactUs />
            </div>
        </div>
    );
});

export default Home;