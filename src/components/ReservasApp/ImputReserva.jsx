import { Container, Form } from "react-bootstrap";
import "./ReservasApp.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Props
const InputReserva = ({ nombre, setNombre, email, setEmail, telefono, setTelefono, fecha, setFecha, personas, setPersonas, hora, setHora, getDate }) => {

    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 10);



    return (
        <Container className="mx-auto" style={{ maxWidth: "700px" }}>
            <Form>
                <Form.Group controlId="nombre" className="mb-4 mt-5">
                    <Form.Label className="custom-label-form">Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="custom-input-form"
                        required
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="email" className="mb-4">
                    <Form.Label className="custom-label-form">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        className="custom-input-form"
                     

                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    
                </Form.Group>

                <Form.Group controlId="telefono" className="mb-4">
                    <Form.Label className="custom-label-form">Teléfono</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="569 xxxxxxxx"
                        className="custom-input-form"

                        value={telefono}
                        onChange={(event) => setTelefono(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="fecha" className="mb-4">
                    <Form.Label className="custom-label-form">Fecha</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        className="custom-input-form"
                        min={today.toISOString().split('T')[0]}
                        max={maxDate.toISOString().split('T')[0]}
                        value={fecha}
                        onChange={(event) => setFecha(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="personas" className="mb-4">
                    <Form.Label className="custom-label-form">Personas</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingresa la cantidad de personas"
                        className="custom-input-form"

                        value={personas}
                        onChange={(event) => setPersonas(event.target.value)}
                    />
                </Form.Group>


                <Form.Group controlId="hora" className="mb-40">
                    <Form.Label className="custom-label-form">Hora</Form.Label>
                    <Form.Control
                        type="string"
                        placeholder="Ingresa la hora en formato 24h, ej. 14:00"
                        className="custom-input-form"

                        value={hora}
                        onChange={(event) => setHora(event.target.value)}
                    />
                </Form.Group>

            </Form>
        </Container>
    );
};

export default InputReserva;
