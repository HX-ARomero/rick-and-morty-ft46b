const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const expresionRegular = /^(?=.{1,35}$).+/;

const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation(data){
    const errors = {}

    if(!regexEmail.test(data.email)) errors.email = 'Debe ser un email';

      // * Opción 1 para la longitud del email con Regex
    // if(!expresionRegular.test(data.email)) errors.email = 'La longitud debe ser entre 1 y 35 caracteres'
    // * Opción 2 para la longitud del email
    if(!data.email) errors.email = 'Campo requerido'
    if(data.email.length > 35) errors.email = 'La longitud debe ser de 35 caracteres'

    if(!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres'

    return errors
}

export default validation