// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from '../assets/Icon.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundImage: 'linear-gradient(to bottom, #f7f7f7, #fff)',
      }}
    >
      <Row
        className="align-items-center"
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '40px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Col md={6}>
          <motion.h1
            style={{
              fontSize: '3rem',
              color: '#17a2b8',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Luxy.com: Premium online shopping for{' '}
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              luxury
            </span>{' '}
            fashion essentials.
          </motion.h1>
          <motion.p
            style={{
              fontSize: '1.5rem',
              margin: '20px 0',
              color: '#6c757d',
              lineHeight: '1.5',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Discover exclusive styles and unparalleled quality with our handpicked collection.
          </motion.p>
          <Link to='/products'>
            <Button
              style={{
                padding: '15px 30px',
                fontSize: '1.25rem',
                color: '#fff',
                backgroundColor: '#17a2b8',
                border: 'none',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#138496';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#17a2b8';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Shop Now
            </Button>
          </Link>
        </Col>
        <Col md={6}>
          <motion.img
            src={Icon}
            alt="Luxury Fashion"
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginTop: '20px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
