# FootyBet - Aplicación de Apuestas Deportivas

FootyBet es una aplicación móvil de apuestas deportivas que permite a los usuarios explorar próximos eventos deportivos, realizar apuestas y llevar un seguimiento de su historial de apuestas. Este proyecto fue desarrollado utilizando Ionic y Firebase como backend para autenticación y almacenamiento de datos.

## Descripción

La aplicación ofrece una interfaz simple e intuitiva para que los usuarios puedan:
- Explorar eventos deportivos de los próximos cinco días.
- Apostar en eventos seleccionados y consultar el historial de apuestas.
- Visualizar detalles de cada evento, incluyendo los equipos participantes, fecha y estado.
- Crear y gestionar su perfil, con autenticación segura a través de Firebase.

## Características

- **Autenticación de usuarios**: Registro e inicio de sesión seguros utilizando Firebase.
- **Apuestas personalizadas**: Posibilidad de seleccionar eventos y realizar apuestas.
- **Historial de apuestas**: Registro completo de apuestas anteriores, con detalles de fecha, resultado, monto y estado.
- **Generación de comprobante**: Opción para exportar cada apuesta realizada como un PDF descargable.

## Requisitos Previos

Antes de instalar la aplicación, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Android Studio](https://developer.android.com/studio) (opcional, si deseas compilar para Android)

## Instalación

Para configurar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tuusuario/FootyBet.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd FootyBet
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Configura Firebase:
   - Crea un proyecto en [Firebase](https://firebase.google.com/).
   - Agrega la configuración de tu proyecto Firebase en `src/environments/environment.ts`.

5. Para iniciar la aplicación en el navegador:

    ```bash
    npm run start
    ```

6. Para construir la app en Android y generar un APK:

    ```bash
    ionic cordova platform add android
    ionic cordova build android --prod --release
    ```

## Uso

### Funcionalidades Principales

1. **Pantalla de Inicio de Sesión y Registro**: Permite al usuario iniciar sesión o registrarse.
2. **Pantalla Principal**: Muestra una lista de eventos deportivos disponibles para apostar.
3. **Pantalla de Apuestas**: Permite al usuario ver un historial de sus apuestas realizadas y exportarlas como PDF.

## Dependencias Principales

- **Ionic Framework**: Para la construcción de interfaces móviles.
- **Firebase**: Para autenticación y gestión de datos.
- **jsPDF**: Para la generación de comprobantes en PDF.

## Contribuciones

Las contribuciones a FootyBet son bienvenidas. Si deseas colaborar, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request para revisión.

## Autores
Gonzalo Ponce
Alan Antezana

## Contacto

Para preguntas o comentarios, por favor contacta a alanantezana1303@gmail.com.
