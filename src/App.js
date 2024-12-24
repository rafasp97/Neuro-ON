import './App.css';


// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// Pages
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import ExploreDetails from './pages/ExploreDetails/ExploreDetails';
import Error from './pages/Error/Error';

// Context
import { ScrollProvider } from './context/ScrollContext';

function App() {


  return (
    <div className="App">
      <ScrollProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/sobre" element={<Home />} />
              <Route path="/contato" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:linkTo" element={<ExploreDetails />} />  {/* Adicionar condicional para páginas /explore/ q não existem */}
            <Route path="*" element={<Error/>} /> {/* Configurar a página erro */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ScrollProvider>
    </div>
  );
}

export default App;
