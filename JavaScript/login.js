//Seleccionar los id
const inputUser = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const botonInicio = document.querySelector('#botonInicio');
const btnVisible = document.querySelector('#btnVisible');

//limpiar form
function limpiarFormulario(params) {
    inputUser.value = "";
    inputPassword.value = "";

    inputUser.classList.remove('is-invalid');
    inputPassword.classList.remove('is-invalid');

    inputUser.focus();
}

//Validar inputs
function validarCampos(params) { 
    const adminUser = "curiosiweb";
    const adminPassword = "123";   
    if (inputUser.value == "") {
        inputUser.classList.add('is-invalid');
        inputUser.focus();
        return false;
    }    
    if (inputPassword.value == "") {
        inputPassword.classList.add('is-invalid');
        inputUser.focus();
        return false;
    }

    return inputUser.value == adminUser && inputPassword.value == adminPassword;
}

function loginExitoso() {
    Swal.fire({
        title: "Correcto",
        text: "You clicked the button!",
        icon: "success"
    }); 

    //Falta guardar en el Local

    setTimeout(() => {
        window.location = "AQUI VA EL LINK DE LA PAGINA DEL DASH";
    }, 1000);
}

function loginFallido() {
    Swal.fire({
        title: "Incorrecto",
        text: "You clicked the button!",
        icon: "error"
    }); 
    limpiarFormulario();
}

function manejarLogin(e) {

    if (validarCampos()) {
        loginExitoso();
    } else {
        loginFallido();
    }
}

btnVisible.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
         inputPassword.type = 'password';
    }
})

botonInicio.addEventListener('click', manejarLogin);

