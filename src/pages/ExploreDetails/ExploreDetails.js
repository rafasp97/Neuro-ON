// Style
import './ExploreDetails.css';

// React
import { useState, useEffect } from 'react';

// React Router
import { Link, useLocation} from 'react-router-dom';

// Database
import ExploreData from '../../data/ExploreData';

// Pages
import Error from '../Error/Error'

// Componenets
import Carousel from '../../components/Carousel/Carousel';


const ExploreDetails = () => {

  const location = useLocation();

  const linkId = location.pathname.slice(9);
  const idForImg = linkId.slice(0, -2) + '/' + linkId.slice(-2);

  const [error, setError] = useState(false);

  // variáveis da tela
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [imgId, setImgId] = useState(1);

  // useEffect que será chamado sempre que o linkId mudar
  useEffect(() => {

    // Busca dentro da 'database' se existe algum link correspondente
    const validityLink = Object.values(ExploreData)
      .map(data => data.links)
      .flat()
      .filter(link => link.to === linkId);

    // Verifica se o link existe, se não, ativa o erro
    if (validityLink.length !== 0) {
      setError(false);  
      

      // captura o título da página
      setTitle(validityLink[0].name);

      // exemplo de retorno: '/images/' + 'anatomy/' cerebelo/02' + '/' + index ... faltando apenas o formato.
      const imgAnatomy = Array.from({ length: 4 }, (_, index) => `/images/anatomy/${idForImg}/${index}`);
      setImages(imgAnatomy);

    } else {
      setError(true); 
    }

  }, [linkId, idForImg]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextImage = () => {
    setImgId(prevImgId => (prevImgId === 3 ? 1 : prevImgId + 1));
  };

  // Bloqueia o click com botão direito para não permitir salvar imagens.
  // Bloqueia o 'pesquisa virtual' do microsoft edge.
  const protectImage = (e) => {
    e.preventDefault();
  }

  return (
    !error ? (
      // Renderiza a página a partir do endereço http.
      <div className='details'>
        <div className='details-link'>
          <Link to="/explore">
            <img src='/images/arrow2.png' alt='icon' className='details-icon'/>
            <p>Voltar</p>
          </Link>
        </div>
        <div className="details-box">
          <h1>{title}</h1>
          {/* <p>{images[imgId]}.jpg</p> */}
          <img 
            src={`${images[imgId]}.png`} 
            alt='img-anatomy' 
            className='img-anatomy' 
            onClick={nextImage}
            onContextMenu={protectImage}
            onMouseEnter={protectImage}
          />
          
        </div>
        <Carousel/>
      </div>
    ) : (
      // Renderiza a página error caso o link não seja encontrado.
      <Error/>
    )
  );
}

export default ExploreDetails