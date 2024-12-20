import './App.css';


// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// Pages
import Home from './pages/Home/Home';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Definindo a rota para a Home */}
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/contato" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
