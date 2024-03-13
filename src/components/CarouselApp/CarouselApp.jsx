import React from 'react'
import imagen01 from '../../../src/assets/imagen01.jpeg';
import imagen02 from '../../../src/assets/imagen02.jpeg';
import imagen03 from '../../../src/assets/imagen03.jpeg';
import { Carousel, Image } from 'react-bootstrap';

import './CarouselApp.css';

export const CarouselApp = () => {
  return (
    
    <Carousel interval={5000}>

      <Carousel.Item>
        <Image src={imagen01} style={{ width: '100%' }} />
        <Carousel.Caption>
        <div className='titleHeaderCarousel'>Elegancia culinaria sublime</div>
            <p className='subtitleHeaderCarousel'>Sabores que enamoran siempre!...</p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={imagen02} style={{ width: '100%' }} />
        <Carousel.Caption>
          <h3 className='titleHeaderCarousel'>Gran variedad de ingredientes</h3>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={imagen03} style={{ width: '100%' }} />
        <Carousel.Caption>
          <h3 className='titleHeaderCarousel'>Jugos naturales de todos los sabores</h3>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    
  )
}
