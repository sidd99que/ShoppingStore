import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Service';
import About from './Components/About';
import Product from './Components/Product';
import Testimonial from './Components/Testimontail';
import Section from './Components/Section';

function App() {
  return (
  
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <About />
        <Product />
        <Testimonial />

        <Section />
      </div>
 
  );
}

export default App;
