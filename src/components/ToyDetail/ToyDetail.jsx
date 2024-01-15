// ToyDetail.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
    <div>
      <h2>{toy.name}</h2>
      <img src={toy.img} alt={toy.name} />
      <p>{toy.description}</p>
      <p>Price: ${toy.price}</p>
      <p>Age: {toy.age}</p>
      <p>Category: {toy.category}</p>
    </div>
  )
}




