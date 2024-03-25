import { useState } from "react";
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { Button } from "@mui/material";
import text from './TextLanguage.json';


function ContactUs() {
    const langText = text[text.lang];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        
        e.preventDefault();

        let tempError = {};
        if (name === '') {
            tempError.name = 'name is required';
            console.log('name error');
        }
        if (email === '') {
            tempError.email = 'email is required';
            console.log('email error');
        }
        if (phone === '') {
            tempError.phone = 'phone is required';
            console.log('pphone error');
        }
        if (address === '') {
            tempError.address = 'address is required';
            console.log('address error');
        }
        if (message === '') {
            tempError.message = 'message is required';
            console.log('msg error');
        }

        if (Object.keys(tempError).length > 0) {
            setError(tempError);
        }
        else {
            setError({});
            sendEmail();
        }


        
    };

    function sendEmail() {
        // alert('Email Sent!\nWe will get back to you as soon as possible.');
        // setName('');
        // setEmail('');
        // setPhone('');
        // setAddress('');
        // setMessage('');
        const serviceID = 'service_u2u0yhd';
        const templateID = 'template_3rd0efa';
        const publicKey = 'n9wNwkYgj7Kr4hZMs';

        const templateParams = {
            to_name: 'Raminco Man',
            from_name: name,
            from_email: email,
            from_phone: phone,
            from_address: address,
            message: message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('email sent', response);
                alert('Email Sent!\nWe will get back to you as soon as possible.');
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setMessage('');
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <div className='contact-form-div'>
            <form className='form-inputs' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder={langText.placeholdername}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error.name && <p className='error-msg'>{langText.errname}</p>}
                <input
                    type='text'
                    placeholder={langText.placeholderemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder={langText.placeholderphone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {error.email && error.phone && <p className='error-msg'>{langText.erremailphone}</p>}
                <input
                    type='text'
                    placeholder={langText.placeholderaddress}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                {error.address && <p className='error-msg'>{langText.erraddress}</p>}
                <textarea
                    placeholder={langText.placeholderdesc}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {error.message && <p className='error-msg'>{langText.errdesc}</p>}
            </form>
            <Button 
                onClick={handleSubmit} 
                sx={{
                    width: 'min-content',
                    padding: '0.75rem 1rem',
                    marginTop: '1vh',
                    color: 'white',
                    backgroundColor: 'black',
                    fontWeight: 'bold',
                    fontSize: 'medium',
                    ":hover": {
                        backgroundColor: 'white',
                        color: 'black',
                        boxShadow: '0 0 1px 1px black inset'
                    }
                }}
            >
                {langText.submit}
            </Button>
        </div>
    );
    
}

export default ContactUs;