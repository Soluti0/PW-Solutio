// Función para mostrar el chat
function toggleChat() {
    const chatContainer = document.getElementById("ChatContainer");
    
    // Si el contenedor está oculto, lo mostramos y cargamos el script
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
        
        // Verifica si el script de Stack AI ya está cargado
        if (!document.getElementById("stackAiScript")) {
            loadStackAIScript();
        }
    } else {
        // Oculta el contenedor si ya está visible
        chatContainer.style.display = "none";
    }
}

// Función para cargar el script de Stack AI
function loadStackAIScript() {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/react-stackai@latest/dist/vanilla/vanilla-stackai.js";
    script.dataset.projectUrl = "https://www.stack-ai.com/embed/884ff34c-d414-498a-8515-a01a3640dfd1/48133f2a-7c90-414b-bdd5-398cdb6af67f/6719152a2d59d0627efe3934";
    script.id = "stackAiScript"; // Agrega un ID para evitar duplicados
    document.body.appendChild(script);
}

// Llama automáticamente a toggleChat() para mostrar el chat al cargar la página
window.addEventListener("load", toggleChat);