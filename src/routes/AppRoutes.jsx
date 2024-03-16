import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Menu } from '../pages/Menu'
import { Reservas } from '../pages/Reservas'
import { MenuDetails } from '../pages/MenuDetails'
import { Blog } from '../components/BlogApp/Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseReservas } from '../pages/BaseReservas'

export const AppRoutes = () => {
  return (
    
    <>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/menu/:itemName' element={<MenuDetails />} />
        <Route path="/blog" element={<Blog />} />   
        <Route path="/reservas" element={<Reservas />} />
        <Route path='/BaseReservas' element={<BaseReservas />} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
    </>

  )
}
