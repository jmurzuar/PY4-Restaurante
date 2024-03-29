import React from 'react'
import './Blog.css';

export const Blog = () => {

    const blogPosts = [
        {
          id: 1,
          image: '/imagen02.jpeg',
          title: 'Receta de la semana: Tacos al pastor',
          date: '25.02.2024',
          author: 'Chef Juan Manuel',
          content: 'Hoy compartimos nuestra receta especial de tacos al pastor, ¡una delicia mexicana que no te puedes perder!'
        },
        {
          id: 2,
          image: '/imagen01.jpeg',
          title: 'Evento especial: Noche de música en vivo',
          date: '29.02.2024',
          author: 'Chef Juan Manuel',
          content: 'Acompáñanos este viernes para disfrutar de una noche de música en vivo en nuestro restaurante. ¡No te lo pierdas!'
        },
        {
          id: 3,
          image: '/imagen03.jpeg',
          title: 'Detrás del menú: Historia de nuestro platillo estrella',
          date: '10.03.2024',
          author: 'Chef Juan Manuel',
          content: 'Conoce la historia detrás de nuestro platillo más popular y descubre por qué se ha convertido en el favorito de nuestros clientes.'
        }
      ];
    
      return (
        <>
        <h2 className="Title-blog">Las novedades de nuestra cocina</h2>
        <div className="blog">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-details">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-date">Fecha: {post.date}</p>
                <p className="blog-author">Autor: {post.author}</p>
                <p className="blog-content">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
        </>
      );
    }