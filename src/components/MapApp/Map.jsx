import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import './Map.css';

import icon from '/markericon.png';
import iconShadow from '/markershadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Map = () => {


    
    return (
      <>
      <h2 className="Title-map">Te estamos esperando!!!</h2>
    <div className="location-container">
      
      <div className="map">
        <MapContainer center={[-34.43963, -71.07724]} zoom={17} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <Marker position={[-34.4394, -71.07740]} draggable={false}>
            <Popup>
            Germán Riesco 900<br /> San Vicente.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="contact-info">
        <h2>Una historia de Sabor familiar</h2>
        <p>Desde 1940 estamos alimentando con los sabores de nuestra tierra, una tradición familiar que a pasado de generación en generación, hoy tu puedes ser parte de esta experiencia única, <strong>te esperamos!!!</strong></p>
        <br />
        <h2>Información de Contacto</h2>
        <p>Dirección: Germán Riesco 900, San Vicente</p>
        <p>Teléfono: 123-456-7890</p>
        <p>Correo: react-flavor@example.com</p>
        <br />
        <h2>Horarios de atención</h2>
        <p>Lunes - Viernes: 11:00 - 23:00</p>
        <p>Sábados: 11:00 - 02:00</p>
        <p>Domingos: 13:00 - 17:00</p>
      </div>
    </div>
    </>
    )
  
}
