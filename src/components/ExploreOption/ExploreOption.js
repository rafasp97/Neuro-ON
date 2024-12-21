import React from 'react'
import { useState } from 'react';

// React Router
import { NavLink } from 'react-router-dom';

// Style
import './ExploreOption.css';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import {controlHeight, dropDown} from '../../variants/AnimatedVariants'

const ExploreOption = ({imgSrc, imgId, navId, links}) => {

    const [expand, setExpand] = useState(false);

    // Controla o menu de opções
    const controlMenuOptions = (id) => {
        // lógica para selecionar o id da <nav> em questão
        const navId = 'nav-' + id.slice(-1);
        // variável dinâmica para manipular a <nav> presente no mesmo container da imgId
        const nav = document.getElementById(navId); 
        // lógica para abrir e fechar o menu
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            setExpand(false);
        } 
        else {
            nav.style.display = 'block';
            setExpand(true);
        }
    }
  
    // Impede o click com botão direito para não permitir salvar imagens.
    const blockClickRight = (e) => {
        e.preventDefault();
    }

  return (
    <motion.div 
    className="grid"
    variants={controlHeight}
    initial={'closed'}
    animate={expand ? 'expansive' : 'closed'}
    >
        <img src={imgSrc}
        alt="boximg" 
        className="img-explore" 
        id={imgId}
        onClick={(e) => controlMenuOptions(e.target.id)}
        onContextMenu={blockClickRight}
        />
        <motion.nav 
        className='nav-explore' 
        id={navId}
        variants={dropDown}
        initial="initial"
        animate={"animate"}
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