// Manejo del envío del formulario
const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;

    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor o mostrar un mensaje de confirmación
    // Por ahora, simplemente mostraremos los valores en la consola
    console.log("Nombre: " + nombre);
    console.log("Correo Electrónico: " + email);
    console.log("Teléfono: " + telefono);
    console.log("Empresa: " + empresa);

    // Limpiar los campos del formulario después de enviar
    registroForm.reset();
});
