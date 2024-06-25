import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShoppingCart, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const graphicsCards = [
  { id: 1, name: 'NVIDIA GeForce RTX 3080', description: 'High-end gaming GPU with 10GB GDDR6X.', image: '/assets/graphics_card.jpg', price: 5000 },
  { id: 2, name: 'AMD Radeon RX 6800 XT', description: 'Powerful gaming GPU with 16GB GDDR6.', image: '/assets/graphics_card.jpg', price: 4500 },
  { id: 3, name: 'NVIDIA GeForce RTX 3070', description: 'Mid-range gaming GPU with 8GB GDDR6.', image: '/assets/graphics_card.jpg', price: 4000 },
  { id: 4, name: 'AMD Radeon RX 6700 XT', description: 'Mid-range gaming GPU with 12GB GDDR6.', image: '/assets/graphics_card.jpg', price: 3500 },
  { id: 5, name: 'NVIDIA GeForce RTX 3060', description: 'Budget gaming GPU with 12GB GDDR6.', image: '/assets/graphics_card.jpg', price: 3000 },
  { id: 6, name: 'AMD Radeon RX 6600 XT', description: 'Budget gaming GPU with 8GB GDDR6.', image: '/assets/graphics_card.jpg', price: 2500 },
  { id: 7, name: 'NVIDIA GeForce GTX 1660', description: 'Entry-level gaming GPU with 6GB GDDR5.', image: '/assets/graphics_card.jpg', price: 2000 },
  { id: 8, name: 'AMD Radeon RX 5600 XT', description: 'Entry-level gaming GPU with 6GB GDDR6.', image: '/assets/graphics_card.jpg', price: 1900 },
  { id: 9, name: 'NVIDIA GeForce GTX 1650', description: 'Basic gaming GPU with 4GB GDDR5.', image: '/assets/graphics_card.jpg', price: 1800 }
];

const processors = [
  { id: 1, name: 'Intel Core i9-11900K', description: 'High performance CPU with 8 cores and 16 threads.', image: '/assets/processor.jpg', price: 2000 },
  { id: 2, name: 'AMD Ryzen 9 5900X', description: 'Powerful CPU with 12 cores and 24 threads.', image: '/assets/processor.jpg', price: 1800 },
  { id: 3, name: 'Intel Core i7-11700K', description: 'High performance CPU with 8 cores and 16 threads.', image: '/assets/processor.jpg', price: 1600 },
  { id: 4, name: 'AMD Ryzen 7 5800X', description: 'Powerful CPU with 8 cores and 16 threads.', image: '/assets/processor.jpg', price: 1500 },
  { id: 5, name: 'Intel Core i5-11600K', description: 'Mid-range CPU with 6 cores and 12 threads.', image: '/assets/processor.jpg', price: 1300 },
  { id: 6, name: 'AMD Ryzen 5 5600X', description: 'Mid-range CPU with 6 cores and 12 threads.', image: '/assets/processor.jpg', price: 1200 },
  { id: 7, name: 'Intel Core i3-10100', description: 'Budget CPU with 4 cores and 8 threads.', image: '/assets/processor.jpg', price: 900 },
  { id: 8, name: 'AMD Ryzen 3 3300X', description: 'Budget CPU with 4 cores and 8 threads.', image: '/assets/processor.jpg', price: 800 },
  { id: 9, name: 'Intel Pentium Gold G6400', description: 'Entry-level CPU with 2 cores and 4 threads.', image: '/assets/processor.jpg', price: 600 }
];

const App = () => {
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [graphicsIndex, setGraphicsIndex] = useState(0);
  const [processorIndex, setProcessorIndex] = useState(0);

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

  const handleNext = (category) => {
    if (category === 'graphics') {
      setGraphicsIndex((prevIndex) => (prevIndex + 2) % graphicsCards.length);
    } else if (category === 'processors') {
      setProcessorIndex((prevIndex) => (prevIndex + 2) % processors.length);
    }
  };

  const handlePrev = (category) => {
    if (category === 'graphics') {
      setGraphicsIndex((prevIndex) => (prevIndex - 2 + graphicsCards.length) % graphicsCards.length);
    } else if (category === 'processors') {
      setProcessorIndex((prevIndex) => (prevIndex - 2 + processors.length) % processors.length);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Catálogo</h1>
          <div className="category">
            <h2>Tarjetas Gráficas</h2>
            <div className="product-grid">
              {graphicsCards.slice(graphicsIndex, graphicsIndex + 4).map((card) => (
                <div className="product-item" key={card.id}>
                  <img src={card.image} alt={card.name} />
                  <h4>{card.name}</h4>
                  <p>{card.description}</p>
                  <p>S/. {card.price}</p>
                  <Button
                    variant="primary"
                    className="select-button"
                    onClick={() => selectProduct('graphics', card)}
                  >
                    <FaCheck /> Seleccionar
                  </Button>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <Button onClick={() => handlePrev('graphics')}><FaArrowLeft /></Button>
              <Button onClick={() => handleNext('graphics')}><FaArrowRight /></Button>
            </div>
          </div>
          <div className="category">
            <h2>Procesadores</h2>
            <div className="product-grid">
              {processors.slice(processorIndex, processorIndex + 4).map((processor) => (
                <div className="product-item" key={processor.id}>
                  <img src={processor.image} alt={processor.name} />
                  <h4>{processor.name}</h4>
                  <p>{processor.description}</p>
                  <p>S/. {processor.price}</p>
                  <Button
                    variant="primary"
                    className="select-button"
                    onClick={() => selectProduct('processors', processor)}
                  >
                    <FaCheck /> Seleccionar
                  </Button>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <Button onClick={() => handlePrev('processors')}><FaArrowLeft /></Button>
              <Button onClick={() => handleNext('processors')}><FaArrowRight /></Button>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h1>Armado</h1>
          <div id="selected-products">
            {selectedGraphicsCard && (
              <div className="selected-product">
                <img src={selectedGraphicsCard.image} alt={selectedGraphicsCard.name} />
                <div>
                  <strong>{selectedGraphicsCard.name}</strong>: {selectedGraphicsCard.description}
                </div>
              </div>
            )}
            {selectedProcessor && (
              <div className="selected-product">
                <img src={selectedProcessor.image} alt={selectedProcessor.name} />
                <div>
                  <strong>{selectedProcessor.name}</strong>: {selectedProcessor.description}
                </div>
              </div>
            )}
          </div>
          <Button
            variant="success"
            id="buy-button"
            disabled={!selectedGraphicsCard || !selectedProcessor}
          >
            <FaShoppingCart /> Comprar
          </Button>
          <div id="performance-chart">
            {selectedGraphicsCard && selectedProcessor && displayPerformanceChart()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
