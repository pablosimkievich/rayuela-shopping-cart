// ToyDetail.jsx
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import "./ToyDetail.css"


export const ToyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [toy, setToy] = useState({})

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const json = await axios(
          `https://rayuela.onrender.com/api/products/${id}`
        );
        setToy(json.data);
      } catch (error) {
        console.error("Error fetching toy details:", error)
      }
    };
    fetchToy()
  }, [id])

  return (
    <>
      
      <div className="header-container">
      <h1>Rayuela Shopping Cart</h1>
        <button
        className="btn"
        onClick={ () => navigate("/")}
        >Volver al Inicio</button>
      </div>
      
      <div className="detail-container">
        <h2>{toy.name}</h2>
        <img className="img" src={toy.img} alt={toy.name} />
        <p>{toy.description}</p>
        <p>Precio: ${toy.price}</p>
        <p>Categoría: {toy.category}</p>
        <p>Edades Recomendadas: {toy.age}</p>
        <button id={toy.id} className="btn">
          Agregar al Carrito
        </button>
      </div>
    </>
  )
}