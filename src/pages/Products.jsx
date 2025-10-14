import React, { useState } from 'react';
import '../styles/products.css';

const Products = () => {
  const [alert, setAlert] = useState({ message: '', type: '' });

  const products = [
    {
      id: 1,
      name: 'Paracetamol 80 mg',
      price: 1490,
      image: '../assets/img/Medicamentos/Paracetamol.webp',
      description: 'Medicamento que se puede comprar sin receta para aliviar la fiebre y el dolor. Es un fármaco seguro para tratar muchos problemas cuando se utiliza correctamente. Pero si se da en dosis demasiado altas puede hacer que el niño se ponga muy enfermo.'
    },
    {
      id: 2,
      name: 'Ibuprofeno 600 mg',
      price: 2232,
      image: '../assets/img/Medicamentos/Ibuprofeno.webp',
      description: 'El ibuprofeno recetado se usa para aliviar el dolor, la sensibilidad, la inflamación y la rigidez ocasionados por la osteoartritis'
    },
    {
      id: 3,
      name: 'Amoxicilina',
      price: 4364,
      image: '../assets/img/Medicamentos/Amoxicilina.webp',
      description: 'Su acción consiste en detener el crecimiento de las bacterias. Los antibióticos como la amoxicilina no son efectivos para tratar los resfriados, la gripe y otras infecciones'
    },
    {
      id: 4,
      name: 'Diclofenaco',
      price: 3590,
      image: '../assets/img/Medicamentos/Diclofenaco.webp',
      description: 'Se usa para tratar la artritis, el dolor postraumático y otras afecciones, y se administra de forma oral, tópica (gel), intramuscular o rectal. Es importante seguir las indicaciones del médico y conocer los síntomas de advertencia, como dolor de estómago, sangrado o heces negras.'
    }
  ];

  const agregarAlCarrito = (id, nombre, precio, imagen) => {
    // Obtener carrito actual de localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({
        id,
        nombre,
        precio,
        imagen,
        cantidad: 1
      });
    }

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar alerta
    setAlert({
      message: `${nombre} agregado al carrito!`,
      type: 'success'
    });

    // Ocultar alerta después de 3 segundos
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="products-page">
      {/* NAVBAR */}


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <img className="logo-img" src="../assets/img/Logo.webp" alt="Logo" />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nosotros">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/carrito">Ir a carrito</a>
          </li>
          <li>
            <div className="cart-right">
              <i className="small material-icons">add_shopping_cart</i>
            </div>
          </li>
        </ul>
      </div>

      <main className="main">
        <h1 className="h1">Productos</h1>

        {/* Contenedor para alertas */}
        {alert.message && (
          <div id="alert" className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
            {alert.message}
          </div>
        )}

        <div id="userStatus" className="user-status"></div>

        <div className="container">
          {products.map(product => (
            <div key={product.id} className="card">
              <div className="card-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <p className="card-price">${product.price.toLocaleString()}</p>
                <button
                  className="btn"
                  onClick={() => agregarAlCarrito(product.id, product.name, product.price, product.image)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="containerFooter">
          <div className="footer-column">
            <h3><strong>eFarmaNet</strong></h3>
            <p>Tu farmacia de confianza online, cuidando de tu salud y bienestar desde 2025.</p>
            <p>&copy; 2025 <strong>eFarmaNet</strong> - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;