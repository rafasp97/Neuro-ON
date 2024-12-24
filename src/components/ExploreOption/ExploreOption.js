import React from 'react'
// React Router
import { NavLink } from 'react-router-dom';

// Style
import './ExploreOption.css';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import {controlHeight, dropDown, menuArrow} from '../../variants/AnimatedVariants'

const ExploreOption = ({imgSrc, imgId, navId, links, title, expandedMenu, setExpandedMenu}) => {

    // Controla o menu de opções
    const controlMenuOptions = (id) => {

        // Se o menu clicado já está expandido, fechamos ele
        if (expandedMenu === id) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(id); // Expande o menu clicado
        }

        // lógica para selecionar o id da <nav> em questão
        const navId = 'nav-' + id.slice(id.indexOf('-') + 1);
        // variável dinâmica para manipular a <nav> presente no mesmo container da imgId
        const nav = document.getElementById(navId); 

        // lógica que verifica se tem algum outro menu aberto
        const allMenus = document.querySelectorAll('.nav-explore');
        allMenus.forEach(menu => {
            if(menu !== nav && menu.style.display === 'block'){
                menu.style.display = 'none'
            }
        });
        
    };

  
    // Bloqueia o click com botão direito para não permitir salvar imagens.
    // Bloqueia o 'pesquisa virtual' do microsoft edge.
    const protectImage = (e) => {
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
        onContextMenu={protectImage}
        onMouseEnter={protectImage}
        searchable="false"
        />
        <div className='img-explore-description'>
            <p className='title-explore'>{title}</p>
            <motion.img 
            src="/images/arrow.png" 
            alt="icon" 
            className='icon-explore-arrow' 
            id={'arrow-' + imgId}
            variants={menuArrow}
            initial='initial'
            animate={expandedMenu === imgId ? 'animate' : 'initial'}
            />
        </div>
        <motion.nav 
        className='nav-explore' 
        id={navId}
        variants={dropDown}
        initial='initial'
        animate={expandedMenu === imgId ? 'animate' : 'initial'}
        >
           {links.map((link, index) => (
             <NavLink key={`ket-${title}-${index}`} to={link.to}>
                {link.name}
            </NavLink>
           ))}
        </motion.nav>
    </motion.div>
  )
}

export default ExploreOption