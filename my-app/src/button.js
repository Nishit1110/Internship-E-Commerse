import React from 'react';
import { Routes,Route, BrowserRouter, Link } from 'react-router-dom';
import './Button.css';
import Home from './Home';
import About from './About';
import Info from './Info';
import LoginPage from './Login';

const Button = () => {
  return (
    <BrowserRouter>
        <div className='Container'>
          <Link to="/"><div className="button button-primary">Home</div></Link>
          <Link to="/About"><div className="button button-secondary">About</div></Link>
          <Link to="/Info"><div className="button button-success">Info</div></Link>
          <Link to="/Login"><div className="button button-danger">Login</div></Link>
        </div>
        <Routes>
          <Route path='/' element={<  Home />}></Route>
          <Route path='/About' element={<  About />}></Route>
          <Route path='/Info' element={<  Info />}></Route>
          <Route path='/Login' element={< LoginPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Button;