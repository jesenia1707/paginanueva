import React from "react";
import "../css/nosotros.css"; // Tu CSS general
import productoImg from "../assets/img/productoEjemplo.webp"; // Imagen local

const Nosotros = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={productoImg} alt="Logo" width="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link active" href="/nosotros">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="/contacto">Contacto</a></li>
            <li className="nav-item"><a className="nav-link" href="/carrito">Carrito</a></li>
          </ul>
        </div>
      </nav>

      {/* SECCIÓN NOSOTROS */}
      <main className="main">
        <section className="nosotros-container py-5">
          <h1 className="text-center mb-4">Nosotros</h1>
          <div className="nosotros-info text-center mb-5">
            <h2>Sobre eFarmaNet</h2>
            <p>
              En eFarmaNet nos dedicamos a brindar el mejor servicio farmacéutico con más de 10 años
              de experiencia en el cuidado de la salud de nuestras comunidades. Nuestro compromiso es
              ofrecer medicamentos de calidad y asesoramiento profesional.
            </p>
            <p>
              Contamos con un equipo de farmacéuticos altamente capacitados que están disponibles para
              responder todas tus dudas y brindarte la mejor orientación sobre tus tratamientos médicos.
            </p>
          </div>

          {/* SECCIÓN READ */}
          <section className="read-section my-5">
            <h2 className="text-center mb-4">Leer Más sobre eFarmaNet</h2>

            <div className="read-container d-flex justify-content-center">
              <div className="card read-card" style={{ width: "450px" }}>
                <img
                  src={productoImg}
                  className="card-img-top"
                  alt="Producto"
                />
                <div className="card-body">
                  <h5 className="card-title">Nuestra Historia</h5>
                  <p className="card-text">
                    En eFarmaNet nos dedicamos a brindar el mejor servicio farmacéutico con más de 10 años
                    de experiencia. Nuestro compromiso es ofrecer medicamentos de calidad y asesoramiento profesional.
                  </p>

                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item"><strong>Misión:</strong> Cuidar la salud de nuestros clientes.</li>
                    <li className="list-group-item"><strong>Visión:</strong> Ser la farmacia online de mayor confianza en Chile.</li>
                    <li className="list-group-item"><strong>Valores:</strong> Responsabilidad, Compromiso, Profesionalismo</li>
                  </ul>

                  <a href="#nosotros" className="btn btn-primary btn-block">
                    Volver arriba
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer bg-light text-center py-4">
        <h3><strong>eFarmaNet</strong></h3>
        <p>Tu farmacia de confianza online, cuidando tu salud y bienestar desde 2025.</p>
        <p>&copy; 2025 <strong>eFarmaNet</strong> - Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Nosotros;
