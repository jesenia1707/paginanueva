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
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Páginas
function Home() {
  return (
    <div className="container mt-4">
      <h1>Bienvenido a Farmacia Salud+</h1>
      <p>Encuentra los mejores medicamentos y productos de salud al mejor precio.</p>
    </div>
  )
}

function Nosotros() {
  return (
    <div className="container mt-4">
      <h2>Sobre Nosotros</h2>
      <p>Somos una farmacia dedicada al bienestar de las familias chilenas, con atención personalizada y servicio en línea.</p>
    </div>
  )
}

function Products() {
  const productos = [
    { id: 1, nombre: 'Paracetamol 500mg', precio: 1990 },
    { id: 2, nombre: 'Ibuprofeno 400mg', precio: 2490 },
    { id: 3, nombre: 'Vitamina C 1000mg', precio: 3990 }
  ]

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <div className="row">
        {productos.map(p => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">Precio: ${p.precio}</p>
                <button className="btn btn-success w-100">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Carrito() {
  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <p>Aquí aparecerán los productos agregados al carrito.</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="container mt-4">
      <h2>Contacto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Tu nombre" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="tu@email.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

// Navbar principal
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">Farmacia Salud+</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// Componente principal de la App
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

