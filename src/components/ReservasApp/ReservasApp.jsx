import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
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

    const handleFormSubmit = async (e) => {
        e.preventDefault(); //Evita la recarga de la pagina
        if (validateForm()) { //Si el formulario es valido llama a createCliente
            await createCliente(); // Agrega la informacion a la base de datos
            clearForm(); // Limpia el formulario
            alert("Reserva Realizada") // Envia una alerta al usuario
        }
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


    function getDate(){
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}-${date}-${year}`
    }

    function validateForm() {
        if (nombre == "") {
            alert('El nombre es requerido');
            return false;
        } else if (email == "") {
                alert('El correo es requerido');
                return false;
            } else if (!email.includes("@")) {
                alert('El correo no es valido (falta @)');
                return false;
        } else if (telefono == "") {
            alert('El telefono es requerido');
            return false;
        } else if (fecha == "") {
            alert('La fecha es requerida');
            return false;
        } else if (personas == "") {
            alert('La cantidad de personas es requerida');
            return false;
        }
        else if (hora == "") {
            alert('La hora es requerida');
            return false;
        }
        // Si pasa todas las validaciones, devuelve true
        return true;

    }

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
                    <div className="d-flex justify-content-center custom-reserva-image">
                        
                    </div>
                </div>

          


        </section>
        </>
    );
};

export default ReservasApp;
