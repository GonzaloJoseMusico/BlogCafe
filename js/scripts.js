// const heading = document.querySelector ('.header__texto h2')
// heading.textContent = 'kermoso'
// console.log(heading)

// const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces)
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#E-Mail');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);

function leerTexto (e) {
    datos [e.target.id] = e.target.value
    console.log(datos)
}