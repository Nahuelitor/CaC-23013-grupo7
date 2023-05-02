const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^\d{7,14}$/, // 7 a 14 numeros.
    fecNac:/ /,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    dia:/ /,
    hora:/ /,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                
            } else {
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');            }
        break;
        case "apellido":
            console.log('Funciona!')
        break;
        case "dni":
            console.log('Funciona!')
        break;
        case "fecNac":
            console.log('Funciona!')
        break;
        case "correo":
            console.log('Funciona!')
        break;
        case "telefono":
            console.log('Funciona!')
        break;
        case "dia":
            console.log('Funciona!')
        break;
        case "hora":
            console.log('Funciona!')
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario )
    input.addEventListener('blur', validarFormulario )
})

formulario.addEventListener('submit', ()  => {
    e.preventDefault();
})