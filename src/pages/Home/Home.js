import React from 'react';
import { motion } from 'framer-motion';

import { useState, useEffect, useMemo} from 'react';

// Style
import './Home.css';

// Components
import Logo from '../../components/Logo/Logo';

function Home() {
    
    // objeto para 'arquivar' as imagens
    const images = useMemo(() => [
        '/images/panel/1.jpg',
        '/images/panel/2.jpg',
        '/images/panel/3.jpg',
        '/images/panel/4.jpg',
        '/images/panel/5.jpg',
        '/images/panel/6.jpg',
    ], []);

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
    }, [images]);  

  return (
    <div>
        <section id="home" className='section-home'>
            <div className="title-icons">
                <div className="title">
                    <Logo className='neuroHome'/>
                    <h4>Medium length hero headline goes here</h4>
                    <div className="icons">
                        <img src='/images/ufs.png' alt="icon" className='icon'/>
                        <img src='/images/ufs.png' alt="icon" className='icon'/>
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
                <img src='images/icon-button.png' alt="icon" className="icon-button"  />
            </button>
        </section>

        <section id="about" className='section-about'>
            <img src='images/brain-background.png' alt="img" className='background-about'/>
            <Logo className='neuro-icon'/>
            <h2>SOBRE O PROJETO</h2>
            <img src='images/line.png'  alt="img" className='line'/>
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

        <section id="contact" className='section-contact'>
            <div className="contact-founders">
                <div className="contact-box">
                    <h2>LOCALIZAÇÃO</h2>
                    <div className="location">
                        <img src='images/icon-location.png'  alt="img" className="icon-location"/>
                        <p>Departamento de Morfologia,<br></br>
                        Centro de Ciências biológicas da Saúde, UFS</p>
                    </div>
                </div>
                <div className="founders-box">
                    <h2>FUNDADORES</h2>
                    <div className="founders">
                        <div className="founders1">
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Airton Lima Batalha Filho <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Aneliese Gabriele Feitosa Lorenz <br></br> Graduanda de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Bruno Souza Santana Araujo <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Flavio de Souza Barros A. Junior <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png' alt="img" className="icon-contact"/>
                                <p>João Gabriel Santana Trindade <br></br> Graduando de Medicina</p>
                            </div>
                        </div>
                        <div className="founders2">
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Larissa Santos Silva <br></br> Graduanda de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Leonardo Machado Martins <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png' alt="img"  className="icon-contact"/>
                                <p>Pedro Salgueiro Pereira de Castro <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Prof. Dr. Diogo Costa Garção <br></br> Orientador</p>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-box'>
                <form>
                    <div>
                        <img src='images/icon-contact-black.png'  alt="icon" className="icon-contact-black"/>
                    </div>
                    <p className='fale-conosco'>Fale conosco</p>
                    <label for="titulo">Título:</label>
                    <input type="text" id="titulo" name="titulo" required placeholder="Digite um título"/>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required placeholder="Digite seu e-mail"/>
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Digite sua mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    </div>
  );
}

export default Home;