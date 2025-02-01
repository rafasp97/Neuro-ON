import React from 'react'

import { useRef } from 'react';

import './Carousel.css';

// React Router 
import { Link, useLocation } from 'react-router-dom';

// Context
import { useScroll } from '../../context/ScrollContext';

// Data
import CarouselData from '../../data/CarouselData';



const Carousel = () => {

    const carouselRef = useRef(null); //semelhante a propriedade ID do js puro
    const buttonLeftRef = useRef(null);
    const buttonRightRef = useRef(null);

    const { handleScroll } = useScroll();


    const location = useLocation();
    const linkId = location.pathname.slice(9,12);

    const data = CarouselData;
    const names1 = [];
    const names2 = [];

    // Separa a data pelo link atual
    for(let i=0; i < data.length; i++){
        if(data[i].includes(linkId)){
            names1.push(data[i]);
        }
        else {
            names2.push(data[i]);
        }
    }
    // Embaralha os arrays para seleção sortida;
    const n = [];
    const names1Sort = [];
    while(n.length < names1.length){
        const random = Math.floor(Math.random() * names1.length);
        if(!n.includes(random)){
            n.push(random);
            names1Sort.push(names1[random]);
        }
    }
    const n2 = [];
    const names2Sort = [];
    while(n2.length < names2.length){
        const random = Math.floor(Math.random() * names2.length);
        if(!n2.includes(random)){
            n2.push(random);
            names2Sort.push(names2[random]);
        }
    }

    // Une os Arrays e coloca o names1Sort (baseado no links da página) para os primeiros links ser de páginas relacionadas.
    const ids = names1Sort.concat(names2Sort);

    // Lógica para gerar os títulos
    const title = [];
    for(let i=0; i<ids.length; i++){
        let str = ids[i].slice(0, ids[i].length - 2);
        const number = ids[i].slice(-2);
        if(str.includes('vas')){
            str = 'Vascularização ' + number;
        }
        else if(str.includes('men')){
            str = 'Meninges e Líquor ' + number; 
        }
        else if(str.includes('tro')){
            str = 'Tronco Encefálico ' + number;
        }
        else if(/^([^-\n]*-[^-\n]*)$/.test(str)){
            str = str.replace(/-/g, ' ');
            str = str.replace(/\b\w/g, (char) => char.toUpperCase()); // /\b\w/g padrão para encontrar a primeira letra de cada palavra.
            str = str + ' ' + number;
        }
        else{
            str = str.charAt(0).toUpperCase() + str.slice(1);
            str = str + ' ' + number;
        }
        title.push(str);
    }


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
    const protectImage = (e) => {
        e.preventDefault();
    }

  return (
    <div className='carousel'>
        <div className="border-carousel">
            <p>Imagens relacionadas:</p>
            <div className="carousel-container" ref={carouselRef}>
                {ids.map((id, index) => (
                        <Link 
                        key={id}
                        to={`/explore/${id}`} 
                        className="carousel-link"
                        onContextMenu={protectImage}
                        onMouseEnter={protectImage}
                        onClick={() => handleScroll('det')}
                    >
                        <div className='item-carousel'>
                            <img src={`/images/imgsCarousel/${id}.jpg`} alt={id} className='img-carousel'/>
                        </div>
                        <p>{`${title[index]}`}</p>
                    </Link>
                ))}

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