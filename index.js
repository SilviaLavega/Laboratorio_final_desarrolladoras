// Almacenar referencias a elementos DOM
const form = document.querySelector('form');
const nombreInput = document.querySelector('input[name="name"]');
const apellido1Input = document.querySelector('input[name="surname"]');
const apellido2Input = document.querySelector('input[name="secondSurname"]');
const emailInput = document.querySelector('input[name="email"]');
const loginInput = document.querySelector('input[name="accountName"]');
const passwordInput = document.querySelector('input[name="password"]');


//Recoge los datos de la BBDD y los envia al archivo php que se utiliza para mostrarlos
function getUsuarios() {
    var usersTable = document.getElementById('userTable');
    usersTable.hidden = false;
    usersTable.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';

    fetch('usuarios.php')
        .then(response => response.text())
        .then(data => {
            usersTable.innerHTML = data;
        })
        .catch(error => {
            usersTable.innerHTML = 'Error al obtener los usuarios';
        });
}

// Agregar el evento submit al formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    validateForm();
  });


// -------------- VALIDACION FORMULARIO ------------------------
function validateForm() {
    const nombre = nombreInput.value.trim();
    const apellido1 = apellido1Input.value.trim();
    const apellido2 = apellido2Input.value.trim();
    const email = emailInput.value.trim();
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

  
    if (nombre === '' || apellido1 === '' || apellido2 === '' || email === '' || login === '' || password === '') {
      alert('Por favor, completa todos los campos.'); // Mostrar mensaje de error si algún campo está vacío
    } else {
      alert('El formulario ha sido enviado con éxito.'); 
      form.reset();
    }
  }
  
// -------------- VALIDACION DE CAMPOS ------------------------
  
nombreInput.addEventListener('input', validaNombre);
apellido1Input.addEventListener('input', validaApellido1);
apellido2Input.addEventListener('input', validaApellido2);
emailInput.addEventListener('input', validaEmail);
loginInput.addEventListener('input', validaLogin);
passwordInput.addEventListener('input', validaPassword);

// -------------- VALIDACION NOMBRE ------------------------
function validaNombre() {
    var nombreValido = /^[A-Za-z]+$/.test(nombreInput.value);
    var inputLine = document.querySelector('.nombre-input-line');

    if (nombreInput.value === '') {
        nombreError.textContent = 'Campo obligatorio';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else if (!nombreValido) {
        nombreError.textContent = 'Formato de nombre inválido, por favor revísalo.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else {
        nombreError.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}

// -------------- VALIDACION APELLIDO1 ------------------------
function validaApellido1() {
    var apellido1Valido = /^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(apellido1Input.value);
    var inputLine = document.querySelector('.apellido1-input-line');

    if (apellido1Input.value === '') {
        apellido1Error.textContent = 'Campo obligatorio.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else if (!apellido1Valido) {
        apellido1Error.textContent = 'Formato de apellido inválido, por favor revísalo.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else {
        apellido1Error.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}

// -------------- VALIDACION APELLIDO2 ------------------------
function validaApellido2() {
    var apellido2Valido = /^[A-Za-záéíóúÁÉÍÓÚüÜ]+$/.test(apellido2Input.value);
    var inputLine = document.querySelector('.apellido2-input-line');


    if (apellido2Input.value === '') {
        apellido2Error.textContent = 'Campo obligatorio.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else if (!apellido2Valido) {
        apellido2Error.textContent = 'Formato de apellido inválido, por favor revísalo.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else {
        apellido2Error.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}

// -------------- VALIDACION EMAIL ------------------------
function validaEmail() {
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    var inputLine = document.querySelector('.email-input-line');

    if (emailInput.value === '') {
        emailError.textContent = 'Campo obligatorio.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else if (!emailValido) {
        emailError.textContent = 'El formato del correo electrónico no es válido.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else {
        emailError.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}

// -------------- VALIDACION LOGIN ------------------------
function validaLogin() {
    var loginInputValue = loginInput.value;
    var inputLine = document.querySelector('.login-input-line');

    if (loginInputValue === '') {
        loginError.textContent = 'Campo obligatorio';
        inputLine.classList.remove('valid');
        inputLine.classList.add('invalid');
    } else {
        loginError.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}


// -------------- VALIDACION PASSWORD ------------------------
function validaPassword() {
    var passValido = /^.{4,8}$/.test(passInput.value);
    var inputLine = document.querySelector('.pass-input-line');

    if (passInput.value === '') {
        passError.textContent = 'Campo obligatorio.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else if (!passValido) {
        passError.textContent = 'La contraseña debe tener entre 4 y 8 caracteres.';
        inputLine.classList.add('invalid');
        inputLine.classList.remove('valid');
    } else {
        passError.textContent = '';
        inputLine.classList.remove('invalid');
        inputLine.classList.add('valid');
    }
}




