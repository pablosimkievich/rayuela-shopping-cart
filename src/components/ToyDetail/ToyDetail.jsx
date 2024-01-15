// ToyDetail.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './ToyDetail.css'

export const ToyDetail = () => {
  const { id } = useParams()
  
  const [toy, setToy] = useState({})

  useEffect(() => {
    const fetchToy = async () => {
      try {
        const json = await axios(`https://rayuela.onrender.com/api/products/${id}`)
        setToy(json.data)

      } catch (error) {
        console.error('Error fetching toy details:', error)
      }
    }
    fetchToy()
  }, [id])


  return (
    <div className='detail-container'>
      <h2>{toy.name}</h2>
      <img className='img' src={toy.img} alt={toy.name} />
      <p>{toy.description}</p>
      <p>Precio: ${toy.price}</p>
      <p>Categoría: {toy.category}</p>
      <p>Edades Recomendadas: {toy.age}</p>
    <button id={toy.id} className='btn'>Agregar al Carrito</button>
    </div>
  )
}




