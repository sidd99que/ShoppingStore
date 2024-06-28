import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoes1 from '../assets/Shoes1.jpg';  
import Shoes2 from '../assets/Shoes2.jpg';
import Shoes3 from '../assets/Shoes3.jpg';
import Camera1 from '../assets/Camera1.jpg';
import Camera2 from '../assets/Camera2.jpg';
import Camera3 from '../assets/Camera3.jpg';
import Glasses1 from '../assets/Glasses1.jpg';
import Glasses5 from '../assets/Glasses5.jpg';
import Glasses3 from '../assets/Glasses3.jpg';
import Neckless1 from '../assets/Neckless1.jpg';
import Neckless2 from '../assets/Neckless2.jpg';
import Neckless3 from '../assets/Neckless3.jpg';
import Bag1 from '../assets/Bag1.jpg';
import Bag2 from '../assets/Bag2.jpg';
import Bag3 from '../assets/Bag3.jpg';
import Cap1 from '../assets/Cap1.jpg';
import Cap2 from '../assets/Cap2.jpg';
import Cap4 from '../assets/Cap4.jpg';
import Section from './Section';

function ProductCard({ name, images, stars, ratingCount, details, price, discountedPrice, shipping }) {
  return (
    <div className="col-md-12 col-lg-4 mb-4 mb-lg-4">
      <div className="card shadow-0 border rounded-3">
        <div className="card-body">
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="row mt-3">
            <div className="col-md-6">
              <h5>{name}</h5>
              <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                  {[...Array(stars)].map((star, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                </div>
                <span>{ratingCount}</span>
              </div>
              <div className="mt-1 mb-0 text-muted small">
                <span>{details}</span>
              </div>
              <p className="text-truncate mb-4 mb-md-0">{details}</p>
            </div>
            <div className="col-md-6 border-start">
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">{price}</h4>
                <span className="text-danger"><s>{discountedPrice}</s></span>
              </div>
              <h6 className="text-success">{shipping}</h6>
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm" type="button">Details</button>
                <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    {
      id: 1,
      name: 'High-Resolution Camera',
      images: [Camera1, Camera2, Camera3],
      stars: 4,
      ratingCount: 310,
      details: 'Capture every moment in stunning detail with this high-resolution camera.',
      price: '$499.99',
      discountedPrice: '$599.99',
      shipping: 'Free shipping',
    },
    {
      id: 2,
      name: 'Sport Running Shoes',
      images: [Shoes1, Shoes2, Shoes3],
      stars: 4,
      ratingCount: 289,
      details: 'Comfortable and durable running shoes for all your sports activities.',
      price: '$89.99',
      discountedPrice: '$119.99',
      shipping: 'Free shipping',
    },
    {
      id: 3,
      name: 'Stylish Sunglasses',
      images: [Glasses1, Glasses5, Glasses3],
      stars: 4,
      ratingCount: 145,
      details: 'Protect your eyes with these stylish and trendy sunglasses.',
      price: '$29.99',
      discountedPrice: '$49.99',
      shipping: 'Free shipping',
    },
    {
      id: 4,
      name: 'Elegant Necklace',
      images: [Neckless1, Neckless2, Neckless3],
      stars: 4,
      ratingCount: 145,
      details: 'Enhance your beauty with this elegant and stylish necklace.',
      price: '$199.99',
      discountedPrice: '$299.99',
      shipping: 'Free shipping',
    },
    {
      id: 5,
      name: 'Designer Handbag',
      images: [Bag1, Bag2, Bag3],
      stars: 4,
      ratingCount: 145,
      details: 'Carry your essentials in style with this designer handbag.',
      price: '$149.99',
      discountedPrice: '$199.99',
      shipping: 'Free shipping',
    },
    {
      id: 6,
      name: 'Casual Cap',
      images: [Cap1, Cap2, Cap4],
      stars: 4,
      ratingCount: 145,
      details: 'Stay cool and stylish with this casual cap.',
      price: '$19.99',
      discountedPrice: '$29.99',
      shipping: 'Free shipping',
    },
  ];

  return (
    <Section id='Product'>
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row justify-content-center">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              images={product.images}
              stars={product.stars}
              ratingCount={product.ratingCount}
              details={product.details}
              price={product.price}
              discountedPrice={product.discountedPrice}
              shipping={product.shipping}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Products;
