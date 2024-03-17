import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore'; // Importar deleteDoc de 'firebase/firestore'
import { Button, Table, Card, CardGroup } from 'react-bootstrap';
import "./BdReservas.css";

export const BdReservas = () => {
    const [reservas, setResevas] = useState([]);

    const reservasCollectionRef = collection(db, 'reservas');

    const getReservas = async () => {
        try {
            const data = await getDocs(reservasCollectionRef);
            setResevas(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        } catch (error) {
            console.error('Error al obtener reservas:', error);
        }
    };

    const eliminarElemento = async (elementoId) => {
        try {
            const elementoRef = doc(db, 'reservas', elementoId);
            await deleteDoc(elementoRef);
            console.log('Elemento eliminado correctamente');
            await getReservas(); // Actualizar la lista de reservas después de eliminar el elemento
        } catch (error) {
            console.error('Error al eliminar el elemento:', error);
        }
    };

    useEffect(() => {
        getReservas();
    }, []);

    return (
        <>
            <h2 className="Title-reserva">Base de datos Reservas</h2>
            

            
            <div className="card-container1">
                
                    {reservas
                        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
                        .map(reserva => (
                            
                            <CardGroup className="card-grupo1">

                            <Card key={reserva.id}>
                                <Card.Body>
                                    <Card.Title className="card-titulo">{reserva.fecha.toString()} - {reserva.hora}</Card.Title>
                                    <Card.Text>
                                        <strong>Nombre:</strong> {reserva.nombre}<br />
                                        <strong>Correo:</strong> {reserva.email}<br />
                                        <strong>Teléfono:</strong> {reserva.telefono}<br />
                                        <strong>Personas:</strong> {reserva.personas}<br />
                                    </Card.Text>
                                    <Card.Footer className="card-footer">
                                    <Button variant="danger" onClick={() => eliminarElemento(reserva.id)}>Eliminar</Button>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        ))}
                
            </div>

        </>
    );
};
