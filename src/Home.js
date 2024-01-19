import React, { forwardRef, useRef } from 'react';
import ServicesCard from './components/ServicesCard';
import ContactUs from './components/ContactUs';
import { Button } from '@mui/material';

const Home = forwardRef((props, ref) =>  {
    const contactForm = useRef(null);
    return (
        <div>
            <div style={{padding: '15vh 30vw 15vh 25vh', color: 'white', backgroundColor: 'rgba(100, 100, 100, 0.5'}}>
                    <h1
                        style={{
                            fontWeight: 'normal',
                            fontSize: 58,
                            width: 'fit-content',
                            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                        }}
                    >
                        For jobs that are too small for a contractor, but too big for you.
                    </h1>
                    <h2
                        style={{
                            fontWeight: 'normal',
                            width: 'fit-content',
                            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                        }}
                    >
                        A student-run maintenance company. Discover our services below.
                    </h2>
                    <Button 
                        onClick={() => contactForm.current.scrollIntoView({behavior: 'smooth'})}
                        sx={{
                            width: 'fit-content',
                            padding: '0.75rem 1rem',
                            marginTop: '1vh',
                            color: 'black',
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                            fontSize: 'medium',
                            ":hover": {
                                backgroundColor: '#e6e6e6',
                            }
                        }}
                    >
                        Make a Request
                    </Button>
                </div>
            <div style={{backgroundColor: '#0d233c', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 50, color: 'white'}}>
                <h1 ref={ref}>
                    Services We Offer
                </h1>
                <ServicesCard />
            </div>
            <div style={{backgroundColor: '#f6f6f6', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 50}}>
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