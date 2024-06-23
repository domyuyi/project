import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const graphicsCards = [
  { id: 1, name: 'NVIDIA GeForce RTX 3080', description: 'High-end gaming GPU with 10GB GDDR6X.', image: '/assets/graphics_card.jpg' },
  { id: 2, name: 'AMD Radeon RX 6800 XT', description: 'Powerful gaming GPU with 16GB GDDR6.', image: '/assets/graphics_card.jpg' }
];

const processors = [
  { id: 1, name: 'Intel Core i9-11900K', description: 'High performance CPU with 8 cores and 16 threads.', image: '/assets/processor.jpg' },
  { id: 2, name: 'AMD Ryzen 9 5900X', description: 'Powerful CPU with 12 cores and 24 threads.', image: '/assets/processor.jpg' }
];

const App = () => {
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);

  const selectProduct = (category, product) => {
    if (category === 'graphics') {
      setSelectedGraphicsCard(product);
    } else if (category === 'processors') {
      setSelectedProcessor(product);
    }
  };

  const displayPerformanceChart = () => {
    const performance = Math.random() * 100;
    return (
      <div>
        <div className="bar-label">Rendimiento de la combinación</div>
        <div className="bar" style={{ width: `${performance}%` }}>{performance.toFixed(2)}%</div>
      </div>
    );
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Catálogo</h1>
          <div className="category">
            <h2>Tarjetas Gráficas</h2>
            <Carousel>
              {graphicsCards.map((card) => (
                <Carousel.Item key={card.id} className="catalog-carousel-item">
                  <img src={card.image} alt={card.name} />
                  <Carousel.Caption>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <Button variant="primary" onClick={() => selectProduct('graphics', card)}><FaCheck /> Seleccionar</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="category">
            <h2>Procesadores</h2>
            <Carousel>
              {processors.map((processor) => (
                <Carousel.Item key={processor.id} className="catalog-carousel-item">
                  <img src={processor.image} alt={processor.name} />
                  <Carousel.Caption>
                    <h3>{processor.name}</h3>
                    <p>{processor.description}</p>
                    <Button variant="primary" onClick={() => selectProduct('processors', processor)}><FaCheck /> Seleccionar</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col md={6}>
          <h1>Armado</h1>
          <div id="selected-products">
            {selectedGraphicsCard && (
              <div>
                <img src={selectedGraphicsCard.image} alt={selectedGraphicsCard.name} />
                <div>
                  <strong>{selectedGraphicsCard.name}</strong>: {selectedGraphicsCard.description}
                </div>
              </div>
            )}
            {selectedProcessor && (
              <div>
                <img src={selectedProcessor.image} alt={selectedProcessor.name} />
                <div>
                  <strong>{selectedProcessor.name}</strong>: {selectedProcessor.description}
                </div>
              </div>
            )}
          </div>
          <Button variant="success" id="buy-button" disabled={!selectedGraphicsCard || !selectedProcessor}><FaShoppingCart /> Comprar</Button>
          <div id="performance-chart">
            {selectedGraphicsCard && selectedProcessor && displayPerformanceChart()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
