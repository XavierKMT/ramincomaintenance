import { Link } from 'react-router-dom';
//import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import logo from '../pics/logo192.png';
import './Navbar.css';
//import { useState } from 'react';
//import { ClickAwayListener } from '@mui/material';

const Navbar = ({serviceRef}) => {

    // const [anchor, setAnchor] = useState(null);

    // const handleClick = (e) => {
    //     setAnchor(anchor ? null : e.currentTarget);
    // }

    // const handleClickAway = () => {
    //     setAnchor(null);
    // }

    // const open = Boolean(anchor);
    // const id = open ? 'popup' : undefined;

    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src={logo} alt='logo' style={{ maxHeight: 100, marginLeft: '2vw', padding: '5px 0' }} />
            </Link>            
            <div className='nav-links'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/' onClick={() => serviceRef.current.scrollIntoView({behavior: 'smooth'})}>Services</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
                {/* <ClickAwayListener onClickAway={handleClickAway}>
                    <Popup id={id} open={open} anchor={anchor} placement={'bottom-end'}>
                        <p
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 5,
                                padding: 10
                            }}
                        >
                            438-496-7497<br/>ramincomaintenance@gmail.com
                        </p>
                    </Popup>
                </ClickAwayListener> */}
            </div>
        </nav>
    );
}

export default Navbar;