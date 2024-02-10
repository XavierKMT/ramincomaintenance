import { Link } from 'react-router-dom';
import logo from '../pics/logoblack.png';
import './Navbar.css';
import { useState } from 'react';

const Navbar = ({serviceRef}) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='navbar'>
            <div className={openMenu ? 'nav-header-open' : 'nav-header-closed'}>
                <Link to='/'>
                    <img src={logo} alt='logo' className='logo'/>
                </Link>
                <div className='menu-btn' onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={openMenu ? 'open' : 'closed'}>
                <li>
                    <Link to='/' onClick={() => setOpenMenu(false)}>Home</Link>
                </li>
                <li>
                    <Link to='/' onClick={() => 
                        {
                            serviceRef.current.scrollIntoView({behavior: 'smooth'});
                            setOpenMenu(false)
                        }}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='/about' onClick={() => setOpenMenu(false)}>About</Link>
                </li>
                <li>
                    <Link to='/projects' onClick={() => setOpenMenu(false)}>Projects</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={() => setOpenMenu(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;