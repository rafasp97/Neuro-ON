import './App.css';


// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// Pages
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';

// Context
import { ScrollProvider } from './context/ScrollContext';

function App() {


  return (
    <div className="App">
      <ScrollProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {/* Definindo a rota para a Home */}
            <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/sobre" element={<Home />} />
              <Route path="/contato" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ScrollProvider>
    </div>
  );
}

export default App;
