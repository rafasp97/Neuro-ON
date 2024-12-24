// Style
import './ExploreDetails.css';

// React Router
import { useLocation } from 'react-router-dom';


// Database
import ExploreRef from '../../data/ExploreRef';


const ExploreDetails = () => {

  const location = useLocation();

  const linkId = location.pathname.slice(9);

  console.log(linkId);




  return (
    <div className='details'>
         <h1>Detalhes do link:</h1>
    </div>
  )
}

export default ExploreDetails