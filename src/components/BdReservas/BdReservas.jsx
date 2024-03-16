import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Button, Table } from 'react-bootstrap'
import "./BdReservas.css"


export const BdReservas = () => {
    const [reservas, setResevas] = useState([])
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [personas, setPersonas] = useState("")

 
    const reservasCollectionRef = collection(db, 'reservas') 


    const getReservas = async() => {
        const data = await getDocs(reservasCollectionRef)
        //console.log('Datos desde Firestore', data)
        setResevas(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        //console.log('Datos desde Firestore 222', movies)
    }


    const addMovie = async() => {
        await addDoc(reservasCollectionRef, {nombre, apellido})
        // await addDoc(moviesCollectionRef, {name: name, year: year, genero: genero})
        await getReservas()
        setFecha('')
        setHora('')
        setNombre('')
        setApellido('')
        setCorreo('')
        setTelefono('')
        setPersonas('')

    }

    useEffect(()=>{
        getReservas()
    }, [])

  return (
       
    <>

<h2 className="Title-reserva">Base de datos Reservas</h2>

    <div className='table-container'>

        
        {/* <input type='string' placeholder='name' value={name} onChange={(event) => setName(event.target.value)} />
        <input type='number' placeholder='year' value={year} onChange={(event) => setYear(event.target.value)} />
        <input type='string' placeholder='genero' value={genero} onChange={(event) => setGenero(event.target.value)} />

        <Button variant='primary' onClick={addMovie}>Agregar</Button> */}
        
        <Table striped bordered hover> 
        <thead>
            <tr className='cabeceras'>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Personas</th>
            <th>Opciones</th>
            </tr>
        </thead>

        <tbody>
            {
                reservas.map(reserva => (
                    <tr key={reserva.id}>
                        <td> {reserva.fecha}</td>
                        <td> {reserva.hora}</td>
                        <td> {reserva.nombre}</td>
                        <td> {reserva.email}</td>
                        <td> {reserva.telefono}</td>
                        <td> {reserva.personas}</td>
                        <td> 
                            <div className='opciones'>
                            <Button variant='warning'>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                            </div>
                            </td>

                    </tr>
                ))
            }

            </tbody>
        </Table></div>

        </>
  )
}