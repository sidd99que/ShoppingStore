import React, { useState } from 'react';
import './Navbar.css';
import { PiRocketThin } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { Navbar, Container, Button , Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const NavbarStyle = ({ isActive }) => {
//   return {
//     fontWeight: isActive ? 'bold' : 'normal',
//     color: isActive ? '#17a2b8' : 'black',
//   };
// };

function CustomNavbar() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <Navbar expand="lg" className="Navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <div className="Logo d-flex align-items-center">
            <PiRocketThin size={30} className="text-primary" />
            <div className="">
              <p className="Logo-Text mb-0 text-primary">Luxy.<span className='text-info'>Com</span></p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <AiOutlineBars size={27} className="text-primary" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-links">
          <a
               href="#"
              onClick={() => setActiveLink('Home')}
              className={`nav-link${activeLink === 'Services' ? ' Active' : ''}`}
              style={{ color: activeLink === 'Home' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Home
            </a>
            <a
              href="#Service"
              onClick={() => setActiveLink('Services')}
              className={`nav-link${activeLink === 'Services' ? ' Active' : ''}`}
              style={{ color: activeLink === 'Services' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Services
            </a>
            <a
              href="#About"
              onClick={() => setActiveLink('About')}
              className={`nav-link${activeLink === 'About' ? ' Active' : ''}`}
              style={{ color: activeLink === 'About' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              About
            </a>
            <a
              href="#Product"
              onClick={() => setActiveLink('Product')}
              className={`nav-link${activeLink === 'Product' ? ' Active' : ''}`}
              style={{ color: activeLink === 'Product' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
            Product
            </a>
            <a
              href="#Testimontail"
              onClick={() => setActiveLink('Testimontail')}
              className={`nav-link${activeLink === 'Testimontail' ? ' Active' : ''}`}
              style={{ color: activeLink === 'Testimontail' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
           Testimontail
            </a>
          </Nav>
       
        <Button className="btn btn-info nav-btn fw-bold text-white" href="/contact">
          Sign in
        </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;


