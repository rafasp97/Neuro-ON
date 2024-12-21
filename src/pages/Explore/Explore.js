//React
import { useState } from 'react';

// React Router
import { NavLink } from 'react-router-dom';

// Style
import './Explore.css';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import {animatedText, opacity2} from '../../variants/AnimatedVariants'

const Explore = () => {

  //const [showMenu, setShowMenu] = React.useState(false);

  // Controla o menu de opções
  const controlMenuOptions = (id) => {

    //setShowMenu(prev => !prev);

    // lógica para selecionar o id da <nav> em questão
    const navId = 'nav-' + id.slice(-1);
    // variável dinâmica para manipular a <nav> presente no mesmo container da imgId
    const nav = document.getElementById(navId); 
    // lógica para abrir e fechar o menu
    if (nav.style.display === 'none') {
      nav.style.display = 'block';  // Mostrar o menu
    } else {
      nav.style.display = 'none';  // Esconder o menu
    }
  }
  
  // Impede o click com botão direito para não permitir salvar imagens.
  const blockClickRight = (e) => {
    e.preventDefault();
  }


  return (
    <div className="explorePage">
      <button onClick={() => controlMenuOptions('oii')}>oii</button>
        <div className="box-title-explore">
          <h1>SELECIONE UMA ÁREA DE ESTUDO</h1>
          <img src='/images/icon-button.png'  alt="icon" className='icon-explore'/>
        </div>
        <div className="container-grid">
          <div className="grid">
            <img src='/images/2.jpg'  
              alt="boximg" 
              className="img-explore" 
              id='img-1'
              onClick={(e) => controlMenuOptions(e.target.id)}
              onContextMenu={blockClickRight}
            />
            <motion.nav 
            className='nav-explore' 
            id='nav-1'
            variants={opacity2}
            initial="hidden"
            animate={"visible"}
            >
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
            </motion.nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore" />
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          <div className="grid">
            <img src='/images/2.jpg'  alt="boximg" className="img-explore"/>
            <nav className='nav-explore'>
                <NavLink to="#">explore/1</NavLink>
                <NavLink to="#">explore/2</NavLink>
                <NavLink to="#">explore/3</NavLink>
                <NavLink to="#">explore/4</NavLink>
            </nav>
          </div>
          

          
        </div>
    </div>
  )
}

export default Explore