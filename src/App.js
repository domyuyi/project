import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const graphicsCards = [
  { id: 1, name: 'NVIDIA GeForce RTX 3080', description: 'High-end gaming GPU with 10GB GDDR6X.', price: 4500, specialOffer: true, freeShipping: true, image: '/assets/graphics_card.jpg' },
  { id: 2, name: 'AMD Radeon RX 6800 XT', description: 'Powerful gaming GPU with 16GB GDDR6.', price: 4000, specialOffer: true, freeShipping: false, image: '/assets/graphics_card.jpg' },
  { id: 3, name: 'NVIDIA GeForce RTX 3070', description: 'Excellent mid-range gaming GPU.', price: 3500, specialOffer: false, freeShipping: true, image: '/assets/graphics_card.jpg' },
  { id: 4, name: 'AMD Radeon RX 6700 XT', description: 'Great performance for 1440p gaming.', price: 3200, specialOffer: false, freeShipping: true, image: '/assets/graphics_card.jpg' },
  { id: 5, name: 'NVIDIA GeForce RTX 3060', description: 'Good performance for 1080p gaming.', price: 2500, specialOffer: false, freeShipping: false, image: '/assets/graphics_card.jpg' },
  { id: 6, name: 'AMD Radeon RX 6600 XT', description: 'Solid 1080p gaming GPU.', price: 2400, specialOffer: false, freeShipping: true, image: '/assets/graphics_card.jpg' },
  { id: 7, name: 'NVIDIA GeForce GTX 1660 Super', description: 'Affordable and efficient.', price: 1800, specialOffer: false, freeShipping: false, image: '/assets/graphics_card.jpg' }
];

const processors = [
  { id: 1, name: 'Intel Core i9-11900K', description: 'High performance CPU with 8 cores and 16 threads.', price: 2000, specialOffer: true, freeShipping: true, image: '/assets/processor.jpg' },
  { id: 2, name: 'AMD Ryzen 9 5900X', description: 'Powerful CPU with 12 cores and 24 threads.', price: 2200, specialOffer: true, freeShipping: false, image: '/assets/processor.jpg' },
  { id: 3, name: 'Intel Core i7-11700K', description: 'Great performance for gaming and productivity.', price: 1800, specialOffer: false, freeShipping: true, image: '/assets/processor.jpg' },
  { id: 4, name: 'AMD Ryzen 7 5800X', description: 'Excellent all-around performance.', price: 1700, specialOffer: false, freeShipping: true, image: '/assets/processor.jpg' },
  { id: 5, name: 'Intel Core i5-11600K', description: 'Solid performance for gaming.', price: 1200, specialOffer: false, freeShipping: false, image: '/assets/processor.jpg' },
  { id: 6, name: 'AMD Ryzen 5 5600X', description: 'Great value for mid-range builds.', price: 1100, specialOffer: false, freeShipping: true, image: '/assets/processor.jpg' },
  { id: 7, name: 'Intel Core i3-10100F', description: 'Budget-friendly option for basic tasks.', price: 600, specialOffer: false, freeShipping: false, image: '/assets/processor.jpg' }
];

const App = () => {
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);

  const [graphicsIndex, setGraphicsIndex] = useState(0);
  const [processorsIndex, setProcessorsIndex] = useState(0);

  const [graphicsSearch, setGraphicsSearch] = useState('');
  const [processorsSearch, setProcessorsSearch] = useState('');

  const [graphicsPriceRange, setGraphicsPriceRange] = useState([0, 5000]);
  const [processorsPriceRange, setProcessorsPriceRange] = useState([0, 2500]);

  const [graphicsSpecialOffer, setGraphicsSpecialOffer] = useState(false);
  const [processorsSpecialOffer, setProcessorsSpecialOffer] = useState(false);

  const [graphicsFreeShipping, setGraphicsFreeShipping] = useState(false);
  const [processorsFreeShipping, setProcessorsFreeShipping] = useState(false);

  const selectProduct = (category, product) => {
    if (category === 'graphics') {
      setSelectedGraphicsCard(product);
    } else if (category === 'processors') {
      setSelectedProcessor(product);
    }
  };

  const filteredGraphicsCards = graphicsCards
    .filter(card => card.name.toLowerCase().includes(graphicsSearch.toLowerCase()))
    .filter(card => card.price >= graphicsPriceRange[0] && card.price <= graphicsPriceRange[1])
    .filter(card => !graphicsSpecialOffer || card.specialOffer)
    .filter(card => !graphicsFreeShipping || card.freeShipping);

  const filteredProcessors = processors
    .filter(proc => proc.name.toLowerCase().includes(processorsSearch.toLowerCase()))
    .filter(proc => proc.price >= processorsPriceRange[0] && proc.price <= processorsPriceRange[1])
    .filter(proc => !processorsSpecialOffer || proc.specialOffer)
    .filter(proc => !processorsFreeShipping || proc.freeShipping);

  const prevGraphics = () => {
    setGraphicsIndex((prevIndex) => (prevIndex === 0 ? Math.max(filteredGraphicsCards.length - 3, 0) : prevIndex - 3));
  };

  const nextGraphics = () => {
    setGraphicsIndex((prevIndex) => (prevIndex + 3 >= filteredGraphicsCards.length ? 0 : prevIndex + 3));
  };

  const prevProcessors = () => {
    setProcessorsIndex((prevIndex) => (prevIndex === 0 ? Math.max(filteredProcessors.length - 3, 0) : prevIndex - 3));
  };

  const nextProcessors = () => {
    setProcessorsIndex((prevIndex) => (prevIndex + 3 >= filteredProcessors.length ? 0 : prevIndex + 3));
  };

  const displayPerformanceChart = () => {
    if (selectedGraphicsCard && selectedProcessor) {
      const performance = Math.random() * 100; // Valor de rendimiento aleatorio
      return (
        <div className="bell-curve">
          <div className="bell-curve-inner" style={{ width: `${performance}%` }}></div>
          <div className="bell-curve-ball" style={{ left: `${performance}%` }}></div>
        </div>
      );
    }
    return null;
  };
  

  const renderProducts = (products, startIndex, category) => {
    return products.slice(startIndex, startIndex + 3).map((product) => (
      <div className="product-item" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <p className="product-price">S/. {product.price}</p>
        <Button className="select-button" onClick={() => selectProduct(category, product)}><FaCheck /> Armar</Button>
      </div>
    ));
  };

  useEffect(() => {
    // Reset the performance chart when new products are selected
    if (selectedGraphicsCard || selectedProcessor) {
      setGraphicsIndex(0);
      setProcessorsIndex(0);
    }
  }, [selectedGraphicsCard, selectedProcessor]);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Catálogo</h1>
          <div className="category">
            <h2>Tarjetas Gráficas</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Buscar por nombre..."
              value={graphicsSearch}
              onChange={(e) => setGraphicsSearch(e.target.value)}
            />
            <div className="filters">
              <div className="filter-group">
                <label className="filter-label">Precio</label>
                <Form.Range
                  min={0}
                  max={5000}
                  value={graphicsPriceRange[1]}
                  onChange={(e) => setGraphicsPriceRange([0, parseInt(e.target.value)])}
                />
                <div>0 - S/. {graphicsPriceRange[1]}</div>
              </div>
              <div className="filter-group">
                <label className="filter-label">Oferta del día</label>
                <Form.Check
                  type="checkbox"
                  checked={graphicsSpecialOffer}
                  onChange={(e) => setGraphicsSpecialOffer(e.target.checked)}
                  label="Solo ofertas del día"
                />
              </div>
              <div className="filter-group">
                <label className="filter-label">Envío Gratis</label>
                <Form.Check
                  type="checkbox"
                  checked={graphicsFreeShipping}
                  onChange={(e) => setGraphicsFreeShipping(e.target.checked)}
                  label="Solo envío gratis"
                />
              </div>
            </div>
            <div className="product-grid">
              {renderProducts(filteredGraphicsCards, graphicsIndex, 'graphics')}
            </div>
            <div className="carousel-controls">
              <Button onClick={prevGraphics}><FaChevronLeft /></Button>
              <Button onClick={nextGraphics}><FaChevronRight /></Button>
            </div>
          </div>
          <div className="category">
            <h2>Procesadores</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Buscar por nombre..."
              value={processorsSearch}
              onChange={(e) => setProcessorsSearch(e.target.value)}
            />
            <div className="filters">
              <div className="filter-group">
                <label className="filter-label">Precio</label>
                <Form.Range
                  min={0}
                  max={2500}
                  value={processorsPriceRange[1]}
                  onChange={(e) => setProcessorsPriceRange([0, parseInt(e.target.value)])}
                />
                <div>0 - S/. {processorsPriceRange[1]}</div>
              </div>
              <div className="filter-group">
                <label className="filter-label">Oferta del día</label>
                <Form.Check
                  type="checkbox"
                  checked={processorsSpecialOffer}
                  onChange={(e) => setProcessorsSpecialOffer(e.target.checked)}
                  label="Solo ofertas del día"
                />
              </div>
              <div className="filter-group">
                <label className="filter-label">Envío Gratis</label>
                <Form.Check
                  type="checkbox"
                  checked={processorsFreeShipping}
                  onChange={(e) => setProcessorsFreeShipping(e.target.checked)}
                  label="Solo envío gratis"
                />
              </div>
            </div>
            <div className="product-grid">
              {renderProducts(filteredProcessors, processorsIndex, 'processors')}
            </div>
            <div className="carousel-controls">
              <Button onClick={prevProcessors}><FaChevronLeft /></Button>
              <Button onClick={nextProcessors}><FaChevronRight /></Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
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
          <Button id="buy-button"><FaShoppingCart /> Comprar</Button>
          {selectedGraphicsCard && selectedProcessor && (
            <div id="performance-chart">
              {displayPerformanceChart()}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
