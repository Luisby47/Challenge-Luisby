
let cambiado = false;

function encriptar() {
    
    var text = document.getElementById("texto").value;
    text = text.toLowerCase();
    text = text.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
    if(!cambiado){
        cambiar_box_2();
    }
    cambiar_text_area_box_2(text)

}

function desencriptar() {
    var text = document.getElementById("texto").value;
    text = text.toLowerCase();
    text = text.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
     if(!cambiado){
        cambiar_box_2();
       }
       cambiar_text_area_box_2(text)

}
function cambiar_text_area_box_2(text){
    var textarea_box_2 = document.getElementById("text_copiar");
    textarea_box_2.innerHTML = text;
}
function cambiar_box_2(){

    // Se elimina la imagen
    var divBox2 = document.querySelector(".box-2 .p-muñeco");
    divBox2.remove();

    // se limpia el contenido de div del box 2
    var divTextoBox2 = document.querySelector(".box-2 .conteiner-texto-box-2");
    divTextoBox2.innerHTML = '';

    // Crear un nuevo elemento <textarea> con el texto encriptado
    var parrafoEncriptado = document.createElement("textarea");
    parrafoEncriptado.setAttribute("readonly", true);
    parrafoEncriptado.setAttribute("id", "text_copiar");

     // Crear un nuevo botón
     var botonCopiar = document.createElement("button");
     botonCopiar.textContent = "Copiar";
     botonCopiar.addEventListener("click", copiar);
 
    // Agregar la clase al nuevo párrafo para mantener las propiedades CSS
    divTextoBox2.classList.add("conteiner-texto-box-2-post")

    // Agregar contenido al div
    divTextoBox2.appendChild(parrafoEncriptado);
    divTextoBox2.appendChild(botonCopiar);

    cambiado = true;
}


function copiar() {
    var texto = document.getElementById("text_copiar").value;
    navigator.clipboard.writeText(texto)
}