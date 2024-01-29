# Arquitectura del backend para un Ecommerce

## Lenguaje de programacón

EL lenguaje de programación usado seria javascript con el súper set Typescript para un tipado fuerte  y el uso  POO para la programación con el entorno de node.js

## Pruebas unitarias.

Para las pruebas unitarias el uso de Jest para probar el funcionamiento de nuestro codigo como son funciones clases e interfaces y el uso de **POSTMAN** para las pruebas de endpoint de nuestras API.
## Framework
En el uso de framework se puede usar dos:

- **Express.js:** de manera fácil de uso es un framework de node.js nos facilita el uso para crear una arquitectura basada en microservicios hacer API con javascript o Typescript.
- **Nest.js** Es un framework de escalabilidad el uso es con Typescript podemos modularizar nuestro proyecto a microservicios.

## Base de Datos

El uso de base de datos tendria en cuenta que son microservicios podemos partir de diferentes base de datos por microservicio o compartir la base de datos.

- **Bases de datos SQL**: usar **MYSQL** o **PostgreSQL** para que los datos sean consistentes como son en datos de usuario, interacción entre el carrito de comprar los productos existentes con un manejo de relación. 
- **Bases de datos noSQL:** El uso seria con **Mongo DB** para microservicios mas flexibles en sus datos como un chatbot o un chat de servicio al cliente, para generar el traking de la compra y los comentarios de los clientes a los productos.
## Arquitectura de microservicios
El uso de microservicios para el manejo de toda la aplicación podemos dividir nuestro ecommerce en partes que pueda ser escalable a futuro y mantenible ejemplo:
- un microservicio para la interfaz de usuario
- un microservicio para el dashboard del cliente


## API RESTful
La construcción de una  API para la comunicación entre el frontend y backend las reglas de negocio para un manejo en nuestra API organizado .
###  organizacion de carpetas de un API

- MODELS
- SCHEMAS
- LIBS
- CONTROLLERS
- MIDDLEWARES
- SERVICES
- CONFIG
- DB
- HELPERS
   - app.js
   - index.js
## Cache y CDN
Uso de CDN (Content Delivery Network) para distribuir los recursos estáticos y acelerar la carga.