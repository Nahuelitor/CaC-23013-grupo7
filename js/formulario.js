const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^\d{1,14}$/, // 1 a 14 numeros.
    fecNac:/^[0-9\_\-]{10}$/, //10 caracteres del 0 al 9 y guiones.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[\d\+]{1,16}$/, // 1 a 16 numeros y puede estar el + por código de país.
    dia:/^[0-9\_\-]{10}$/, //10 caracteres del 0 al 9 y guiones.
    hora:/^[0-9\:\-]{5}$/, //5 caracteres del 0 al 9, guiones y dos puntos.
}

const campos = {
    nombre: false,
    apellido: false,
    dni: false,
    fecNac: false,
    correo: false,
    telefono: false,
    turno: false,
    dia: false,
    hora: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
        case "fecNac":
            validarCampo(expresiones.fecNac, e.target, 'fecNac');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "dia":
            validarCampo(expresiones.dia, e.target, 'dia');
        break;
        case "hora":
            validarCampo(expresiones.hora, e.target, 'hora');
        break;
    }
}

// para validar el SELECT:
var select = document.getElementById('turno');
select.addEventListener('change',
  function(){
    campos.turno=true;
  });

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario )
    input.addEventListener('blur', validarFormulario )
})

formulario.addEventListener('submit', (e)  => {
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.dni && campos.fecNac && campos.correo && campos.telefono && campos.turno && campos.dia && campos.hora){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 10000);  //borra el mensaje luego de 10 segundos(10000 milisegundos)


        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    
    }
})
