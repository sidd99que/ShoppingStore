import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from "framer-motion";
import Section from './Section';

function About() {
  return (
    <Section id='About'>
    <Container fluid className="About-section py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="https://st.depositphotos.com/1003593/3947/i/450/depositphotos_39479909-stock-photo-about-us-blue-marker.jpg" 
              alt="About Us" 
              rounded 
              fluid 
              style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
            />
          </motion.div>
        </Col>
        <Col md={6} className="text-center text-md-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ color: '#343a40', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
              About <span style={{ color: '#17a2b8' }}>Luxy.com</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.25rem', margin: '20px 0', color: '#6c757d' }}>
              At Luxy.com, we are dedicated to bringing you the best in luxury fashion. Our handpicked collection features exclusive styles and unparalleled quality.
            </p>
            <p className="section-description" style={{ fontSize: '1rem', color: '#6c757d' }}>
              We believe in providing an exceptional shopping experience that is both enjoyable and convenient. From our wide selection of top brands to our fast delivery and secure payment options, everything we do is designed with you in mind.
            </p>
            <p className="section-description" style={{ fontSize: '1rem', color: '#6c757d' }}>
              Our customer service team is available 24/7 to assist you with any questions or concerns. Join us at Luxy.com and discover the difference of shopping with a brand that values quality and customer satisfaction.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </Section>
  );
}

export default About;


