import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (

        <>
            <div className="footer">
            <div className="container_left">
                            <h5 className='text-center p-1 text-white'>Redes Sociales</h5>
                            <ul className="list-group text-center">
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/PY4-Restaurante/"><i className="bi bi-twitter"></i></Link>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/PY4-Restaurante/"><i className="bi bi-facebook"></i></Link>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/PY4-Restaurante/"><i className="bi bi-instagram"></i></Link>
                                </li>
                            </ul>
                        </div>
                <div className="container_right">
                            <h5 className='text-center p-1 text-white'>Contactos</h5>
                            <ul className="list-group text-center">
                                <li className="list-group-item bg-transparent border-0 text-white">
                                    <i className="bi-geo-alt"><a> Nuestra dirección</a></i>
                                    <div>
                                        <a>Germán Riesco 900, San Vicente</a>
                                    </div>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                    <i className="bi-telephone-inbound"><a> Teléfono</a></i>
                                    <div>
                                        <a>555-55-55</a>
                                    </div>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                    <i className="bi-stopwatch"><a> Horarios Atención</a></i>
                                    <div>
                                        <a>11:00 - 23:00</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
            
                        </div>
            <div className='text-final'> 
                <p className='text-central text-white legal'>
                            PY4 Aplicación "Restaurante" - DWFS C11 UDD ©2024 <br />
                            Todos los derechos reservados. - v1.2.0
                        </p>
            </div>
            
        </>

    )
}
