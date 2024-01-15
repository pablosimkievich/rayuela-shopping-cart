import React from "react"
import { useFiltersContext } from '../../context/filtersContext.jsx'
import "./Filters.css"

export const Filters = () => {

  const { filters, setFilters } = useFiltersContext()

  const handleFiltersChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }

  return (
    <div className="container">
      <div className="select">
        <label htmlFor="category">Categoría</label>
        <select onChange={handleFiltersChange} value={filters.category} className="category" name="category" id="category">
          <option value=""></option>
          <option value="Sensoriales">Sensoriales</option>
          <option value="Musicales">Musicales</option>
          <option value="Ingenio">Ingenio</option>
          <option value="Movimiento">Movimiento</option>
        </select>
      </div>

      <div className="select">
        <label htmlFor="age">Edad Recomendada</label>
        <select onChange={handleFiltersChange} value={filters.ages} className="age" name="age" id="age">
          <option value=""></option>
          <option value="De 6 meses a 1 año">De 6 meses a 1 año</option>
          <option value="De 1 año a 3 años">De 1 año a 3 años</option>
          <option value="De 3 a 6 años">De 3 a 6 años</option>
          <option value="Mas de 6 años">Mas de 6 años</option>
        </select>
      </div>
    </div>
  );
};
