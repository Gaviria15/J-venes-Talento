const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
// JavaScript
function changeTextColor(input) {
    input.style.color = "white";
    input.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");
    const loginForm = document.getElementById("loginForm");

    // Función para validar los campos del formulario de registro
    function validarRegistroForm(input) {
        // Inicializar variables de validación
        let isValid = true;

        // Función para mostrar mensaje de advertencia debajo del campo
        function showWarning(input, message) {
            const warningElement = input.nextElementSibling;
            warningElement.textContent = message;
            warningElement.style.color = "white";
        }

        // Función para limpiar el mensaje de advertencia debajo del campo
        function clearWarning(input) {
            const warningElement = input.nextElementSibling;
            warningElement.textContent = "";
        }

        // Validar el campo individualmente
        if (!input.value.trim()) {
            showWarning(input, `El campo "${input.placeholder}" es obligatorio`);
            isValid = false;
        } else {
            clearWarning(input);
        }

        // Validación para nombre y apellido (no permitir números)
        if ((input.id === "nombres" || input.id === "apellidos") && input.value.trim()) {
            const nombreApellidoRegex = /^[a-zA-Z\s]*$/;
            if (!nombreApellidoRegex.test(input.value.trim())) {
                showWarning(input, `El ${input.id === "nombres" ? "nombre" : "apellido"} no debe contener números`);
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        // Validación para correo electrónico
        if (input.id === "correo" && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                showWarning(input, "Por favor, introduce una dirección de correo electrónico válida");
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        // Validación para contraseña
        if (input.id === "contrasena" && input.value.trim()) {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if (!passwordRegex.test(input.value.trim())) {
                showWarning(input, "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número");
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        // Validación para confirmar contraseña
        if (input.id === "confirmarContrasena" && input.value.trim()) {
            const contrasenaInput = document.getElementById("contrasena");
            if (input.value !== contrasenaInput.value) {
                showWarning(input, "Las contraseñas no coinciden");
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        // Validación para número de teléfono
        if (input.id === "celular" && input.value.trim()) {
            if (input.value.trim().length < 10 || !input.value.trim().startsWith('3')) {
                showWarning(input, "El número de teléfono debe comenzar con '3' y tener al menos 10 números");
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        // Validación para número de documento
        if (input.id === "numeroDocumento" && input.value.trim()) {
            if (input.value.trim().length < 7) {
                showWarning(input, "El número de documento debe tener al menos 7 números");
                isValid = false;
            } else {
                clearWarning(input);
            }
        }

        return isValid;
    }

    // Función para validar los campos del formulario de inicio de sesión
    function validarLoginForm(input) {
        // Inicializar variables de validación
        let isValid = true;

        // Función para mostrar mensaje de advertencia debajo del campo
        function showWarning(input, message) {
            const warningElement = input.nextElementSibling;
            warningElement.textContent = message;
            warningElement.style.color = "white";
        }

        // Función para limpiar el mensaje de advertencia debajo del campo
        function clearWarning(input) {
            const warningElement = input.nextElementSibling;
            warningElement.textContent = "";
        }

        // Validar el campo individualmente
        if (!input.value.trim()) {
            showWarning(input, `El campo "${input.placeholder}" es obligatorio`);
            isValid = false;
        } else {
            clearWarning(input);
        }

        return isValid;
    }

    // Validar el formulario de registro en cada cambio de entrada
    registroForm.addEventListener("input", function(event) {
        if (event.target.tagName === "INPUT") {
            validarRegistroForm(event.target);
        }
    });

    // Validar el formulario de inicio de sesión en cada cambio de entrada
    loginForm.addEventListener("input", function(event) {
        if (event.target.tagName === "INPUT") {
            validarLoginForm(event.target);
        }
    });
});
