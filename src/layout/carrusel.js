import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import '/workspaces/project/src/css/Carrusel.css';

const Carrusel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderCarouselItems = () => {
    const pages = Math.ceil(playas.length / itemsPerPage);
    const carouselItems = [];

    for (let i = 0; i < pages; i++) {
      const startIndex = i * itemsPerPage;
      const slicedPlayas = playas.slice(startIndex, startIndex + itemsPerPage);

      carouselItems.push(
        <Carousel.Item key={i}>
          <div className="row">
            {slicedPlayas.map((item, subIndex) => (
              <div key={startIndex + subIndex} className="col">
                <img
                  className='w-100 h-100 dark-image'
                  src={item.picture}
                  alt={`Playa ${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.slug);
                  }}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      );
    }

    return carouselItems;
  };

  return (
    <div className="carrusel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
}

export default Carrusel;

const playas = [
  {
    slug: 'playa-1',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg'
  },
  {
    slug: 'playa-2',
    picture: 'https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg'
  },
  {
    slug: 'playa-3',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  },
  {
    slug: 'playa-4',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  },
  {
    slug: 'playa-5',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  }
];