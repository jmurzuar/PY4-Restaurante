import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Menu } from '../pages/Menu'
import { Reservas } from '../pages/Reservas'
import { MenuDetails } from '../pages/MenuDetails'
import { Blog } from '../components/BlogApp/Blog'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRoutes = () => {
  return (
    
    <>
    
    <Routes>
        <Route path="/PY4-Restaurante/" element={<Home />} />
        <Route path="/PY4-Restaurante/about" element={<About />} />
        <Route path="/PY4-Restaurante/menu" element={<Menu />} />
        <Route path='/PY4-Restaurante/menu/:itemName' element={<MenuDetails />} />
        <Route path="/PY4-Restaurante/blog" element={<Blog />} />   
        <Route path="/PY4-Restaurante/reservas" element={<Reservas />} />
        <Route path='/PY4-Restaurante/*' element={<Navigate to='/PY4-Restaurante/' />} />
    </Routes>
    </>

  )
}
