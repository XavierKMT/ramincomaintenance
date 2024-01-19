import { Typography } from '@mui/material';
import ContactUs from './components/ContactUs';

function Contact() {
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
                    Contact Us
                </h1>
            </div>
            <div style={{backgroundColor: 'white', padding: '5vh 15vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1vw'}}>
                <ContactUs />
                <div style={{display: 'flex', flexDirection: 'column', gap: '1vh'}}>
                    <Typography variant='h5'>Thank You!</Typography>
                    <Typography>We'd love to hear from you! Please feel free to reach out should you have any questions, comments or concerns.</Typography>
                    <Typography variant='h5'><br />Raminco Maintenance</Typography>
                    <Typography>ramincomaintenance@gmail.com<br />(438)-496-7497</Typography>
                    <Typography variant='h5'><br />Hours of Operation</Typography>
                    <Typography>Mon - Fri : 09:00am - 05:00pm<br />Sat - Sun : By Appointment</Typography>
                </div>
            </div>
        </div>
    );
}

export default Contact;