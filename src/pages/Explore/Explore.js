// React 
import { useState } from 'react';

// Style
import './Explore.css';

// Components
import ExploreOption from '../../components/ExploreOption/ExploreOption';

// Data
import ExploreData from '../../data/ExploreData';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import { animatedText } from '../../variants/AnimatedVariants'



const Explore = () => {

  const [expandedMenu, setExpandedMenu] = useState(null);

    // Função para manipular quando o mouse passa sobre a imagem
    const handleMouseOver = (event) => {
        event.preventDefault();  // Impede qualquer comportamento padrão
        console.log("Mouse passou sobre a imagem");
    };

  return (
    <div className="explorePage">
        <motion.div 
        className="box-title-explore"
        variants={animatedText}
        initial={'hidden'}
        animate={'visible'}
        >
          <h1>SELECIONE UMA ÁREA DE ESTUDO</h1>
          <img src='/images/icon-button.png'  alt="icon" className='icon-explore'/>
        </motion.div>
        <div className="container-grid">
          {Object.values(ExploreData)
           .sort((a, b) => a.title.localeCompare(b.title))  // Ordena por título de forma alfabética
           .map(({ title, links }, index)=> {
              return (
                <ExploreOption
                key={title + index}
                imgSrc={'/images/pagExplore/' + title + '.jpg'} 
                imgId={'img-' + index} 
                navId={'nav-' + index} 
                links={links}
                title={title} 
                expandedMenu={expandedMenu}
                setExpandedMenu={setExpandedMenu}
                />
              );
          })}       
        </div>
    </div>
  )
}

export default Explore