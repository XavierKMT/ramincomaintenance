import { useState } from "react";
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { Button } from "@mui/material";


function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        //alert('email');

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
                alert('Email Sent')
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
        <div className='form-div'>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column',}}>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <textarea
                    cols='65'
                    rows='5'
                    placeholder="Project description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
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
                Submit
            </Button>
        </div>
    );
    
}

export default ContactUs;