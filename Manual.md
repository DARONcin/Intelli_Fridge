📦 Intelli-Fridge - Documentación de Funciones (Web)

📚 Introducción

Bienvenido a la documentación de funciones de la parte web de nuestro proyecto integrador. Aquí encontrarás una descripción detallada de las funcionalidades implementadas, con ejemplos de código y explicaciones claras para facilitar el desarrollo y la colaboración.

🗂 Tabla de Contenidos

    🚀 Función de Inicialización de la Página
    🔑 Función de Autenticación con Google
    📹 Función de Visualización de Cámara
    🏁 Conclusión

🚀 Función de Inicialización de la Página
Descripción

Esta función se ejecuta cuando se carga la página web. Se encarga de inicializar los elementos de la interfaz de usuario y de cargar datos esenciales para el funcionamiento de la página.
💡 Funcionalidad

    Inicializa componentes de la interfaz de usuario.
    Realiza solicitudes de datos iniciales al servidor.
    Configura eventos de escucha para la interacción del usuario.

🛠 Implementación

Archivo: src/pages/index.astro

javascript

window.addEventListener('load', function() {
    // Inicializar componentes
    initNavbar();
    initHeroSection();
    
    // Cargar datos iniciales
    fetchInitialData();

    // Configurar eventos
    setupEventListeners();
});

🔍 Explicación de Funciones

    initNavbar(): Inicializa la barra de navegación con sus elementos.
    initHeroSection(): Configura la sección principal de la página (Hero Section).
    fetchInitialData(): Realiza una solicitud al servidor para obtener los datos iniciales necesarios.
    setupEventListeners(): Configura los eventos de escucha para la interacción del usuario en la página.

🔑 Función de Autenticación con Google
Descripción

Esta función permite a los usuarios iniciar sesión en la aplicación web utilizando sus cuentas de Google. Gestiona el flujo de autenticación y redirige al usuario tras un inicio de sesión exitoso.
💡 Funcionalidad

    Inicia el flujo de autenticación con Google.
    Verifica las credenciales del usuario.
    Gestiona el estado de autenticación.
    Redirige al usuario a la página principal tras un inicio de sesión exitoso.

🛠 Implementación

Archivo: src/pages/login.astro

javascript

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

document.getElementById('googleLoginButton').addEventListener('click', function() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // Guardar información del usuario y redirigir
            saveUserInformation(user);
            window.location.href = 'main.html';
        })
        .catch((error) => {
            console.error('Error en la autenticación con Google:', error);
        });
});

🔍 Explicación de Funciones

    getAuth(): Obtiene la instancia de autenticación de Firebase.
    signInWithPopup(auth, provider): Inicia el flujo de autenticación con Google utilizando un popup.
    saveUserInformation(user): Guarda la información del usuario autenticado.

📹 Función de Visualización de Cámara
Descripción

Esta función permite a los usuarios acceder a la visualización en tiempo real de la cámara dentro del refrigerador, utilizando Firebase para obtener el flujo de video.
💡 Funcionalidad

    Solicita el flujo de video de la cámara a través de Firebase.
    Muestra el flujo de video en la interfaz de usuario.

🛠 Implementación

Archivo: src/pages/camera.astro

javascript

import { getStorage, ref, getDownloadURL } from 'firebase/storage';

document.getElementById('viewCameraButton').addEventListener('click', function() {
    const storage = getStorage();
    const cameraRef = ref(storage, 'path/to/camera-feed');

    getDownloadURL(cameraRef)
        .then((url) => {
            const videoElement = document.getElementById('cameraFeed');
            videoElement.src = url;
            videoElement.play();
        })
        .catch((error) => {
            console.error('Error al obtener el feed de la cámara:', error);
        });
});

🔍 Explicación de Funciones

    getStorage(): Obtiene la instancia de almacenamiento de Firebase.
    ref(storage, 'path/to/camera-feed'): Crea una referencia al flujo de video de la cámara en el almacenamiento de Firebase.
    getDownloadURL(cameraRef): Obtiene la URL de descarga del flujo de video de la cámara.
    document.getElementById('cameraFeed').src = url: Establece la URL del video en el elemento de video de la página.
    document.getElementById('cameraFeed').play(): Inicia la reproducción del video en la página.

🏁 Conclusión

Esta documentación proporciona una visión general de las funciones principales utilizadas en la parte web del proyecto integrador. Cada sección incluye una descripción de la función, su funcionalidad, el archivo en el que se debe implementar y un ejemplo de implementación en JavaScript. Esta documentación está diseñada para ayudar a los desarrolladores a comprender y trabajar con las funciones del proyecto de manera eficiente.
