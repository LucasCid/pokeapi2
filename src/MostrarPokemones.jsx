// src/MostrarPokemones.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Poke = () => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    }
  };

  const pokemonList = ['pikachu', 'charmander', 'bulbasaur', 'charmeleon', 'blastoise', 'wartortle', 'charizard', 'ivysaur' ];

  return (
    <div className='hola'>
      <h1>Selecciona un Pokemon</h1>
      <select value={selectedPokemon} onChange={handleSelectChange}>
        <option value="" disabled>Pokemones</option>
        {pokemonList.map(pokemon => (
          <option key={pokemon} value={pokemon}>
            {pokemon}
          </option>
        ))}
      </select>
      <button onClick={handleButtonClick}>Ver Detalle</button>
    </div>
  );
};

export default Poke;
