// CODIGO PARA ACTIVAR EL BOTON TIPO BURGER O HAMBURGUESA 
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-link');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
})

// CODIGO PARA HACER FUNCIONAR EL FORMULARIO

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');

    const formData = new FormData(this);

    fetch('/send_email',{
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showFlashMessage('Mensaje enviado correctamente :D', 'excelente');
        this.reset(); //LIMPIA EL FORMULARIO
        submitButton.classList.remove('loading');
    })
    .catch(error => {
        showFlashMessage('Hubo un error al enviar el mensaje D:', 'error');
        console.log("ERROR", error);
        submitButton.classList.remove('loading');
    })
});
// ga
function showFlashMessage(message, category){
    const flashcontainer = document.getElementById('flash-messages');
    const flashmessage = document.createElement('div');
    flashmessage.className = `alert ${category}`;
    flashmessage.textContent = message;

    flashcontainer.appendChild(flashmessage);

    setTimeout(() => {
        flashmessage.remove();
    }, 5000);
}