//Se iteran las etiquetas h3
document.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("click", function () {
      //Consigue atributo data-file(que estan en los h3) y se lo pasa a la url en formato raw
      const filePath = this.getAttribute("data-file");
      const rawUrl = `https://raw.githubusercontent.com/humbertoCerezo/documentacion/main/${filePath}`;
  
      // Se hace una promesa para validar obtención de datos
      fetch(rawUrl)
        .then((response) => {
          //Si la respuesta es incorrecta, se manda una excepción
          if (!response.ok) {
            throw new Error(
              `Error en la solicitud: ${response.status} ${response.statusText}`
            );
          } //Si no, se transforma la data en blob
          return response.blob();
        })
        .then((blob) => {
          //Se genera un objeto URL para el blob
          const url = window.URL.createObjectURL(blob);
  
          //aquí se crea un enlace temporal que simule un clic para descargar
          const a = document.createElement("a");
          a.href = url;
          a.download = filePath.split("/").pop();
          document.body.appendChild(a);
          a.click();
          // Aquí se elimina el objeto de url y se elimina el enlace temporal
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        //Si la promesa falla, da una excepción
        .catch((error) => {
          console.error("Error al descargar el archivo:", error);
        });
    });
  });