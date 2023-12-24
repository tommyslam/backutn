# Proyecto Final - Plataforma de Cursos Online
¡Bienvenido/a al Proyecto Final! Esta es mi aplicación creada con react y mysql.
## Autor
- Tomas Federico Slaminsky
## Descripción del Proyecto
Aplicacion creada para una negocio con empleados. Con un registro de empleados y un login para los mismos. Aplicacion con secciones navegables segun el ROL del usuario. Luego de hacer el login, la sesion estara iniciada con los datos de dicho usuario, en la cual podra tener acceso a un home de bienvenida y a una seccion en la que podra ver sus datos personales cargados en el registro y ademas su valor hora del mes, este valor hora sera cargado por default con la hora base de todos los empleados de la empresa, luego, el administrador dentro de 48 hs despues del registro cambiara el valor hora del empleado segun su experiencia, antiguedad y valores agregados. tambien en la aplicación tendra una seccion en la que puede ver las novedades mensales de la empresa cargadas por los administradores y tambien una seccion sobre datos importantes de la aplicacion. Por otra parte, los usuarios con rol de administrador tendran acceso a dichas secciones y otras secciones extras, una para editar (menos mail y contraseña) o eliminar los datos de los usuarios (menos mail y contraseña) y otra para cargar, editar o eliminar las novedades mensuales de la empresa. El administrador tendra la opcion de dar el rol de administrador a un usuario con rol de empleado, entonces este empleado ahora tendra desbloqueadas las funciones de los administradores y podra editar, eliminar o cargar datos.
## Características
La aplicación cuenta con las siguientes funciones:
- Registro
- Login
- Logout
- Carga y envio de datos desde formularios
- editar o eliminar usuarios y datos segun el rol del usuario.
## Base de Datos
- SQL: creada para almacenar los datos de usuarios, textos y fechas.
## Backend (Node.js)
bcrypt: Librería para el cifrado de contraseñas. Se utiliza para almacenar las contraseñas de manera segura mediante el uso de funciones de hash.
cookie-parser: Middleware para analizar las cookies en las solicitudes del cliente. Facilita el manejo de las cookies en las aplicaciones web.
cors: Middleware de Express para habilitar el intercambio de recursos de origen cruzado (CORS). Permite que un servidor indique a los navegadores web si permitir que una página web acceda a recursos de otro dominio.
dotenv: Módulo para cargar variables de entorno desde un archivo .env. Permite la configuración de variables de entorno de manera sencilla en el desarrollo de aplicaciones.
express: Framework web de Node.js para crear API de forma rápida y sencilla. Facilita la creación de rutas, middleware y la gestión de solicitudes y respuestas HTTP.
express-session: Middleware para gestionar sesiones en Express. Permite almacenar datos del usuario entre solicitudes, lo que es útil para mantener el estado de la sesión.
express-validator: Middleware para validar y sanear datos de entrada en las solicitudes HTTP en Express. Facilita la validación de formularios y otros datos de usuario.
jsonwebtoken: Implementación de JSON Web Tokens (JWT) para autenticación. Permite generar y verificar tokens de seguridad que se utilizan para autenticar a los usuarios.
mysql2: Paquete para interactuar con bases de datos MySQL en Node.js. Permite realizar consultas y operaciones en una base de datos MySQL.
## Frontend (React)
fortawesome: Conjunto de íconos vectoriales. Proporciona una amplia variedad de íconos para mejorar la interfaz de usuario.
testing-library: Biblioteca de pruebas para React. Ayuda a realizar pruebas unitarias y de integración en componentes React.
axios: Cliente HTTP basado en promesas para realizar solicitudes a un servidor. Facilita la comunicación con el backend desde el frontend.
bootstrap: Framework CSS para el diseño y la maquetación de la interfaz de usuario. Proporciona componentes preestablecidos y estilos para facilitar el desarrollo.
mdb-react-ui-kit: Kit de interfaz de usuario de React desarrollado por MDB. Proporciona componentes adicionales y estilos para el desarrollo de aplicaciones web.
react: Biblioteca JavaScript para construir interfaces de usuario. Utilizada para desarrollar el frontend de la aplicación.
react-bootstrap: Implementación de componentes de Bootstrap como elementos de React. Permite utilizar los componentes de Bootstrap de manera nativa en aplicaciones React.
react-router-dom: Enrutamiento para aplicaciones de React, facilitando la navegación entre diferentes vistas de la aplicación.
react-scripts: Herramientas de scripts preconfiguradas para proyectos de React. Simplifica la configuración y el desarrollo de aplicaciones React.
sweetalert2: Biblioteca para mostrar ventanas modales personalizadas en el navegador. Se utiliza para crear alertas y diálogos interactivos.
web-vitals: Librería para medir el rendimiento de una aplicación web. Ayuda a monitorear y mejorar la experiencia del usuario en términos de velocidad y rendimiento.
## Instalación y Uso
1. Clona este repositorio desde GitHub
2. Instalar las dependencias necesarias en cada carpeta (backend y frontend)
3. Volver a la carpeta principal del proyecto
### Deploy de front y back:
- front: https://frontutn-g8xqvq1p4-tomas-projects-6f450377.vercel.app/
- back: https://vercel.com/tomas-projects-6f450377/backutn
### Contacto
tommyslaminsky@gmai.com

