import React from 'react'

// React Router
import { NavLink } from 'react-router-dom';

// Style
import './ExploreOption.css';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import {controlHeight, dropDown} from '../../variants/AnimatedVariants'

const ExploreOption = ({imgSrc, imgId, navId, links, expandedMenu, setExpandedMenu }) => {

    // Controla o menu de opções
    const controlMenuOptions = (id) => {

        // Se o menu clicado já está expandido, fechamos ele
        if (expandedMenu === id) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(id); // Expande o menu clicado
        }

        // lógica para selecionar o id da <nav> em questão
        const navId = 'nav-' + id.slice(-1);

        // variável dinâmica para manipular a <nav> presente no mesmo container da imgId
        const nav = document.getElementById(navId); 

        const allMenus = document.querySelectorAll('.nav-explore');
        allMenus.forEach(menu => {
            if(menu !== nav && menu.style.display === 'block'){
                menu.style.display = 'none'
            }
        }); 

        // lógica para abrir e fechar o menu
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } 
        else {
            nav.style.display = 'block';
        }
        
    };


  
    // Impede o click com botão direito para não permitir salvar imagens.
    const blockClickRight = (e) => {
        e.preventDefault();
    }

  return (
    <motion.div 
    className="grid"
    variants={controlHeight}
    initial={'closed'}
    animate={expandedMenu === imgId ? 'expansive' : 'closed'}
    >
        <img 
        src={imgSrc}
        alt="boximg" 
        className="img-explore" 
        id={imgId}
        onClick={(e) => controlMenuOptions(imgId)}
        onContextMenu={blockClickRight}
        />
        <motion.nav 
        className='nav-explore' 
        id={navId}
        //ref={ref}
        variants={dropDown}
        initial='initial'
        animate={expandedMenu === imgId ? 'animate' : 'initial'}
        >
           {links.map((link, index) => (
            <NavLink key={index} to={link.to}>
                {link.name}
            </NavLink>
           ))}
        </motion.nav>
    </motion.div>
  )
}

export default ExploreOption