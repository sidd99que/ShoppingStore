import React, { useState } from 'react';
import './Navbar.css';
import { PiRocketThin } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.length;

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
              className={`nav-link${activeLink === 'Home' ? ' active' : ''}`}
              style={{ color: activeLink === 'Home' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Home
            </a>
            <a
              href="#Service"
              onClick={() => setActiveLink('Services')}
              className={`nav-link${activeLink === 'Services' ? ' active' : ''}`}
              style={{ color: activeLink === 'Services' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Services
            </a>
            <a
              href="#About"
              onClick={() => setActiveLink('About')}
              className={`nav-link${activeLink === 'About' ? ' active' : ''}`}
              style={{ color: activeLink === 'About' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              About
            </a>
            <a
              href="#ProductList"
              onClick={() => setActiveLink('ProductList')}
              className={`nav-link${activeLink === 'ProductList' ? ' active' : ''}`}
              style={{ color: activeLink === 'ProductList' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Product
            </a>
            <a
              href="#Testimontail"
              onClick={() => setActiveLink('Testimontail')}
              className={`nav-link${activeLink === 'Testimontail' ? ' active' : ''}`}
              style={{ color: activeLink === 'Testimontail' ? '#17a2b8' : 'black', textDecoration: 'none' }}
            >
              Testimontail
            </a>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/wishlist" className="d-flex align-items-center">
              <FaHeart size={20} className="me-2" />
              Wishlist
            </Nav.Link>
            <Nav.Link href="/profile" className="d-flex align-items-center">
              <FaUser size={20} className="me-2" />
              Profile
            </Nav.Link>
            <Nav.Link href="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={20} className="me-2" />
              {cartCount > 0 && <span className="badge bg-danger">{cartCount}</span>}
            </Nav.Link>
            <Button className="btn btn-info nav-btn fw-bold text-white" href="/contact">
              SignIn
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
