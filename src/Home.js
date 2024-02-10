import React, { forwardRef, useRef } from 'react';
import ServicesCard from './components/ServicesCard';
import ContactUs from './components/ContactUs';
import { Button } from '@mui/material';
import './Home.css';

const Home = forwardRef((props, ref) =>  {
    const contactForm = useRef(null);
    return (
        <div>
            <div className='tagline-div'>
                <h1 className='tagline'>
                    For jobs that are too small for a contractor, but too big for you.
                </h1>
                <h2 className='sub-tagline'>
                    A West-Island student-run maintenance company. Discover our services below.
                </h2>
                <Button 
                    id='req-btn'
                    onClick={() => contactForm.current.scrollIntoView({behavior: 'smooth'})}
                >
                    Make a Request
                </Button>
            </div>
            <div className='services-div'>
                <h1 ref={ref}>
                    Services We Offer
                </h1>
                <ServicesCard />
            </div>
            <div className='form-div'>
                <h1>
                    Have another job in mind?
                </h1>
                <h2 ref={contactForm}>
                    Contact us with your enquiries!
                </h2>
                <ContactUs />
            </div>
        </div>
    );
});

export default Home;