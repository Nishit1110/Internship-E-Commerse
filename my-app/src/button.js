import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './Button.css';
import Home from './Home';
import About from './About';
import Info from './Info';

import './NavigationMenu.css';
import LoginPage from './Login';

const Button = () => {
  return (
    <BrowserRouter>
      <div className='navigation-menu'>
        <Link to="/" className="button button-primary">Home</Link>
        <Link to="/About" className="button button-secondary">About</Link>
        <Link to="/Info" className="button button-success">Info</Link>
        <Link to="/Login" className="button button-danger">Login</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path='/' element={<  Home />}></Route>
          <Route path='/About' element={<  About />}></Route>
          <Route path='/Info' element={<  Info />}></Route>
          <Route path='/Login' element={< LoginPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Button;