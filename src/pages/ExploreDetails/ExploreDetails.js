// Style
import './ExploreDetails.css';

// React
import { useState, useEffect } from 'react';

// React Router
import { useLocation} from 'react-router-dom';

// Database
import ExploreData from '../../data/ExploreData';


const ExploreDetails = () => {

  const location = useLocation();
  const linkId = location.pathname.slice(9);
  const idForImg = linkId.slice(0, -2) + '/' + linkId.slice(-2);

  const [error, setError] = useState(false);

  // variáveis da tela
  const [title, setTitle] = useState();
  const [images, setImages] = useState(['', '/images/', '/images/', '/images/']);

  // useEffect que será chamado sempre que o linkId mudar
  useEffect(() => {
    // Busca dentro da 'database' se existe algum link correspondente
    const validityLink = Object.values(ExploreData)
      .map(item => item.links)
      .filter(link => link.to === linkId);

    // Verifica se o link existe, se não, ativa o erro
    if (validityLink.length === 0) {
      setError(true);  
      setTitle(linkId.slice(0, -2) + ' ' + linkId.slice(-2));
      //exemplo de retorno: '/images/' + cerebelo/02' + '/' + index ... faltando apenas o formato.
      setImages(images.map((src, index) => src + idForImg + '/' + index));
    } else {
      setError(false); 
    }

  }, [linkId, idForImg]); // eslint-disable-line react-hooks/exhaustive-deps
 

  return (
    <div className='details'>
          {error ? (
            <div>Detalhes do link: {title}
                <br></br> <br></br>
                 <h4>{images[1]}</h4>
                 <h4>{images[2]}</h4>
                 <h4>{images[3]}</h4>
            </div>
          ) : (
            <h1>Link não encontrado!</h1>
          )}
        
    </div>
  )
}

export default ExploreDetails