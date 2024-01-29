# Políticas de nomenclatura:
## 1. Reglas generales.
 - Para tener un estándar la mejor forma es escribir  nuestro código en el idioma ingles.
 - No usar nombre genéricos como son x,y, z etc.
  ###
  ## 2. Variables y funciones.

  - El uso de **camelCase** para las variables y funciones ejemplo:
  
  ``` 

  function getNumber(valueNumber){
    const result=valueNumber*2
    return result
  }

  ```
  - Nombre Descriptivos que reflejen el propósito de la variable o la función.
  - No usar prefijos y sufijos.
  - En las funciones usar acciones como nombre que refleje su funcionalidad.
Clases e interfaces.
## 3. Clases e interfaces.
-Utilizar **PascalCase** para nombres de clases e interfaces ejemplo:
 ``` 

  Class User{
    name:string;
    email:string;
    password:string;
  }

  ```
- Deben de cumplir con los mismos requerimientos de las funciones y variables su uso debe ser entendible a su uso y debe de ser corto.
## 4. Base de datos.
- El uso de plural para las entidades en la base de datos como por ejemplo : _users_ en lugar de _user_.
- Que se ha coherente y sencilla la descripción de la entidad.
- El uso de [ “_” ] del subrayado cuando se necesita expresar un espacio ejemplo: user_id.
## 5. Git.
- Nombrar ramas en forma descriptiva como, "feacture/new-function"
- EL uso de commits con mensajes claros y concisos que describan los cambios realizados en el código.
## 6. Proyectos/Carpetas.
El uso de **(snake_case)**  [ “_” ] del subrayado o el uso de **(kebab-case)** [ “-” ]  guion  cuando se necesita expresar un espacio en la carpeta como "api_v1" o "api-v1".