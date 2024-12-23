// React 
import { useState } from 'react';

// Style
import './Explore.css';

// Components
import ExploreOption from '../../components/ExploreOption/ExploreOption';

// Data
import ExploreRef from '../../data/ExploreRef';

// Framer Motion
import { motion } from 'framer-motion';

// Variants - Framer Motion
import { animatedText } from '../../variants/AnimatedVariants'


const Explore = () => {

  const [expandedMenu, setExpandedMenu] = useState(null);

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
          {Object.values(ExploreRef).map(({ title, links }, index) => {
              return (
                <ExploreOption 
                imgSrc={'/images/pagExplore/' + index + '.jpg'} 
                imgId={'img-' + index} 
                navId={'nav-1' + index} 
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