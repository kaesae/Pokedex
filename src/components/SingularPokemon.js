import React from 'react'

export default function SingularPokemon({stats}) {
  return (
    <>
        <img className='sprite' src={`${stats.img}`} />
        <div className='statsContainer'>
            <p>{stats.id}</p>
            <p>{stats.name}</p>
            <p>{stats.weight}</p>
            <p>{stats.type}</p>
        </div>
    </>
  )
}
