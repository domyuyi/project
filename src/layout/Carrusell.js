import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import '/workspaces/project/src/css/Carrusel.css';

const Carrusell = () => {
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
    const pages = Math.ceil(tarjetagrafica.length / itemsPerPage);
    const carouselItems = [];

    for (let i = 0; i < pages; i++) {
      const startIndex = i * itemsPerPage;
      const slicedTarjetagrafica = tarjetagrafica.slice(startIndex, startIndex + itemsPerPage);

      carouselItems.push(
        <Carousel.Item key={i}>
          <div className="row">
            {slicedTarjetagrafica.map((item, subIndex) => (
              <div key={startIndex + subIndex} className="col">
                <div className="image-container">
                  <img
                    className='w-100 h-100 dark-image'
                    src={item.picture}
                    alt={`TarjetaGrafica ${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.slug);
                    }}
                  />
                  <div className="caption">
                    <p className="item-name">{` ${item.namee}`}</p>
                  </div>
                </div>
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

export default Carrusell;

const tarjetagrafica = [
  {
    "slug": "TarjetaGrafica-1",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1024_1__4.png",
    "namee": "RTX 3050"
  },
  {
    "slug": "TarjetaGrafica-2",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/g/e/geforce_rtx_4070_eagle_oc_12g-02.png",
    "namee": "RTX 4070"
  },
  {
    "slug": "TarjetaGrafica-3",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/1/0/1024_1_2_1.png",
    "namee": "RTX 4070"
  },
  {
    "slug": "TarjetaGrafica-4",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/1/0/1024_4__3.png",
    "namee": "RTX 4070"    
  },
  {
    "slug": "TarjetaGrafica-5",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/d/e/descarga_1.png",
    "namee": "RTX 3050"
  },
  {
    "slug": "TarjetaGrafica-6",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/1/0/1024_4.png",
    "namee": "RTX 3060"
  }
];
