import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (

        <>
            <Card bg='primary rounded-0'>
                <Row>
                    <Col xs={12} lg={4} className="col-lg-4">
                        <div>
                            <h5 className='text-center p-1 text-white'>Redes Sociales</h5>
                            <ul className="list-group text-center">
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/"><i className="bi bi-twitter"></i></Link>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/"><i className="bi bi-facebook"></i></Link>
                                </li>
                                <li className="list-group-item bg-transparent border-0 text-white">
                                <Link to="/"><i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i></Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs={12} lg={8} className="col-lg-8">
                        <div>
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
                    </Col>




                </Row>

                <Row>
                <p className='text-center text-white legal'>
                            PY4 Aplicación "Restaurante" - DWFS C11 UDD © 2024. <br />
                            Todos los derechos reservados. - v1.0.0
                        </p>
                </Row>
             
            </Card >
        </>

    )
}