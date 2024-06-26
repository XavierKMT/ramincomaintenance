import { Link, useNavigate } from 'react-router-dom';
import logo from '../pics/logoblack.png';
import './Navbar.css';
import { useState } from 'react';
import textData from './TextLanguage.json';

const Navbar = ({ serviceRef, handleLangChange}) => {
    const langText = textData[textData.lang];
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='navbar'>
            
            <div className={openMenu ? 'nav-header-open' : 'nav-header-closed'}>
                <Link to='/'>
                    <img src={logo} alt='logo' className='logo'/>
                </Link>
                <div className='mobile-nav-section'>
                    <button className='lang-btn' onClick={() => handleLangChange()}>{textData.lang === 'en' ? 'FR' : 'EN'}</button>
                    <div className='menu-btn' onClick={() => setOpenMenu(!openMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>                
            </div>
            <ul className={openMenu ? 'open' : 'closed'}>
                <li onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false);
                        navigate('/');
                    }
                }}>
                    <Link to='/' onClick={() => setOpenMenu(false)}>{langText.navhome}</Link>
                </li>
                <li onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false);
                        navigate('/');
                        if (window.location.pathname === '/') {
                            serviceRef.current.scrollIntoView({behavior: 'smooth'})
                        }
                    }
                }}>
                    <Link to='/' onClick={() => 
                        {
                            if (window.location.pathname === '/') {
                                serviceRef.current.scrollIntoView({behavior: 'smooth'})
                            }
                            setOpenMenu(false)
                        }}
                    >
                        {langText.navservices}
                    </Link>
                </li>
                <li onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false);
                        navigate('/about');
                    }
                }}>
                    <Link to='/about' onClick={() => setOpenMenu(false)}>{langText.navabout}</Link>
                </li>
                <li onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false);
                        navigate('/projects');
                    }
                }}>
                    <Link to='/projects' onClick={() => setOpenMenu(false)}>{langText.nacprojects}</Link>
                </li>
                <li onClick={() => {
                    if (openMenu) {
                        setOpenMenu(false);
                        navigate('/contact');
                    }
                }}>
                    <Link to='/contact' onClick={() => setOpenMenu(false)}>{langText.navcontact}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;