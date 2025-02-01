import React from 'react';
import { useState, useEffect, useMemo} from 'react';

// React Router
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// Style
import './Home.css';

// Components
import Logo from '../../components/Logo/Logo';
import FormEmail from '../../components/FormEmail/Form';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import {animatedText, opacity} from '../../variants/AnimatedVariants'

function Home() {

    // permite navegação para outros endereços
    const navigate = useNavigate();
    
    // objeto para 'arquivar' as imagens
    const images = useMemo(() => [
        '/images/panel/1.jpg',
        '/images/panel/2.jpg',
        '/images/panel/3.jpg',
        '/images/panel/4.jpg',
        '/images/panel/5.jpg',
        '/images/panel/6.jpg',
    ], []);

    // 'Sorteia' uma imagem random para iniciar
    const [imagePanel, setImagePanel] = useState(() => images[Math.floor(Math.random() * images.length)]);

    // Troca de imagem do painel em sequência com base na imagem escolhida inicialmente
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


    //Permite que a animação só aconteça após o elemento aparecer na página.
    const { ref: refAbout, inView: inViewAbout } = useInView({
        threshold: 0.2, 
      });
    const { ref: refContact, inView: inViewContact } = useInView({
        threshold: 0.2, 
      });

    // Função para desativar o clique direito
    const handleContextMenu = (event) => {
        event.preventDefault(); // Impede o menu de contexto (clique direito)
    };

    useEffect(() => {
        document.querySelectorAll('img').forEach(img => {
          img.setAttribute('referrerpolicy', 'no-referrer');
        });
    }, []); // Isso faz com que a alteração seja feita apenas uma vez, após a primeira renderização.

  return (
    <div className='home'>
        <section id="home" className='section-home'>
            <div className="title-icons">
                <div className="title">
                    <Logo className='neuroHome'/>
                    <h4> O Atlas Online de Neuroanatomia </h4>
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
                    onContextMenu={handleContextMenu} // Desativa o clique direito
                />
            </div>
            <button className='button-explore' onClick={() => navigate('/explore')}>
                Explore
                <img src='images/icon-button.png' alt="icon" className="icon-button"  />
            </button>
        </section>

        <section id="about" className='section-about'>
            <img src='images/brain-background.png' alt="img" className='background-about'/>

            <Logo className='neuro-icon'/>
            <motion.h2
            ref={refAbout}
            variants={animatedText}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            >
                SOBRE O PROJETO
            </motion.h2>
            <motion.img 
            src='images/line.png'  
            alt="img" 
            className='line'
            ref={refAbout}
            variants={animatedText}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            />
            <motion.p
            ref={refAbout}
            variants={animatedText}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            >
                O NeuroON é uma ferramenta da Universidade Federal de Sergipe (UFS) criada para tornar o ensino de neuroanatomia mais acessível, interativo e completo. 
            </motion.p>
            <motion.p
            ref={refAbout}
            variants={animatedText}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            >
                Nosso objetivo é proporcionar um ambiente de aprendizado moderno e envolvente, combinando rigor científico com facilidade de acesso. A plataforma conta com:
                <br></br>
                ✅ Imagens de alta qualidade de peças anatômicas reais;
                <br></br>
                ✅ Legendas detalhadas e informativas para melhor compreensão das estruturas;
                <br></br>
                ✅ Organização por seções temáticas, facilitando a navegação e o estudo progressivo.
            </motion.p>
            <motion.p
            ref={refAbout}
            variants={animatedText}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            className='last-about-p'
            >
                O NeuroON é uma ótima opção para estudantes e profissionais da área da saúde que desejam aprofundar seus conhecimentos sobre o sistema nervoso. 
                <strong> Acesse, explore e aprenda com a gente!</strong>
            </motion.p>

        </section>

        <section id="contact" className='section-contact'>
            <motion.div 
            className="contact-founders"
            ref={refContact}
            variants={animatedText}
            initial="hidden"
            animate={inViewContact ? 'visible' : 'hidden'}
            >
                <div className="contact-box">
                    <h2>LOCALIZAÇÃO</h2>
                    <div className="location">
                        <img src='images/icon-location.png'  alt="img" className="icon-location"/>
                        <p>Departamento de Morfologia,<br></br>
                        Centro de Ciências biológicas da Saúde, UFS <br></br>
                        Campus - São Cristovão</p>
                    </div>
                </div>
                <div className="founders-box">
                    <h2>FUNDADORES</h2>
                    <p className='p-discentes'>Discentes - 2024 :</p>
                    <div className="founders">
                        <div className="founders1">
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Airton Lima Batalha Filho <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Aneliese Gabriele F. Lorenz <br></br> Graduanda de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Bruno Souza S. Araujo <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Flavio de Souza B. A. Junior <br></br> Graduando de Medicina</p>
                            </div>
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png' alt="img" className="icon-contact"/>
                                <p>João Gabriel S. Trindade <br></br> Graduando de Medicina</p>
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
                                <p>Pedro Salgueiro P. de Castro <br></br> Graduando de Medicina</p>
                            </div>                    
                        </div>
                    </div>
                    <p className='p-orientador'>Orientador :</p>
                    <div className="founders">
                        <div className="founders1">
                            <div className="founders-icon-name">
                                <img src='images/icon-founders.png'  alt="img" className="icon-contact"/>
                                <p>Prof. Dr. Diogo Costa Garção</p>
                            </div>                  
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            className='form-box'
            ref={refContact}
            variants={opacity}
            initial="hidden"
            animate={inViewContact ? 'visible' : 'hidden'}
            >
                <FormEmail/>
            </motion.div>
        </section>
    </div>
  );
}

export default Home;
