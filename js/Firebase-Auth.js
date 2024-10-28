// Importar Firebase y Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOb9ejb9s7uu1yESiuSKas4kJJ7eX0qDM",
    authDomain: "bdlogin-1b499.firebaseapp.com",
    projectId: "bdlogin-1b499",
    storageBucket: "bdlogin-1b499.appspot.com",
    messagingSenderId: "108081575005",
    appId: "1:108081575005:web:f2699abd7542fb8ee4c9b4"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para verificar usuarios
window.addEventListener('load', () => {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Obtener los valores de los inputs
        const name = document.querySelector('#name').value; 
        const password = document.querySelector('#password').value;

        try {
            // Referencia al documento "UsuariosLogin" en la colección "Login"
            const docRef = doc(db, "Login", "Users_Login");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data(); // Obtener los datos de Firestore
                
                // Verificar si el nombre de usuario y la contraseña coinciden
                if (userData.user === name && userData.password === password) {
                    // Redirigir a otra página si los datos son correctos
                    window.location.href = "./body/index.html";
                } else {
                    alert("Usuario o contraseña incorrectos.");
                }
            } else {
                alert("No se encontró el usuario.");
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            alert("Hubo un problema al verificar el usuario.");
        }
    });
});