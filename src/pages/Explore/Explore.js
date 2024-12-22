// React 
import { useState } from 'react';
// Style
import './Explore.css';

// Components
import ExploreOption from '../../components/ExploreOption/ExploreOption';

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
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-1' 
            navId='nav-1' 
            links={[
              {to: 'img1', name:'cerebro1'},
              {to: 'img2', name:'cerebro2'},
              {to: 'img3', name:'cerebro3'},
              {to: 'img4', name:'cerebro4'},
              {to: 'img5', name:'cerebro5'},
              {to: 'img1', name:'cerebro3'},
              {to: 'img1', name:'cerebro3'},
              {to: 'img1', name:'cerebro3'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}
            />
            
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-2' 
            navId='nav-2' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-3' 
            navId='nav-3' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img5', name:'cerebro5'},
              {to: 'img5', name:'cerebro5'},
              {to: 'img5', name:'cerebro5'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-4' 
            navId='nav-4' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img1', name:'cerebro3'},

            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}            
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-5' 
            navId='nav-5' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img1', name:'cerebro3'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}            
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-6' 
            navId='nav-6' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img1', name:'cerebro3'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-7' 
            navId='nav-7' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-8' 
            navId='nav-8' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}            
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-9' 
            navId='nav-9' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-10' 
            navId='nav-10' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}            
            />
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-11' 
            navId='nav-11' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
                        <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-12' 
            navId='nav-12' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}
            title='Imagem 1'
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}           
            />
            
          
        </div>
    </div>
  )
}

export default Explore