import './App.css';
import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';
import Header from './components/Header';
import SingularPokemon from './components/SingularPokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState("")
  const [next, setNext] = useState("")
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState("")
  const [list, setList] = useState("true")
  const [stats, setStats] = useState([]);

  

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(page, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setNext(res.data.next)
      setPrevious(res.data.previous)
      setPokemons(res.data.results.map(pokemons => pokemons.name))
    })

    return () => cancel()
  }, [page]) 

  function gotoNext() {
    setPage(next)
  };

  function gotoPrevious() {
    setPage(previous)
  };

  if (loading) return "Loading..."

  const getData = (onePokemon, setStats) => {
    setList(false)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${onePokemon}/`)
    .then(res => {
      const thisPokemon = {
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites.front_default,
        type: res.data.types[0].type.name,
        weight: res.data.weight
      }
      setStats(thisPokemon);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const fetchData = (props) => {
    getData(props, setStats);
  }

  return (
    <>
      <Header onSubmit={fetchData} />
      {!list && <button onClick={() => setList(true)}>Pokedex</button>}
      <div>
        {list && <PokemonList pokemons={pokemons} />}
        {list && <Pagination 
          gotoNext={gotoNext ? gotoNext : null}
          gotoPrevious={gotoPrevious ? gotoNext : null}
        />}
        {!list && <SingularPokemon stats={stats} />}
      </div>
    </>
  );
}


export default App;
