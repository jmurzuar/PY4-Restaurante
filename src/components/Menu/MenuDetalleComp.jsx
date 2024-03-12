import React from 'react'
import { useParams } from 'react-router-dom'

import data from '../../menu.json'; 
import { Card, Col, Row } from 'react-bootstrap';

export const MenuDetalleComp = () => {
    const {itemName} = useParams()
    const platosFiltrados = data.platos.filter(plato => plato.item===itemName);
    return (
      <>
      <h1>{platosFiltrados[0].item}</h1>
      
      <div>{itemName}</div>
      <div>{platosFiltrados[0].imagen}</div>
      
      <div className="mt-5">
            <div className="ptop"></div>
            <div className='container'>    
            <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Menú<br/>El detalle</h2>
                <Card className='bodyCard h-100'>
                    <Card.Body className='d-flex flex-column'>
                        <Row>
                            <Col md={6} className='carImg'>
                                <Card.Img src={`../${platosFiltrados[0].imagen}`} alt={platosFiltrados[0].item} className="cardImg" />
                            </Col>
                            <Col md={6}>
                                <Card.Title className='bodyCardTitle'>{platosFiltrados[0].item}</Card.Title>
                                <Card.Text className='bodyCardParagraph'>{platosFiltrados[0].description}</Card.Text>
                                <Card.Text className="bodyCardPrice mt-auto"> Valor $ {platosFiltrados[0].price}.-</Card.Text>
                            </Col>                           
                        </Row>                        
                    </Card.Body>
                </Card>
            </div>

           
        </div>

      </>
    )
}
