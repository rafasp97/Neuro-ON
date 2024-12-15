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
        '/images/coracao.jpg',
        '/images/esqueleto.jpg',
        ];

    // Controla a imagem atual do painel
    const [imagePanel, setImagePanel] = useState(() => images[Math.floor(Math.random() * images.length)]);


    // Troca de imagem do painel
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImagePanel(prevImage => {
                const imageIndex = images.indexOf(prevImage);
                const nextIndex = (imageIndex + 1) % images.length; 
                return images[nextIndex];
            });
        }, 10000);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []);  

  return (
    <div>
        <section id="home" className='section-home'>
            <div className="title-icons">
                <div className="title">
                    <Logo className='neuroHome'/>
                    <h4>Medium length hero headline goes here</h4>
                    <div className="icons">
                        <img src='/images/ufs.png' className='icon'/>
                        <img src='/images/ufs.png' className='icon'/>
                </div>
                </div>
            </div>
            <div className="images-panel">
                <motion.img 
                    src={imagePanel} 
                    key={imagePanel}
                    className='image-panel'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }} 
                />
            </div>
            <button className='button-explore'>
                Explore
                <img src='images/icon-button.png' className="icon-button"  />
            </button>
        </section>

        <section id="about" className='section-about'>
            <img src='images/brain-background.png' className='background-about'/>
            <Logo className='neuro-icon'/>
            <h2>SOBRE O PROJETO</h2>
            <img src='images/line.png' className='line'/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id molestie sem. Nunc vel mi eget quam ornare pulvinar. Mauris gravida, enim ac vestibulum consectetur, dolor quam sollicitudin purus, vitae semper metus dui at mauris. In hac habitasse platea dictumst. Vivamus volutpat iaculis accumsan. Vivamus ultrices finibus tincidunt. Aenean ut scelerisque massa.
            </p>
            <p>
                Integer posuere justo sit amet tortor accumsan vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nec suscipit dui, sit amet semper nulla. Donec ultrices orci mauris, et tincidunt orci ornare ac. Praesent porttitor porttitor purus ut rutrum. Morbi eget eros ac arcu mattis viverra ut sed lectus. Phasellus viverra felis in urna consequat, pellentesque finibus mauris consequat. Curabitur blandit purus et condimentum viverra.
            </p>
            <p>
                Mauris non magna et metus aliquam pretium. Fusce sit amet diam vel elit tincidunt feugiat sit amet a dolor. Vivamus euismod odio at purus posuere, in aliquet nisi efficitur. Suspendisse congue, ligula eu gravida ultrices, metus neque finibus massa, eget condimentum justo lacus id neque. Nulla purus elit, vulputate a gravida nec, mattis vel justo. Morbi ligula sapien, varius et ultricies quis, bibendum vitae est. Vivamus elementum urna et maximus sodales.
            </p>

        </section>

        <section id="members" className='section-members'>
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