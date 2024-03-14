import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export const ModalApp = ({ show, onClose }) => {


  return (
    <>
      <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ejemplo de Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Este es un modal de ejemplo. Puedes poner cualquier contenido aquí.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={onClose}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
