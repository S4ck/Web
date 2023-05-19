document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtiene los valores ingresados por el usuario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Realiza la validación de los campos (puedes agregar validaciones adicionales aquí)

  // Procesa los datos del formulario
  // Aquí puedes agregar código para enviar los datos a través de correo electrónico o guardarlos en una base de datos

  // Muestra un mensaje de éxito
  alert("¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.");

  // Limpia el formulario
  document.getElementById("contactForm").reset();
});