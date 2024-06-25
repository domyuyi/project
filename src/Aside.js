import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Aside = ({
  graphicsSearch,
  setGraphicsSearch,
  graphicsPriceRange,
  setGraphicsPriceRange,
  graphicsSpecialOffer,
  setGraphicsSpecialOffer,
  graphicsFreeShipping,
  setGraphicsFreeShipping,
  processorsSearch,
  setProcessorsSearch,
  processorsPriceRange,
  setProcessorsPriceRange,
  processorsSpecialOffer,
  setProcessorsSpecialOffer,
  processorsFreeShipping,
  setProcessorsFreeShipping,
  prevGraphics,
  nextGraphics,
  prevProcessors,
  nextProcessors
}) => {
  return (
    <aside>
      <h2>Filtros</h2>
      <div className="filters">
        <div>
          <h3>Tarjetas Gráficas</h3>
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar por nombre..."
            value={graphicsSearch}
            onChange={(e) => setGraphicsSearch(e.target.value)}
          />
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
          <div className="carousel-controls">
            <Button onClick={prevGraphics}><FaChevronLeft /></Button>
            <Button onClick={nextGraphics}><FaChevronRight /></Button>
          </div>
        </div>
        <div>
          <h3>Procesadores</h3>
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar por nombre..."
            value={processorsSearch}
            onChange={(e) => setProcessorsSearch(e.target.value)}
          />
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
          <div className="carousel-controls">
            <Button onClick={prevProcessors}><FaChevronLeft /></Button>
            <Button onClick={nextProcessors}><FaChevronRight /></Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
