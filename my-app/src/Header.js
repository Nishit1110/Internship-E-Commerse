import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

const Header = () => {
    return (
        <div className='Header'>
            <Link to="/" className='button'>Home</Link>
            <Link to="/About" className='button'>About</Link>
            <Link to="/Info" className='button'>Info</Link>
            <Link to="/Login" className='button'>Login</Link>
        </div>
    )
}
export default Header;