# practica-2-ARR
Práctica 2: Introducción a MongoDB<br>

Se implemena el API REST con un modelo Autor en la base de datos, el cuál tenga una relación con el modelo Libro. Siguiendo la relación simple de: Un Libro tiene un Autor, y un Autor puede tener muchos Libros.<br>

Para ejecutar la aplicación se deben seguir los siguientes pasos: <br>

git clone <br>
npm install               // instalar dependencias<br>
npm install multer --save // instalar middleware for handling multipart/form-data<br>
npm start                 // iniciar aplicación<br>

Para conectarse a la base de datos es necesario abrir:<br>
mongod.exe <br>
mongo.exe <br>
