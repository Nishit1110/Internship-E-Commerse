import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './Button.css';
import Home from './Home';
import About from './About';
import Info from './Info';
import './NavigationMenu.css';
import LoginPage from './Login';
import Header from './Header';

const Button = () => {
  return (
    <BrowserRouter>
    <Header />
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