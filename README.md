![Esquema1](https://github.com/jmurzuar/PY4-Restaurante/blob/master/src/assets/banner.png)

# PROYECTO 4: Aplicación "Restaurante"

## **ÍNDICE**

* [1. Intro](#1-intro)
* [2. Estructura de la página](#2-Estructura)
* [3. Pantallas](#3-Pantallas)
* [4. Tecnologías Utilizadas](#4-Tecnologías-Utilizadas)
* [5. Principales Características](#5-Principales-Características)
* [6. Legal](#6-Legal)
* [7. Despliegue](#7-Despliegue)
  
****

## 1. Intro

Este proyecto está enfocado en construir una aplicación web para un restaurante.

Lo que deberás incluir como requisitos mínimos será:

Una sección o página sobre información principal del restaurante
Una sección de formulario de contacto
Una sección de datos de ubicación y correo electrónico
Como características opcionales:

Un componente que permita reservar una mesa en una hora y fecha específica para un usuario
Un componente que incluya el menú completo del restaurante
Adaptado a móviles
Un blog que incluya un artículo

"Vite" como el generador base de la aplicación
Componentes bajo "Hooks"
CSS para el aspecto visual de componentes
Cloud Firestore para el manejo de datos

[volver al índice](#ÍNDICE)
****

## 2. Estructura

### Estructura general de la página
![Esquema1](https://github.com/jmurzuar/PY4-Restaurante/blob/master/src/assets/esquema%20Inicio%20y%20nosotros.png)

![Esquema1](https://github.com/jmurzuar/PY4-Restaurante/blob/master/src/assets/esquema%20Inicio%20y%20nosotros.png)

![Esquema1](https://github.com/jmurzuar/PY4-Restaurante/blob/master/src/assets/esquema%20Inicio%20y%20nosotros.png)

Esta aplicación contiene 5 bloques, en 3 de ellos se utiliza JavaScript:

- HEADER, Sección con el nombre del Dashboard y reloj y fecha
- INDICADORES ECONÓMICOS CHILE, valores de principales indicadores chilenos del día, con gráfico de los últimos 12 valores históricos
- INDICADORES MONEDAS ELECTRÓNICAS, valores de las dos principales monedas electrónicas, con el último valore reportado y gráfico de los últimos 30 días, además se incluye un gráfico con actualiación cada 10 segundos, con los últimos 10 registros de bitcoin
- CLIMA CHILE, se muestran tarjetas con el valore actual del clima de 6 cuidades de Chile, incluye información de cuidad, temperatura, descripción del clima, velocidad del viento e ícono animado de la descripción del clima 
- FOOTER, información adicional de la página

[volver al índice](#ÍNDICE)
****

## 3. Pantallas

### Pantalla completa
![Pantalla](https://github.com/jmurzuar/PY4-Restaurante/blob/master/src/assets/pantalla%20Inicio%20y%20nosotros.png)




[volver al índice](#ÍNDICE)
****

## 4. Tecnologías Utilizadas

![LogosPY2](https://github.com/jmurzuar/PY3-API/blob/main/img/tecno1.png)

El objetivo principal de este proyecto fue desarrollar una aplicación que consuma una API, utilizando interfaz HTML, CSS y JavaScript

Aplicando:

- Prototipado simple que muestra un DASHBOARD con información externa y dinámica
- Etiquetas estándar HTML5.
- CSS, incluyendo técnicas Flexbox y Responsive Web Design.
- Se utiliza Fetch API y JSON para consumir y disponibilizar la información de las API's
- Se realiza control de versiones con GIT y GITHUB
- Se publica solución en netlify


![API](https://github.com/jmurzuar/PY3-API/blob/main/img/api.png)

Durante el desarrollo de este proyecto se han utilizado las siguientes API's 

- **openweathermap.org/api**, API pública con suscripción gratuita para seguimiento del clima en distintas ciudades del mundo
- **api.coincap.io**, API pública sin suscripción con información de las momedas electrónicas
- **mindicador.cl/api**, API pública Chilena sin suscripción que muestra información de los indicadores económicos Chilenos

Para realizar los gráficos, se utilizó la siguiente librería

- Chart.js


[volver al índice](#ÍNDICE)
****

## 5. Principales Características

En el desarollo de este proyecto, se cumple con:

### UI
- [X] Desarrollar prototipado simple.
- [X] Aplicar en todo el sitio HTML semántico de estándar no.5 (HTML5).
- [X] Aplicar tipos de selectores en CSS.
- [X] Sección Información del restaurante.
- [X] Vista en móviles.
- [X] Sección de reserva.
- [X] Blog con un artículo.


### REACTREACT
- [X] Uso de props
- [X] Uso de hooks useState
- [X] Sección Información del restaurante.
- [X] Vista en móviles.
- [X] Sección de reserva.
- [X] Blog con un artículo.

### CONTROL DE VERSIONES
- [X] Utilizar GIT para en control de versiones.
- [X] Crear un repositorio en GitHub y realizar mínimo 5 "commits" en tu repositorio.
- [X] Crear una URL para compartir (netlify)
- [X] Se crea archivo README con la descripción dentro del repositorio


[volver al índice](#ÍNDICE)
****

## 6. Legal

- Esta página fue creada con fines educativos, NO COMERCIAL, contiene imagenes con derechos de autor que se han utilizado solo para ejemplos
- Página creada en el marco del Bootcamp desarrollo web full stack, corte 11 de la Universidad de Desarrrollo - Chile
- Creado en Marzo 2024
  
[volver al índice](#ÍNDICE)
****

## 7. Despliegue

Link al proyecto publicado en netlify.com (https://py4-restaurante.netlify.app/)

[volver al índice](#ÍNDICE)
