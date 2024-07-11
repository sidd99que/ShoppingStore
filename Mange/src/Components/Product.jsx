import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import ProductModal from './ProductModal';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialize to null initially
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });

    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
        setCategories(response.data);
        // Find the index of 'Miscellaneous' in categories array and set selectedCategory
        const miscellaneousIndex = response.data.findIndex(category => category.name === 'Miscellaneous');
        setSelectedCategory(miscellaneousIndex !== -1 ? miscellaneousIndex + 1 : null); // Add 1 to match category buttons index
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'transform 0.2s',
    position: 'relative',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  };

  const cardTextStyle = {
    marginTop: 'auto',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.id === categories[selectedCategory - 1].id)
    : products;

  return (
    <Container>
      <div className="category-buttons mb-4">
        {['All', 'Shoes', 'Furniture', 'Electronics', 'Miscellaneous'].map((category, index) => (
          <Button
            key={index}
            className={`category-button ${selectedCategory === index ? 'active' : ''}`}
            onClick={() => filterProductsByCategory(index === 0 ? null : index)}
            style={{
              marginRight: '10px',
              backgroundColor: 'transparent',
              border: '1px solid #ccc',
              color: '#333',
            }}
          >
            {category}
          </Button>
        ))}
      </div>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img variant="top" src={product.images[0]} alt={product.title} />
              <Card.Body style={cardBodyStyle}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={cardTextStyle}>
                  <strong>${product.price}</strong>
                  <br />
                  <Button variant="info" onClick={() => handleShowModal(product)}>
                    Review Product
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && (
        <ProductModal
          show={showModal}
          handleClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </Container>
  );
};

export default ProductList;
