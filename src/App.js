import './App.css';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar/Navbar"

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
