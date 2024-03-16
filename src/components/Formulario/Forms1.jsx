import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore'

const Forms1 = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const nombre = form.elements['nombre'].value;
        const apellido = form.elements['apellido'].value;

        // Aquí se graban los datos en Firebase Firestore
        const db = firebase.firestore();
        await db.collection('reservas').add({
          nombre,
          apellido,
        });

        // Restablecer el formulario después de enviar los datos
        form.reset();
        setValidated(false);
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    }

    setValidated(true);
  };

  return (
    <>
      <div className="col-md-8 mx-auto">
        <div className='container g-0'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label className='textForm'>Nombre *</Form.Label>
                <Form.Control required type="text" placeholder="Nombre" name="nombre" className='formImput' />
                <Form.Control.Feedback type="invalid">Debe indicar el nombre</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label className='textForm'>Apellido *</Form.Label>
                <Form.Control required type="text" placeholder="Apellido" name="apellido" className='formImput' />
                <Form.Control.Feedback type="invalid">Debe indicar el apellido</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className='cardButton'>
              <Button variant="primary" type="submit" className='button'>Reservar</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Forms1;