
import React from 'react';
import { motion } from 'framer-motion';

// Style
import './Logo.css';

const Logo = ( {className} ) => {
  return (
    <div>
         {/*recebe 'neuroHome' ou 'neuroIcon'*/}
        <h1 className={`neuro ${className}`}>
        Neuro{' '}
        <motion.span className='on1'
            style={{
                borderRadius: '5px',
                }}
            animate={{
                background: [
                'linear-gradient(94deg, #424668 0%, #2C2F47 84%)',
                'linear-gradient(180deg, #424668 0%, #2C2F47 84%)',
                'linear-gradient(270deg, #424668 0%, #2C2F47 84%)',
                'linear-gradient(360deg, #424668 0%, #2C2F47 84%)',
                'linear-gradient(0deg, #424668 0%, #2C2F47 84%)',
                ],
            }}
            transition={{
                duration: 5,
                ease: 'linear', 
                repeat: Infinity, 
                repeatType: 'loop',
            }}
            >
            <span
                style={{
                background: 'linear-gradient(45deg, #ffffff, #dcdcdc)', 
                WebkitBackgroundClip: 'text', 
                color: 'transparent', 
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
                }}
            >
                ON
            </span>
        </motion.span>
    </h1>
    </div>
    
  )
}

export default Logo