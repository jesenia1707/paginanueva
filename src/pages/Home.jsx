import { Container } from 'react-bootstrap';

function Home() {
 return (
   <Container className="my-5">
     <h1>Página de Inicio</h1>
     <p>Bienvenidos a nuestro sitio web.</p>
      <div className="bottom">
        <div className="signup">
          <ul>
            <li><a href="html/registro.html">Registrar</a></li>
            <li><a href="html/inicioSesion.html">Iniciar sesion</a></li>
          </ul>
        </div>
      </div>
   </Container>
 );
}

export default Home;
