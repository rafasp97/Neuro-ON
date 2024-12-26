// Style
import './ExploreDetails.css';

// React
import { useState, useEffect, useRef} from 'react';

// React Router
import { Link, useLocation} from 'react-router-dom';

// Database
import ExploreData from '../../data/ExploreData';
import CoordsData from '../../data/CoordsData';

// Pages
import Error from '../Error/Error'

// Componenets
import Carousel from '../../components/Carousel/Carousel';
import ImgMapper from 'react-img-mapper';


const ExploreDetails = () => {
  const location = useLocation();

  const linkId = location.pathname.slice(9);
  const idForImg = linkId.slice(0, -2) + '/' + linkId.slice(-2);

  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [imgId, setImgId] = useState(1);
  const [coords, setCoords] = useState({});
  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [reference, setReference] = useState('');

  const containerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);

  // Atualizar a largura do contêiner sempre que o tamanho mudar
  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []); // Atualiza uma vez após a renderização

  // useEffect para buscar dados quando o 'linkId' mudar
  useEffect(() => {
    
    // Busca dentro da 'ExploreData' se existe algum link correspondente
    const validityLink = Object.values(ExploreData)
      .map(data => data.links)
      .flat()
      .filter(link => link.to === linkId);

    // Busca dentro da 'CoordsData' se existe alguma coordenada corespondente ao endereço
    const coordinates = Object.values(CoordsData)
      .filter(data => data.name === linkId)[0];
    
    if (validityLink.length !== 0) {
      
      setError(false);
      setTitle(validityLink[0].name);


      //imgId !== 3 ? setCoords(CoordsData[0]) : setCoords(coordinates);

      setCoords(coordinates);

      const imgAnatomy = Array.from({ length: 4 }, (_, index) => `/images/anatomy/${idForImg}/${index}`);
      setImages(imgAnatomy);

    } else {
      setError(true);
    }
  }, [linkId, imgId, idForImg]); // O efeito só será chamado quando 'linkId' ou 'imgId' mudar

  const nextImage = () => {
    if (imgId === 1 || imgId === 2) {
      setImgId(imgId + 1);
    } else if (imgId === 3) {
      setImgId(1);
    }
  };

  console.log(imgId);
  console.log(CoordsData[0]);
  console.log(coords);
  // Bloqueia o click com o botão direito
  const protectImage = (e) => {
    e.preventDefault();
  };

  const handleAreaClick = (area, index, event) => {
    setTitulo(area.title);
    setDescription(area.description);
    setReference(area.reference);
  };

  return (
    !error ? (
      <div className='details'>
        <div className='details-link'>
          <Link to="/explore">
            <img src='/images/arrow2.png' alt='icon' className='details-icon'/>
            <p>Voltar</p>
          </Link>
        </div>
        <div className="details-box">
          <h1>{title}</h1>
            <div ref={containerRef} className='details-container-img'  onContextMenu={protectImage}>
              <ImgMapper
                src={`${images[imgId]}.png`} 
                map={coords}  
                onClick={handleAreaClick} 
                responsive={true}
                parentWidth={parentWidth}
              />
            </div>
        
          <div>
            <h1>Interactive Image Map</h1>
            <h1>{titulo}</h1>
            <h1>{description}</h1>
            <h1>{reference}</h1>
          </div>
          <button onClick={nextImage}>NextImage</button>
        </div>
        <Carousel/>
      </div>
    ) : (
      <Error/>
    )
  );
};

export default ExploreDetails;
