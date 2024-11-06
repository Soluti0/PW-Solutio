// Función para alternar el estado del chat
function toggleChat() {
    const chatContainer = document.getElementById("ChatContainer");

    // Si el chat está oculto, lo mostramos y cargamos el script de Stack AI
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
        chatContainer.classList.remove("inactive"); // Activa el chat
        loadStackAIScript(); // Carga el script si aún no se ha cargado
    } else {
        // Si el chat está visible, lo ocultamos
        chatContainer.style.display = "none";
        chatContainer.classList.add("inactive"); // Añade la clase inactive para permitir interacción con otros elementos
    }
}

// Función para cargar el script de Stack AI solo una vez
function loadStackAIScript() {
    // Verifica si el script ya ha sido cargado para evitar duplicados
    if (!document.getElementById("stackAiScript")) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/react-stackai@latest/dist/vanilla/vanilla-stackai.js";
        script.dataset.projectUrl = "https://www.stack-ai.com/embed/884ff34c-d414-498a-8515-a01a3640dfd1/48133f2a-7c90-414b-bdd5-398cdb6af67f/6719152a2d59d0627efe3934";
        script.id = "stackAiScript"; // Asigna un ID para evitar cargar el script más de una vez
        document.body.appendChild(script);
    }
}

// Llama a toggleChat() al cargar la página para mostrar el chat automáticamente
window.addEventListener("load", toggleChat);