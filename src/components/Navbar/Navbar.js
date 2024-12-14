
// React Router
import { NavLink} from "react-router-dom"

// Style
import styles from './Navbar.css';

const Navbar = () => {

    //verifica qual página está
    const page = window.location.pathname;

    //função para rolamento na página
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <nav className={page === '/' ? 'navbar-home' : 'navbar-explore'}>
        <ul>
            <li><NavLink to="/" className="nav-link">Início</NavLink></li>
            <li><NavLink to="/" className="nav-link" onClick={() => handleScroll('about')}>Sobre</NavLink></li>
            <li><NavLink to="/" className="nav-link" onClick={() => handleScroll('members')}>Membros</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar