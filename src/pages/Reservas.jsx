import React from 'react'
import { ReservationApp } from '../components/Reservation/ReservationApp'

export const Reservas = () => {
  return (
    
    <div className="container">
      <div className="ptop"></div>
      <h2 className='titleAbout mt-5 mb-4'>RESERVA<br />TE ESPERAMOS!...</h2>
        <div className="reservation" id='about'>
          
          <p className="textReservation col-md-8 mx-auto my-5">
            ¡Reserva ahora y asegura tu lugar en una experiencia culinaria inolvidable! Disfruta de nuestra deliciosa gastronomía en un entorno acogedor. 
            Ya sea una cena romántica o una reunión con amigos, garantizamos un servicio excepcional y platos que deleitarán tu paladar. 
            ¡Haz tu reserva hoy y déjanos cuidar de cada detalle mientras tú te relajas y saboreas momentos únicos en nuestro restaurante!
          </p>

          <div className="col-md-8 mx-auto">
            <ReservationApp />
          </div>

      </div>
      
    </div>
    

  )
}
