import React from 'react'

import { useRef } from 'react';

import './Carousel.css';

// React Router 
import { Link } from 'react-router-dom';



const Carousel = () => {

    const carouselRef = useRef(null); //semelhante a propriedade ID do js puro
    const buttonLeftRef = useRef(null);
    const buttonRightRef = useRef(null);

    const handleLeft = (e) => {
        e.preventDefault();

        //carouselRef.current = retorna todo o elemento HTML.
        //carouselRef.current.offsetWidth = retorna a largura do scroll presente na tela.
        //carouselRef.current.scrollLeft = retorna a toda a largura do scroll à esquerda que não está na tela.

        //diminui o scrollLeft pela largura do scroll na página.
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;

        //troca de imagem para ter o background azul
        if( carouselRef.current.scrollLeft !== 0){
            buttonLeftRef.current.src = '/images/button-carousel-click.png';
            setTimeout(() => {
                buttonLeftRef.current.src = '/images/button-carousel.png'
              }, 200);
        }

    }

    const handleRight = (e) => {
        e.preventDefault();

        //soma o scrollLeft pela largura do scroll na página.
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

        if(carouselRef.current.scrollLeft + carouselRef.current.offsetWidth < carouselRef.current.scrollWidth){
            buttonRightRef.current.src = '/images/button-carousel-click.png';
            setTimeout(() => {
                buttonRightRef.current.src = '/images/button-carousel.png'
              }, 200);
        }


    }
      
    // Bloqueia o click com botão direito para não permitir salvar imagens.
    // Bloqueia o 'pesquisa virtual' do microsoft edge.
    const protectImage = (e) => {
        e.preventDefault();
    }

  return (
    <div className='carousel'>
        <div className="border-carousel">
            <p>Imagens relacionadas:</p>
            <div className="carousel-container" ref={carouselRef}>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>
                <Link to='#' 
                className="carousel-link"
                onContextMenu={protectImage}
                onMouseEnter={protectImage}
                >
                    <div className='item-carousel'>
                        <img src='/images/pagExplore/Cortes Sagitais.jpg' alt='img' className='img-carousel'/>
                    </div>
                </Link>

            </div>
        </div>
        <div className='buttons-carousel'>
            <img 
                src='/images/button-carousel.png' 
                alt='icon' id='button-left' 
                className='button-left'
                onClick={handleLeft}
                ref={buttonLeftRef}
            />
            <img 
                src='/images/button-carousel.png' 
                alt='icon' id='button-right' 
                className='button-right'
                onClick={handleRight}
                ref={buttonRightRef}
            />
        </div>
    </div>
  )
}

export default Carousel