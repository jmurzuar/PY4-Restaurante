import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import './Map.css';
import imagen01 from '../../../public/imagen01.jpeg';
import imagen02 from '../../../public/imagen02.jpeg';
import imagen03 from '../../../public/imagen03.jpeg';

export const Map = () => {

  L.Icon.Default.mergeOptions({
    // Verifica que la ruta sea correcta y que esté accesible
    
    
    
})
    
    return (
    <div className="location-container">
      <div className="map">
        <MapContainer center={[-34.43963, -71.07724]} zoom={17} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <Marker position={[-34.43963, -71.07724]}>
            <Popup>
            Germán Riesco 900<br /> San Vicente.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Dirección: Germán Riesco 900, San Vicente</p>
        <p>Phone: 123-456-7890</p>
        <p>Correo: react-flavor@example.com</p>
        <h2>Horarios de atención</h2>
        <p>Lunes - Viernes: 11.00 - 23.00</p>
        <p>Sábados: 11:00 - 02:00</p>
        <p>Domingos: 13:00 - 17:00</p>
      </div>
    </div>

    )
  
}
