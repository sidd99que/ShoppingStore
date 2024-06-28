import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShoppingBag, FaTruck, FaCreditCard, FaRegSmile, FaHeadset } from 'react-icons/fa';
import { motion, useAnimation } from "framer-motion";
import Section from './Section';

function Services() {
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.stop();  // Reset any ongoing animations when the component mounts
    setIsAnimating(false);
  }, [controls]);

  const handleServiceClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      controls.start({
        scale: [1, 1.05, 1], // Animate from normal scale to slightly larger, then back to normal
        transition: { duration: 0.5 },
      }).then(() => setIsAnimating(false)); // Set isAnimating back to false after animation completes
    }
  };

  return (
    <Section id='Service' onClick={handleServiceClick}>
      <Container fluid className="vh-80" style={{ background: 'linear-gradient(to right, #f8f9fa, #e0e0e0)' }}>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our <span className='text-info' style={{ color: '#17a2b8', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>Services</span>
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We provide a range of services to make your shopping experience enjoyable and convenient.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="text-center mb-4">
            <motion.div animate={controls}>
              <Card className="service-card">
                <Card.Body>
                  <FaShoppingBag className="service-icon" />
                  <Card.Title className="service-title">Wide Selection</Card.Title>
                  <Card.Text className="service-description">
                    Explore a wide range of products from top brands.

                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <motion.div animate={controls}>
              <Card className="service-card">
                <Card.Body>
                  <FaTruck className="service-icon" />
                  <Card.Title className="service-title">Fast Delivery</Card.Title>
                  <Card.Text className="service-description">
                    Get your products delivered swiftly and on time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <motion.div animate={controls}>
              <Card className="service-card">
                <Card.Body>
                  <FaCreditCard className="service-icon" />
                  <Card.Title className="service-title">Secure Payment</Card.Title>
                  <Card.Text className="service-description">
                    Enjoy safe and secure payment options
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
         
          
        </Row>
      </Container>
    </Section>
  );
}

export default Services;
