import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons/fa
import Section from './Section';
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SiGoogleappsscript } from "react-icons/si";

const testimonials = [
  {
    id: 1,
    name: 'Jacleen',
    text: 'Luxy.com offers the best luxury products with outstanding customer service.',
    image: 'https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=',
    stars: 5,
  },
  {
    id: 2,
    name: 'Jam Shar',
    text: 'I am extremely satisfied with my purchase. The quality is top-notch!',
    image: 'https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg',
    stars: 4,
  },
  {
    id: 3,
    name: 'Jacket',
    text: 'Fast shipping and excellent products. Highly recommend!',
    image: 'https://www.shutterstock.com/image-photo/portrait-male-owner-gift-store-260nw-1688925868.jpg',
    stars: 4,
  },
  {
    id: 4,
    name: 'Emily White',
    text: 'A fantastic shopping experience with great quality products!',
    image: 'https://img.freepik.com/premium-photo/young-indian-woman-happy-restaurant_81396-153.jpg',
    stars: 5,
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id='Testimontail'>
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#333' }}>What Our Customers Say</h2>
        <div className="testimonial-container" style={{ position: 'relative', height: '400px' }}>
          <AnimatePresence>
            {testimonials.map((testimonial, i) => (
              i === index && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="testimonial-card"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center',
                    padding: '20px',
                  }}
                >
                  <Card className="shadow-lg p-4" style={{ borderRadius: '10px', background: '#fff' }}>
                    <Card.Body>
                      <img
                        className="d-block mx-auto rounded-circle mb-4"
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          border: '3px solid #17a2b8',
                        }}
                      />
                      <Card.Text style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#555' }}>
                        "{testimonial.text}"
                      </Card.Text>
                      <div className="d-flex justify-content-center mb-2">
                        {[...Array(testimonial.stars)].map((star, index) => (
                          <FaStar key={index} style={{ color: '#ffc107', fontSize: '1.5em' }} />
                        ))}
                        {[...Array(5 - testimonial.stars)].map((star, index) => (
                          <FaStar key={index + testimonial.stars} style={{ color: '#6c757d', fontSize: '1.5em' }} />
                        ))}
                      </div>
                      <Card.Title className="mt-3" style={{ fontWeight: 'bold', color: '#333' }}>{testimonial.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <FaAmazon style={{ fontSize: '2em', color: 'blue', marginRight: '10px' }} />
  <FaGoogle style={{ fontSize: '2em', color: 'red', marginRight: '10px' }} />
  <FaGooglePlay style={{ fontSize: '2em', color: 'green', marginRight: '10px' }} />
  <SiGoogleappsscript style={{ fontSize: '2em', color: 'black' }} />
</div>

    </Section>
  );
}

export default Testimonial;
