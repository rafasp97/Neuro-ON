
import React from 'react';
import { motion } from 'framer-motion';

// Style
import './Logo.css';

const Logo = () => {
  return (
    <h1 className='neuro'>
        Neuro{' '}
        <motion.span
            style={{
                display: 'inline-block',
                background: 'linear-gradient(94deg, #424668 0%, #2C2F47 84%)', // Gradiente do fundo
                WebkitBackgroundClip: 'text', // Aplica o gradiente apenas ao texto
                color: 'transparent', // O texto precisa ser transparente para o gradiente ser visível
                padding: '0 5px',
                background: 'linear-gradient(45deg, #ffffff, #dcdcdc)', // Gradiente sutil branco para cinza
                WebkitBackgroundClip: 'text', // Aplica o gradiente apenas ao texto
                color: 'transparent', // O texto precisa ser transparente para o gradiente ser visível
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
                ease: 'linear', // Transição contínua e constante
                repeat: Infinity, // Animação infinita sem voltar
                repeatType: 'loop',
            }}
            >
            <span className='on'
                style={{
                background: 'linear-gradient(45deg, #ffffff, #dcdcdc)', // Gradiente de branco a cinza
                WebkitBackgroundClip: 'text', // Aplica o gradiente ao texto
                color: 'transparent', // Deixa o texto transparente para o gradiente aparecer
                }}
            >
                ON
            </span>
            </motion.span>
        </h1>
  )
}

export default Logo