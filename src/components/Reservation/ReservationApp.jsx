import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import './ReservationApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ReservationApp = () => {

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 10);



    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    <div className='container g-0'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label className='textForm'>Selecciona una fecha *</Form.Label>
          <Form.Control required type="date" placeholder="Fecha" defaultValue={today.toISOString().split('T')[0]} className='formImput' min={today.toISOString().split('T')[0]}  max={maxDate.toISOString().split('T')[0]}/>
          <Form.Control.Feedback type="invalid">Fecha inválida!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className='textForm'>Selecciona un Horario *</Form.Label>
          <Form.Control required type="time" placeholder="Horario" defaultValue="11:00" className='formImput' min="11:00" max="23:00"/>
          <Form.Control.Feedback type="invalid">Horario de atención de 11:00 a 23:00 horas!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label className='textForm'>Nombre *</Form.Label>
          <Form.Control required type="text" placeholder="Nombre" defaultValue="" className='formImput'/>
          <Form.Control.Feedback type="invalid">Debe indicar el nombre</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className='textForm'>Apellido *</Form.Label>
          <Form.Control required type="text" placeholder="Apellido" defaultValue="" className='formImput'/>
          <Form.Control.Feedback type="invalid">Debe indicar el apellido</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">        

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='textForm'>Email *</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" defaultValue="" className='formImput'/>
          <Form.Control.Feedback type="invalid">Debe indicar un correo válido</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label className='textForm'>Teléfono *</Form.Label>
          <Form.Control required type="tel" placeholder="Telefono" defaultValue="" className='formImput'/>
          <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
        </Form.Group>

      </Row>      

      <Row className="mb-4" as={Col} md="6">        

      <Form.Group as={Col} md="6" controlId="validationCustom07">
  <Form.Label className='textForm'>Número de personas *</Form.Label>
  <Form.Select aria-label="Default select" className='formInput' defaultValue="">
    <option value="" disabled hidden>Seleccione una opción</option>
    <option value="1">Una</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </Form.Select>
</Form.Group>

      </Row>          

      <Row className="mb-3">  
        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Check className='textForm pe-2' required label=" Condiciones del servicio" feedback="Debes aceptar antes de enviar." feedbackType="invalid"/>
        </Form.Group>

        <Form.Group as={Col} md="8" className="mb-3">
          <Form.Check className='textForm' required label=" Consiento la recepción de comunicaciones del restaurante por e-mail y/o SMS con fines comerciales" feedback="Debes aceptar antes de enviar." feedbackType="invalid"/>
        </Form.Group>
      </Row>    

      <div className='cardButton'>
              <Button variant="primary" type="submit" className='button'>Reservar</Button>
      </div>    

      </Form>
    </div>
    
  )
}
