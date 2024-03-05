
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let fraseEncriptada = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat")
        
    if (texto.length != 0){
        document.getElementById("texto").value = fraseEncriptada;
        tituloMensaje.textContent = "Texto encriptado correctamente";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else {
            muñeco.src = "./img/img_02.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingrese el texto a Encriptar o Desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let fraseEncriptada = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

        if (texto.length != 0) {
            document.getElementById("texto").value = fraseEncriptada;
            tituloMensaje.textContent = "Texto desencriptado correctamente";
            parrafo.textContent = "";
            muñeco.src = "./img/desencriptado.jpg ";
        } else {
            muñeco.src = "./img/img_02.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingrese el texto a Encriptar o Desencriptar";
            swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
   