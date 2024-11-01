FootyBet - Aplicación de Apuestas Deportivas
FootyBet es una aplicación móvil de apuestas deportivas que permite a los usuarios explorar próximos eventos deportivos, realizar apuestas y llevar un seguimiento de su historial de apuestas. Este proyecto fue desarrollado utilizando Ionic y Firebase como backend para autenticación y almacenamiento de datos.

Descripción
La aplicación ofrece una interfaz simple e intuitiva para que los usuarios puedan:

Explorar eventos deportivos de los próximos cinco días.
Apostar en eventos seleccionados y consultar el historial de apuestas.
Visualizar detalles de cada evento, incluyendo los equipos participantes, fecha y estado.
Crear y gestionar su perfil, con autenticación segura a través de Firebase.
Características
Autenticación de usuarios: Registro e inicio de sesión seguros utilizando Firebase.
Apuestas personalizadas: Posibilidad de seleccionar eventos y realizar apuestas.
Historial de apuestas: Registro completo de apuestas anteriores, con detalles de fecha, resultado, monto y estado.
Generación de comprobante: Opción para exportar cada apuesta realizada como un PDF descargable.
Requisitos Previos
Antes de instalar la aplicación, asegúrate de tener instalado:

Node.js
Ionic CLI
Android Studio (opcional, si deseas compilar para Android)
Instalación
Para configurar este proyecto localmente, sigue estos pasos:

Clona este repositorio:

bash
Copiar código
git clone https://github.com/tuusuario/FootyBet.git
Navega al directorio del proyecto:

bash
Copiar código
cd FootyBet
Instala las dependencias:

bash
Copiar código
npm install
Configura Firebase:

Crea un proyecto en Firebase.
Agrega la configuración de tu proyecto Firebase en src/environments/environment.ts.
Para iniciar la aplicación en el navegador:

bash
Copiar código
ionic serve
Para construir la app en Android y generar un APK:

bash
Copiar código
ionic cordova platform add android
ionic cordova build android --prod --release
Uso
Funcionalidades Principales
Pantalla de Inicio de Sesión y Registro: Permite al usuario iniciar sesión o registrarse.
Pantalla Principal: Muestra una lista de eventos deportivos disponibles para apostar.
Pantalla de Apuestas: Permite al usuario ver un historial de sus apuestas realizadas y exportarlas como PDF.
Dependencias Principales
Ionic Framework: Para la construcción de interfaces móviles.
Firebase: Para autenticación y gestión de datos.
jsPDF: Para la generación de comprobantes en PDF.
Contribuciones
Las contribuciones a FootyBet son bienvenidas. Si deseas colaborar, sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Crea un Pull Request para revisión.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Para preguntas o comentarios, por favor contacta a tuemail@dominio.com.

