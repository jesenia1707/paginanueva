import { Container } from 'react-bootstrap';

import '../styles/nosotros.css';
import '../styles/Footer.css';

function Nosotros() {
 return (
   <Container className="my-5">
     <div className="nosotros-container">
        <div className="nosotros-info">
          <h2>Sobre eFarmaNet</h2>
          <p>En eFarmaNet nos dedicamos a brindar el mejor servicio farmacéutico con más de 10 años de experiencia en el cuidado de la salud de nuestras comunidades. Nuestro compromiso es ofrecer medicamentos de calidad y asesoramiento profesional.</p>
          
          <p>Contamos con un equipo de farmacéuticos altamente capacitados que están disponibles para responder todas tus dudas y brindarte la mejor orientación sobre tus tratamientos médicos.</p>
        </div>

        <div className="mapa-container">
          <h2>Nuestra Ubicación</h2>
          <iframe 
            className="mapa-frame" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27678.608238224795!2d-70.60520961217068!3d-33.53804458936605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1006ba573eb%3A0x3600ca724773df60!2sCruz%20verde!5e1!3m2!1ses!2scl!4v1757141250582!5m2!1ses!2scl" 
            width="600" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de eFarmaNet"
          >
          </iframe>
        </div>

        <div className="info-contacto">
          <h3>Información de Contacto</h3>
          <p><strong>Dirección:</strong> Av. Principal #123, Santiago Centro</p>
          <p><strong>Teléfono:</strong> +56 2 2345 6789</p>
          <p><strong>Email:</strong> info@efarmanet.cl</p>
          <p><strong>Horario:</strong> Lunes a Viernes: 9:00 - 20:00 | Sábados: 10:00 - 18:00</p>
        </div>
      </div>

      <footer>
        <div className="containerFooter">
          <div className="containerFooter">
            <div className="footer-column">
              <h3><strong>eFarmaNet</strong></h3>
              <p>Tu farmacia de confianza online, cuidando de tu salud y bienestar desde 2025.</p>
              <p>&copy; 2025 <strong>eFarmaNet</strong> - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
   </Container>
 );
}

export default Nosotros;
