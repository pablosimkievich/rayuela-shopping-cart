import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className='error-page-container'>
      <h1>Error 404. Página No Encontrada.</h1>
      
      <button
        className="btn"
        onClick={ () => navigate("/")}
        >Volver al Inicio
        </button>
    </div>
  )
}

