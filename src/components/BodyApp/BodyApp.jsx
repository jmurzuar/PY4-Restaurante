import React from 'react'
import './BodyApp.css';
import { Link } from 'react-router-dom';

export const BodyApp = () => {
  return (
    
    <div className="background-container">
      <div className="content">
        <h1>Bienvenidos a nuestro Restaurante</h1>
        <p>Descube nuestro delicioso menú</p>
        <Link to="/Menu" className="btn btn-primary">Ir al menú</Link>
        
      </div>
    </div>

    )
}
