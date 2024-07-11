import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Service';
import About from './Components/About';
import Product from './Components/Product';
import Testimonial from './Components/Testimontail';
import Section from './Components/Section';
import ProductList from './Components/Product';
import { Provider } from 'react-redux';
import store from './store/store'



function App() {
  return (
     <Provider store={store}>
      <div className="App">
        <Navbar />
        
  
        
        
          <Home />
          <Services />
          <About />
          <ProductList />
       <  Testimonial />
    
        
        <Section />
      
      </div>
      </Provider>

  );
}

export default App;
