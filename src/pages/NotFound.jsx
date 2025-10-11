import React from 'react';
import { Container } from 'react-bootstrap';

function NotFound() {
  return (
    <Container className="my-5">
      <h1>Página no encontrada</h1>
      <p>¿Estás seguro de que era aquí?</p>
    </Container>
  );
}

export default NotFound;