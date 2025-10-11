import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importaciones de PAGES
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Nosotros from './pages/Nosotros';
import Contact from './pages/Contact';
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound';

function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Products" element={<Products />} />
       <Route path="/Nosotros" element={<Nosotros />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Carrito" element={<Carrito />} />
       <Route path="/NotFound" element={<NotFound />} />
     </Routes>
   </>
 );
}

export default App;
