# Phonebook - Fullstack Helsinki.

Este proyecto es parte del curso **Fullstack Helsinki** y corresponde a la sección **Parte-2: Comunicándose con el servidor**. La aplicación **Phonebook** es una agenda telefónica que permite agregar, buscar y eliminar contactos. Utiliza React para el frontend y un servidor JSON como backend para gestionar los datos.

## Estructura del Proyecto

- **Frontend**: Desarrollado con React, se encarga de la interfaz de usuario y la interacción con el backend.
- **Backend**: Utiliza un servidor JSON (json-server) para simular una API RESTful y gestionar los datos de la agenda telefónica.

## Instrucciones

1. **Clona el repositorio (si no lo has hecho):**
   Ejecuta el siguiente comando en tu terminal para clonar el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/anggifit/fullstackHelsinki.git

   ```

2. **Acceder a la carpeta de Phonebook**
   Navega hasta la carpeta del conjunto de ejercicios que quieras ejecutar. Por ejemplo:

   ```bash
   cd Parte-2/Phonebook

   ```

3. **Instala las dependencias del frontend**
   Instala las dependencias necesarias para ejecutar la aplicación. Asegúrate de tener Node.js instalado.

   ```bash
   npm install

   ```

4. **Inicia el servidor JSON (backend)**
   Abre una terminal y ejecuta el siguiente comando para iniciar el servidor JSON en el puerto 3001:

   ```bash
       npm run server
   ```

   El servidor JSON utiliza el archivo db.json como base de datos. Puedes modificar este archivo para agregar o cambiar datos iniciales.

5. **Inicia el servidor de desarrollo de React (frontend)**

   Abre otra terminal (sin cerrar la anterior) y ejecuta el siguiente comando para iniciar la aplicación React:

   ```bash
       npm run dev
   ```

6. **Usa la aplicación**
   - Abre tu navegador y visita http://localhost:5173.
   - Interactúa con la aplicación para agregar, buscar o eliminar contactos.
   - El frontend se comunicará automáticamente con el backend (servidor JSON) para gestionar los datos.

## Contributing

Si tienes alguna pregunta, sugerencia o encuentras un problema con los ejercicios, abre un issue en este repositorio o envía una pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
