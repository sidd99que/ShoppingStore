import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Testimontail from './Components/Testimontail';
import Product from './Components/Product';
import Services from './Components/Service';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
 
   


      
     <Home/>
     <Services/>
     <About/>
     <Product/>
     <Testimontail/>  
     <Section/>

 

     {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Service' element={<Services/>} />
          <Route path='/About' element={<About />}/>
          <Route path='/product' element={ <Product/>} />
          <Route path='/testimonial' element={<Testimontail/>}/>
        </Routes>    */}
    </div>
  );
}

export default App;
