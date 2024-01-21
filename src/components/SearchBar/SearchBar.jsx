import React from "react"
import "./SearchBar.css"
import { useProductContext } from "../../context/productContext.jsx"

export const SearchBar = () => {

  const { searchQuery, updateSearchQuery } = useProductContext();

  const handleSearchChange = (event) => {
    updateSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="query">Busca un juguete</label>
      <input className="search-input" type="text" onChange={handleSearchChange} value={searchQuery} />
      <button>Buscar</button>
    </div>
  );
};
