const encriptar = (texto) => {
     texto = document.getElementById("textoArea").value.toLowerCase();
     let arreglo = Array.from(texto);  /*convirtiendo la cadena a un arreglo*/

     for (i = 0; i < arreglo.length; i++) { /*haciendo un ciclo for que recorrera cada posicion del arreglo*/
          if (arreglo[i] === "a") {   /*si la posicion i es igual a la letra "a"*/
               arreglo[i] = "ai";  /* i valdra "ai"*/
          }
          else if (arreglo[i] === "e") {
               arreglo[i] = "enter";
          }
          else if (arreglo[i] === "i") {
               arreglo[i] = "imes";
          }
          else if (arreglo[i] === "o") {
               arreglo[i] = "ober";
          }
          else if (arreglo[i] === "u") {
               arreglo[i] = "ufat";
          }
     }
     let nuevoTexto = arreglo.join("");  /*quitando las comas de la matriz*/
     nuevoTexto.toString(); /*convirtiendo la matriz en una cadena*/
     document.getElementById('res').value = nuevoTexto;
     document.getElementById("message").style.visibility = "hidden";
     document.getElementById("imagenMono").style.visibility = "hidden";
}

const desencriptar = (texto) => {
     texto = document.getElementById("textoArea").value;
     let cadenaNueva = texto.replace(/ufat/g, 'u');
     cadenaNueva = cadenaNueva.replace(/ober/g, 'o');
     cadenaNueva = cadenaNueva.replace(/imes/g, 'i');
     cadenaNueva = cadenaNueva.replace(/enter/g, 'e');
     cadenaNueva = cadenaNueva.replace(/ai/g, 'a');
     document.getElementById('res').value = cadenaNueva;
     document.getElementById("message").style.visibility = "hidden";
     document.getElementById("imagenMono").style.visibility = "hidden";
}

function copiar() {
     
     let contenido = document.getElementById('res');
     contenido.select();
     document.execCommand('copy');

     const mensaje = contenido.value;
     navigator.clipboard.writeText(mensaje);
}



