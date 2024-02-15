import React, { useState } from "react"

export default function PokemonList({ pokemons, callback}) {


  return (
    <div>
        {pokemons.map(p => (
            <div key={p}>
                {p}
            </div>
        ))}
    </div>
  )
}