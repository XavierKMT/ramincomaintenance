import { Button, Typography } from '@mui/material';
import ContactUs from './components/ContactUs';
import './Contact.css';
import { useRef, useEffect, useState } from 'react';
import text from './components/TextLanguage.json';

function Contact() {
    const langText = text[text.lang];
    const submitForm = useRef(null);

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
        <div className='contact-div'>
            <div className='contact-header'>
                <h1 className='contact-header-title'>
                    {langText.contacttitle}
                </h1>
            </div>
            <div className='contact-page-form-div'>
                <ContactUs />
                <div className='contact-info-div'>
                    <Typography variant='h5'>{langText.thankyou}</Typography>
                    <Typography>{langText.hearfromyou}</Typography>
                    <Typography variant='h5'><br />{langText.ramincomaintenance}</Typography>
                    <Typography>{langText.email}<br />{langText.phone}</Typography>
                    <Typography variant='h5'><br />{langText.hourstitle}</Typography>
                    <Typography ref={submitForm}>{langText.hoursmonfri}<br />{langText.hourssatsun}</Typography>
                </div>
                {screenWidth < 480 && 
                    <Button
                        id='contact-req-btn'
                        onClick={() => submitForm.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        {langText.enquiriesbelow}
                    </Button>
                }
            </div>
        </div>
    );
}

export default Contact;