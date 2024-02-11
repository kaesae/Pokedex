import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);


  let endpoint = ''
  const getPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${endpoint}`)
    .then(response => response.json())
    .then(data => setPokemons(data.results))
    .catch(error => console.error('No pokemons found:', error));
    console.log(pokemons)
    // Setting up API fetch
  }

  useEffect(() => {
    getPokemons()
  }, []) 


  return (
    <div className="App">
      <header>
        <form className="inputForm">
          <div className="inputContainer">
            <label>
              I'm looking to catch...
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className='submitContainer'>
            <input type="submit" />
          </div>
        </form>
      </header>
      <aside>
        <ul className="pokemonList">
          {pokemons.map(
            (pokemon, index) => (
            <div key={index}>{pokemon.name}</div>
            ))
          }
        </ul>
      </aside>
      <body>

      </body>
    </div>
  );
}


export default App;
