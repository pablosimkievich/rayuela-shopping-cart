import React from 'react'
import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className='container'>
      <label htmlFor="query">Busca un juguete</label>
      <input type="text" />
      <button>Buscar</button>
    </div>
  )
}


