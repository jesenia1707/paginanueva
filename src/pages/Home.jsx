import { Container } from 'react-bootstrap';
import '../Home.css';


function Home() {
 return (
   <Container className="my-5">
     <h1 className="h1">eFarmaNet</h1>
      <div className="contenido">
        <h2>¡Novedad en eFarmaNet!</h2>
        <p>Estamos orgullosos de anunciar la llegada de nuevos medicamentos innovadores que revolucionarán el
          tratamiento de diversas condiciones de salud. Estos avances médicos representan un paso significativo en
          la industria farmacéutica.</p>
        <h3>Nuevos Medicamentos Disponibles:</h3>
        <ul style={{listStyleType: 'none'}}>
          <li><strong>Azitromicina</strong> - Un avance en el tratamiento de la ansiedad con menos efectos
            secundarios</li>
          <li><strong>Lozartán</strong> - Nueva fórmula para la protección cardiovascular avanzada</li>
          <li><strong>Omeprazol</strong> - Refuerzo inmunológico con tecnología de última generación</li>
          <li><strong>Lorazepam</strong> - Tratamiento tópico revolucionario para condiciones dermatológicas
          </li>
        </ul>

        <p>Estos medicamentos han demostrado una efectividad del 95% en ensayos clínicos y cuentan con la aprobación
          de las autoridades sanitarias internacionales. Nuestro compromiso es siempre ofrecerte lo mejor en
          cuidado de la salud.</p>

        <p>Visita nuestra sección de productos para conocer más sobre estas novedades y cómo pueden beneficiar tu
          salud. Todos nuestros medicamentos incluyen asesoramiento farmacéutico gratuito.</p>

        <p className="footer-noticia">*Todos los medicamentos requieren receta médica. Consulta con nuestro personal
          para más información.</p>
      </div>
      <h2 className="h2">Productos mas vendidos</h2>

      <div className="container">
        <div className="card">
          <div className="card-img">
            <img src="assets/img/Medicamentos/Paracetamol.webp" alt="Paracetamol" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Paracetamol 80 mg</h3>
            <p className="card-text">Medicamento que se puede comprar sin receta para aliviar la fiebre y el dolor.
              Es un fármaco seguro para tratar muchos problemas cuando se utiliza correctamente. Pero si se da
              en dosis demasiado altas puede hacer que el niño se ponga muy enfermo.</p>
            <p className="card-price">$1.490</p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="assets/img/Medicamentos/Ibuprofeno.webp" alt="Ibuprofeno" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Ibuprofeno 600 mg</h3>
            <p className="card-text">El ibuprofeno recetado se usa para aliviar el dolor, la sensibilidad, la
              inflamación y la rigidez ocasionados por la osteoartritis </p>
            <p className="card-price">$2.232</p>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="assets/img/Medicamentos/Amoxicilina.webp" alt="Amoxicilina" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Amoxicilina</h3>
            <p className="card-text">Su acción consiste en detener el crecimiento de las bacterias. Los antibióticos
              como la amoxicilina no son efectivos para tratar los resfriados, la gripe y otras infecciones
              víricas..</p>
            <p className="card-price">$4.364</p>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="assets/img/Medicamentos/Diclofenaco.webp" alt="Diclofenaco" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Diclofenaco</h3>
            <p className="card-text">Se usa para tratar la artritis, el dolor postraumático y otras afecciones, y se
              administra de forma oral, tópica (gel), intramuscular o rectal. Es importante seguir las
              indicaciones del médico y conocer los síntomas de advertencia, como dolor de estómago, sangrado
              o heces negras.</p>
            <p className="card-price">$3.590</p>
          </div>
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

export default Home;
