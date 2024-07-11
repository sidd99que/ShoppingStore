import React, { useState } from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

const ProductModal = ({ show, handleClose, product, continueShopping }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true); // Disable button after adding to cart
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '20px' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={4} lg={3} className="mb-3 mb-md-0">
            <Image
              src={product.images[0]}
              alt={product.title}
              style={{
                width: '100%',
                maxHeight: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <h5 style={{ fontSize: '18px' }}>{product.title}</h5>
            <p style={{ fontSize: '14px' }}>{product.description}</p>
            <p style={{ fontSize: '14px' }}>
              <strong>Price:</strong> ${product.price}
            </p>
            <Button
              variant="info"
              onClick={handleAddToCart}
              className="me-2"
              disabled={addedToCart} // Disable button if already added to cart
            >
              {addedToCart ? 'Added' : 'Add to Cart'}
            </Button>
            <Button variant="primary" onClick={continueShopping}>
              Continue Shopping
            </Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: 'center' }}>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;