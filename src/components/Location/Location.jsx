import React from 'react'
import { NavLink } from 'react-router-dom'
import './Location.css';

export const Location = () => {
  return (
    
    <div id='contenedor'>
                {/* <img id='imagen' src="" alt="pedidos" /> */}
                <NavLink to="https://www.ubereats.com/cl-en" target="_blank">
                <button className="menu-button">ORDENA UBER-EATS</button> </NavLink>
                <NavLink to="https://www.pedidosya.cl/" target="_blank">
                <button className="menu-button">ORDENA PEDIDOS YA</button> </NavLink>
            </div>
    
  )
}
