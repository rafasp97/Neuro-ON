import React, { createContext, useContext } from 'react';

// Criando o contexto
const ScrollContext = createContext();

// Hook customizado para usar o contexto
export const useScroll = () => useContext(ScrollContext);

// Componente que envolve todos os outros dentro do App.js, assim todos sectionID são compartilhados entre páginas.
export const ScrollProvider = ({ children }) => {
    const handleScroll = (sectionId) => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); //promove um rolamento fluído até o ponto do nomeado em sectionID
        }
      }, 50); // Aguarda 300ms antes de rolar devido a demora para atualizar a navegação
    };
  return (
    <ScrollContext.Provider value={{ handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
