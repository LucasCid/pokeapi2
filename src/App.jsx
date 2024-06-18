// src/App.jsx
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Poke from './MostrarPokemones';
import PokemonDetail from './PokemonDetail';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Poke />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
