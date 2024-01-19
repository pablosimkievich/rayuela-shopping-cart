import React from "react"
import { useFiltersContext } from "../../context/filtersContext.jsx"
import { useProductContext } from "../../context/productContext.jsx"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci"
import axios from "axios";
import "./Toys.css";

export const Toys = () => {
  const { filters } = useFiltersContext()
  const { searchQuery } = useProductContext()

  const [toys, setToys] = useState([])

  const theProducts = async () => {
    const json = await axios("https://rayuela.onrender.com/api/products")
    setToys(json.data.products);
  };

  useEffect(() => {
    theProducts();
  }, [filters]);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === "" || product.category === filters.category) &&
        (filters.age === "" || product.age === filters.age)
      );
    });
  };

  const searchProducts = (products) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredToys = searchProducts(filterProducts(toys));

  return (
    <div className="row">
      {filteredToys?.map((e, i) => {
        return (
          <div className="card" key={i} >
            <Link className="link" to={`/toys/${e.id}`} >
              <p hidden>{e.id}</p>
              <img className="image" src={e.img} alt={e.name} />
              <h4>{e.name}</h4>
              <p>$ {e.price}</p>
              <p>{e.category}</p>
              <p>{e.age}</p>
            </Link>
            <button 
            id={e.id} 
            className='btn toys-btn'
            >Agregar al Carrito
            <CiShoppingCart className="cart-icon" />
            </button>
          </div>
        );
      })}
    </div>
  )
}
