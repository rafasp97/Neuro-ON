import React from 'react';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

// Style
import './Home.css';

// Components
import Logo from '../../components/Logo/Logo';

function Home() {
    
    // objeto para 'arquivar' as imagens
    const images = [
        '/images/encefalo.jpg',
        '/images/lamina.jpg',
        '/images/coracao.jpg',
        ];

    // Controla a imagem atual do painel
    const imageRandom =  images[Math.floor(Math.random() * images.length)] // inicia por uma imagem aleatória
    const [imagePanel, setImagePanel] = useState(images[imageRandom]);



    // Troca de imagem do painel
    useEffect(() => {
        const interval = setInterval(() => {
            setImagePanel(prevImage => {
                const imageIndex = images.indexOf(prevImage);
                const nextIndex = (imageIndex + 1) % images.length;  // Cicla pelas imagens
                return images[nextIndex];
            });
        }, 10000);  // Troca a imagem a cada 2 segundos

        // Limpeza do intervalo quando o componente for desmontado
        return () => clearInterval(interval);

    }, []); 
    

  return (
    <div>
        <section id="home" className='section-home'>
            <div className="title-icons">
                <div className="title">
                    <Logo/>
                    <h4>Medium length hero headline goes here</h4>
                </div>
                <div className="icons">
                    <img src='/images/ufs.png' className='icon'/>
                    <img src='/images/ufs.png' className='icon'/>
                </div>
            </div>
            <div className="images-panel">
                <motion.img 
                    src={imagePanel} 
                    key={imagePanel}
                    className='image-panel'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 2 }} 
                />
            </div>
            <button>
                Explore
                <img src='images/icon-button.png' className="icon-button"  />
            </button>
        </section>

        <section id="about">
            <h2>Projeto</h2>
            <p>Conteúdo da seção Projeto</p>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>

        <section id="members">
            <h2>Integrantes</h2>
            <p>Conteúdo da seção Integrantes</p>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </section>
    </div>
  );
}

export default Home;