import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { opacityReference } from "../../variants/AnimatedVariants";

// Style
import './TypingEffect.css';

const TypingEffect = ({ text, refAcad}) => {

  // Estado que vai armazenar o texto atual exibido
  const [displayText, setDisplayText] = useState("");

  // Efeito de digitação
  useEffect(() => {
    // Limpa o displayText toda vez que o texto mudar
    setDisplayText(""); 

    let index = 0;

    // Função para adicionar uma letra por vez
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index-1]);
        index++;
      } else {
        clearInterval(typingInterval); // Limpa o intervalo quando o texto é totalmente exibido
      }
    }, 25); // Intervalo entre as letras (em milissegundos)

    // Limpeza do intervalo ao desmontar o componente ou quando text mudar
    return () => clearInterval(typingInterval);
  }, [text]); // Executa novamente toda vez que a prop text mudar

  return (
    <>
        <motion.h4
        initial={{ opacity: 0, x: -30, scale: 0.8 }} 
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="h4"
        >
            {displayText}
        </motion.h4> 

        { refAcad && (
              <>
                <motion.p
                key={`titleRef-${refAcad}`}
                variants={opacityReference}
                initial='hidden'
                animate='visible'
                >  
                    Referências:
                </motion.p>
                <motion.p
                key={`ref-${refAcad}`}
                variants={opacityReference}
                initial='hidden'
                animate='visible'
                >
                    {refAcad}
                </motion.p>  
              </>
 
        )}

 
    </>
    
    
  );
};

export default TypingEffect;
