import { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";
import InputReserva from '../ReservasApp/ImputReserva';
import "./ReservasApp.css"
import { Link } from 'react-router-dom';

const ReservasApp = () => {
    const clientesCollectionRef = collection(db, 'reservas');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [personas, setPersonas] = useState('');
    const [hora, setHora] = useState('');


    const [showModal, setShowModal] = useState(false);
    const [modalMessage1, setModalMessage1] = useState('');
    const [modalMessage2, setModalMessage2] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault(); //Evita la recarga de la pagina
        if (validateForm()) { //Si el formulario es valido llama a createCliente
            await createCliente(); // Agrega la informacion a la base de datos
            clearForm(); // Limpia el formulario
            showModalWithMessage('Felicitaciones', ' Su reserva se ha realizada');
            
            // alert("Reserva Realizada") // Envia una alerta al usuario
        }
    };

    const handleFelicitaciones = async (e) => {
        e.preventDefault(); //Evita la recarga de la pagina
        
        setShowModal(false);
        window.scrollTo(0, 0);
            
    
    };


    //  Agrega un nuevo documento a la colección "reservas" en la base de datos con la información del cliente.
    const createCliente = async () => {
        if (validateForm()) {
            await addDoc(clientesCollectionRef, { nombre, email, telefono, fecha, personas, hora });
        }
    };

    // Restablece los valores de los input
    const clearForm = () => {
        setNombre('');
        setEmail('');
        setTelefono('');
        setFecha('');
        setPersonas('');
        setHora('');
    };


    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}-${date}-${year}`
    }

    function validateForm() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidDate = (dateString) => {
            const dateObject = new Date(dateString);
            return !isNaN(dateObject.getTime());
        };

        const horaRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

        const isValidHourRange = (hourString) => {
            const hour = parseInt(hourString.split(':')[0]);
            return hour >= 11 && hour <= 23;
        };


        if (nombre.trim() === "") {
            showModalWithMessage('Validación Formulario', 'El nombre es requerido');
            return false;
        } else if (email.trim() === "") {
            showModalWithMessage('Validación Formulario', 'El correo es requerido');
            return false;
        } else if (!emailRegex.test(email.trim())) {
            showModalWithMessage('Validación Formulario', 'El correo no es valido');
            return false;
        } else if (telefono.trim() === "") {
            showModalWithMessage('Validación Formulario', 'El telefono es requerido');
            return false;
        } else if (fecha.trim() === "" || !isValidDate(fecha.trim())) {
            showModalWithMessage('Validación Formulario', 'La fecha es requerida');
            return false;
        } else if (personas.trim() === "") {
            showModalWithMessage('Validación Formulario', 'La cantidad de personas es requerida');
            return false;
        } else if (personas < 1 || personas > 10) {
            showModalWithMessage('Validación Formulario', 'Solo se pueden resevar entre 1 y 10 personas');
            return false;
        } else if (hora.trim() === "" || !horaRegex.test(hora.trim())) {
            showModalWithMessage('Validación Formulario', 'La hora es requerida, formato 24h (15:00)');
            return false;
        } else if (!isValidHourRange(hora.trim())) {
            showModalWithMessage('Validación Formulario', 'La hora debe estar entre las 11:00 y 23 horas');
            return false;
        }
        // Si pasa todas las validaciones, devuelve true
        return true;

    }

    const showModalWithMessage = (message1, message2) => {
        setModalMessage1(message1);
        setModalMessage2(message2);
        setShowModal(true);
    };

    return (

        <>
            <section>


                <h2 className="Title-reserva">Te estamos esperando!!!</h2>

                <p className="Texto-fomat">
                    ¡Reserva ahora y asegura tu lugar en una experiencia culinaria inolvidable! Disfruta de nuestra deliciosa gastronomía en un entorno acogedor. Ya sea una cena romántica o una reunión con amigos, garantizamos un servicio excepcional y platos que deleitarán tu paladar. ¡Haz tu reserva hoy y déjanos cuidar de cada detalle mientras tú te relajas y saboreas momentos únicos en nuestro restaurante!
                </p>

                <div className="btn-reserva"><Link to="/BaseReservas" className="btn btn-primary">VER RESERVAS</Link></div>

                <div className="container">
                    <form onSubmit={handleFormSubmit}>
                        <InputReserva
                            nombre={nombre}
                            setNombre={setNombre}
                            email={email}
                            setEmail={setEmail}
                            telefono={telefono}
                            setTelefono={setTelefono}
                            fecha={fecha}
                            setFecha={setFecha}
                            personas={personas}
                            setPersonas={setPersonas}
                            hora={hora}
                            setHora={setHora}
                            getDate={getDate}
                        />
                        <div className='p-4'>

                            <Button type="submit" className="mt-3 custom-reserva-button d-block mx-auto">
                                Enviar
                            </Button>
                        </div>
                    </form>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>¡{modalMessage1}!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {modalMessage2}
                        </Modal.Body>
                        <Modal.Footer>
                            {modalMessage1 === "Felicitaciones" ? (
                                <Button variant="success" onClick={handleFelicitaciones}>Cerrar</Button>
                            ) : (
                                <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button>
                            )}
                            {/* <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button> */}
                        </Modal.Footer>
                    </Modal>

                </div>




            </section>
        </>
    );
};

export default ReservasApp;
