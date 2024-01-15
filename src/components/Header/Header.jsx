import React from 'react'
import { Filters } from '../Filters/Filters.jsx'
import { SearchBar } from '../SearchBar/SearchBar.jsx'
import './Header.css'


export const Header = () => {
  return (
    <div>
        <h1>Rayuela Shopping Cart</h1>
        < Filters />
        < SearchBar />
    </div>
  )
}

