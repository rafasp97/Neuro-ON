
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

  export const opacity2 = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 2.0, ease: 'easeOut', delay: 1.0 } 
    }
  }
