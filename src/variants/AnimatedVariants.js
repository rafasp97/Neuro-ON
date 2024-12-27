

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
    initial: { y: -100, opacity: 0, zIndex: 0 },
    animate: {
      y: [ -100, 0 ], // O elemento se move de -100 para 0
      opacity: [ 0, 1 ], // A opacidade vai de 0 para 1
      zIndex: [ 0, 1000 ], // O zIndex começa em 0 e vai para 1000
      transition: {
        y: { duration: 1.0, ease: 'easeOut' }, // Duração da animação de movimento
        opacity: { duration: 1.0, ease: 'easeOut' }, // Duração da animação de opacidade
        zIndex: {
          duration: 0.1, // O z-index muda rapidamente após a animação
          delay: 1.0, // Atraso de 1 segundo para mudar o z-index (depois da animação de y e opacity)
        },
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
