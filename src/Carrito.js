import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Carrito = () => {
  const location = useLocation();
  const { selectedGraphicsCard, selectedProcessor } = location.state || {};

  const dolarPrecio = 3.75;
  const costoEnvio = 20;
  const subTotal = (selectedGraphicsCard?.price || 0) + (selectedProcessor?.price || 0);
  const total = subTotal + (costoEnvio * dolarPrecio);

  return (
    <Container>
      <h2>Carrito de Compras</h2>
      <Row>
        <Col md={6}>
        {selectedGraphicsCard && (
            <div className="selected-product">
              <img src={selectedGraphicsCard.image} alt={selectedGraphicsCard.name} />
              <div>
                <strong>{selectedGraphicsCard.name}</strong>
                <p>Precio: S/. {selectedGraphicsCard.price}</p>
              </div>
            </div>
          )}
        </Col>
        <Col md={6}>
          {selectedProcessor && (
            <div className="selected-product">
              <img src={selectedProcessor.image} alt={selectedProcessor.name} />
              <div>
                <strong>{selectedProcessor.name}</strong>
                <p>Precio: S/. {selectedProcessor.price}</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Desglose del precio</h3>
          <p>Subtotal: S/. {subTotal}</p>
          <p>Costo de envío: S/. {costoEnvio * dolarPrecio}</p>
          <h4>Total: S/. {total.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Carrito;
