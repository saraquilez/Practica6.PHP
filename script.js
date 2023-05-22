/* SARA QUÍLEZ */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const formatos = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
}

const campos = {
	nombre: false,
    apellido: false,
	email: false
}

const validarFormulario = (elemento) => {
	switch (elemento.target.name) {
		case "nombre":
			validarCampo(formatos.nombre, elemento.target, 'nombre');
		break;
        case "apellido":
			validarCampo(formatos.apellido, elemento.target, 'apellido');
		break;
        case "email":
			validarCampo(formatos.email, elemento.target, 'email');
		break;
	}
}

const validarCampo = (formato, input, campo) => {
	if(formato.test(input.value)){
        document.getElementById(`${campo}_incorrecto`).classList.remove('estado_campo-incorrecto');
		document.getElementById(`${campo}_correcto`).classList.remove('estado_campo-incorrecto');
		document.getElementById(`${campo}_correcto`).classList.add('estado_campo-correcto');
        document.getElementById(`${campo}`).classList.remove('estado_campo-incorrecto');
        document.getElementById(`rellene_${campo}`).classList.remove('rellene_campo-activo');
        document.getElementById(`formato_${campo}`).classList.remove('formato_error-activo');
		campos[campo] = true;
	} else {
        document.getElementById(`${campo}_correcto`).classList.remove('estado_campo-correcto');
		document.getElementById(`${campo}_incorrecto`).classList.add('estado_campo-incorrecto');
		document.getElementById(`${campo}_incorrecto`).classList.remove('estado_campo-correcto');
        document.getElementById(`${campo}`).classList.add('estado_campo-incorrecto');
		campos[campo] = false;
        if ((input.value).length == 0){
            document.getElementById(`formato_${campo}`).classList.remove('formato_error-activo');
            document.getElementById(`rellene_${campo}`).classList.add('rellene_campo-activo');
        } else {
            document.getElementById(`rellene_${campo}`).classList.remove('rellene_campo-activo');
            document.getElementById(`formato_${campo}`).classList.add('formato_error-activo');
        }
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});