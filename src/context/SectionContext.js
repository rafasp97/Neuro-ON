import React, { createContext, useContext, useState } from 'react';

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [sections, setSections] = useState({
    inicio: 'inicio',
    sobre: 'sobre',
    contato: 'contato',
  });

  return (
    <SectionContext.Provider value={{ sections, setSections }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSections = () => useContext(SectionContext);