import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiHome } from "react-icons/ci"
import './NotFound.css'

export const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className='error-page-container'>
      <h1 className='error-title' >Error 404. Página No Encontrada.</h1>
      
      <button
        className="btn home-btn"
        onClick={ () => navigate("/")}
        >Volver al Inicio
        <CiHome className="home-icon" />
        </button>
    </div>
  )
}

