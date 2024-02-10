import { Button, Typography } from '@mui/material';
import ContactUs from './components/ContactUs';
import './Contact.css';
import { useRef, useEffect, useState } from 'react';

function Contact() {
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
                    Contact Us
                </h1>
            </div>
            <div className='contact-page-form-div'>
                <ContactUs />
                <div className='contact-info-div'>
                    <Typography variant='h5'>Thank You!</Typography>
                    <Typography>We'd love to hear from you! Please feel free to reach out should you have any questions or comments.</Typography>
                    <Typography variant='h5'><br />Raminco Maintenance</Typography>
                    <Typography>ramincomaintenance@gmail.com<br />(438)-496-7497</Typography>
                    <Typography variant='h5'><br />Hours of Operation</Typography>
                    <Typography ref={submitForm}>Mon - Fri : 08:00am - 04:00pm<br />Sat - Sun : By Appointment</Typography>
                </div>
                {screenWidth < 480 && 
                    <Button
                        id='contact-req-btn'
                        onClick={() => submitForm.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        ↓ Submit Enquiries Below ↓
                    </Button>
                }
            </div>
        </div>
    );
}

export default Contact;