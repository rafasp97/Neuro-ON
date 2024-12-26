import React from 'react';
import ImgMapper from 'react-img-mapper';

import { useState, useRef, useEffect } from 'react';

const Teste = () => {
    const image = '/images/anatomy/sulcos-e-giros/01/1.png'; // Caminho para a sua imagem
    
    const [titulo, setTitulo] = useState('titulo');
    const [description, setDescription] = useState('description');
    const [reference, setReference] = useState('reference');

    const containerRef = useRef(null); // Referência para o contêiner pai
    const [parentWidth, setParentWidth] = useState(0);

      // Atualizar a largura do contêiner sempre que o tamanho mudar
  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []); // Atualiza uma vez após a renderização

    // Defina as coordenadas das áreas clicáveis na imagem
    const MAP = {
      name: "my-map",
      areas: [
        {
          shape: "rect", // Forma retangular
          coords: [34, 44, 270, 350], // Coordenadas [x1, y1, x2, y2]
          href: "#", // Link ou ação ao clicar
          alt: "Area 1", // Descrição da área
          title: "Area 11", // Título da área 
          fillColor: "rgba(0, 0, 0, 0.9)",
          prefillColor: "rgba(255, 0, 0, 0.9)",
          description: "oiiiiiiiiiiiiiiii",
          reference: "fulaninho, P.J."
        },
        {
          shape: "circle", // Forma circular
          coords: [400, 400, 50], // Coordenadas [x, y, raio]
          href: "#",
          alt: "Area 2",
          title: "Another area",
          fillColor: "rgba(0, 0, 0, 0.9)",
          prefillColor: "rgba(255, 0, 0, 0.9)",
          description: "oolaaaaaaai",
          reference: "cicrano, T.A."
        },
      ],
    };
    
        // Função que será chamada no clique da área
    const handleAreaClick = (area, index, event) => {
        // Atualiza o título com o título da área clicada
        console.log(`Área clicada: ${area.title}, Índice: ${index}`);
        console.log(event);
        setTitulo(area.title);
        setDescription(area.description);
        setReference(area.reference);
    };

    return (
      <div ref={containerRef} style={{width: '500px', height: '300px' }}>
        <h1>Interactive Image Map</h1>
        <h1>{titulo}</h1>
        <h1>{description}</h1>
        <h1>{reference}</h1>
        <ImgMapper 
            src={image} 
            map={MAP}  
            onClick={handleAreaClick} 
            responsive={true}
            parentWidth={parentWidth}
            rerenderProps={[titulo]}
        />
      </div>
    );
  };
  
  export default Teste;