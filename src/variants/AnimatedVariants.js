

export const animatedText = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  export const opacity = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 2.0, ease: 'easeOut' } 
    }
  }

  export const opacityReference = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.0, ease: 'easeOut', delay: 3.0} 
    }
  }

  export const dropDown = {
    initial: { 
      y: 0, 
      opacity: 0, 
      zIndex: 0,  // Inicialmente o zIndex é 0
      display: 'none'  // Inicialmente, o display será 'none'
    },
    animate: {
      opacity: [ 0, 1 ], // A opacidade vai de 0 para 1
      transition: {
        y: { duration: 1.0, ease: 'easeOut' }, // Duração da animação de movimento
        opacity: { duration: 1.0, ease: 'easeOut' }, // Duração da animação de opacidade
      },
      display: 'block', // O display será 'block' quando a animação ocorrer
      zIndex: 1000,  // Adicionando zIndex 1000 durante a animação
    },
    exit: {
      opacity: 0, // A opacidade vai de 1 para 0 quando sair
      y: 0,
      zIndex: 0,  // O zIndex volta para 0 após a animação de saída
      display: 'none', // O display será 'none' ao finalizar a animação
      transition: {
        y: { duration: 1.0, ease: 'easeOut' },
        opacity: { duration: 1.0, ease: 'easeOut' }
      },
    },
  };

  export const menuArrow = {
    initial: { rotate: 0},
    animate: { 
      rotate: 90,
      backgroundColor: "#2C2F47",
      transition:{
        type: "tween",
        duration: 0.5, // tempo de duração da animação
        ease: "easeInOut" // suaviza a animação
      }
     }
  }

  export const controlHeight = {
    closed: { maxHeight: 'auto' },
    expansive: { 
      maxHeight: 'auto',
      transition: { duration: 2.0, ease: 'easeOut', delay: 1.0 } 
    }
  }
