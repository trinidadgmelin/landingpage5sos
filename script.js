var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("botonEnviar");
var elemento_formulario = document.getElementById("formulario");
var elemento_feedback = document.getElementById("feedback");

input_submit.addEventListener("click", feedbackFormulario); 

function feedbackFormulario(event) {

    event.preventDefault();

    var valor_nombre = input_nombre.value;
    var placeholder_nombre = document.getElementById("nombre-placeholder");

    placeholder_nombre.innerHTML = valor_nombre;

    var valor_email = input_email.value;
    var placeholder_email = document.getElementById("email-placeholder");

    placeholder_email.innerHTML = valor_email;

    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add("oculto");

    
    var botonAceptar = document.getElementById("botonAceptar");
    botonAceptar.addEventListener("click", cerrarFeedback);
}

function cerrarFeedback() {

    elemento_feedback.classList.add("oculto");
    elemento_formulario.classList.remove("oculto");
    
}