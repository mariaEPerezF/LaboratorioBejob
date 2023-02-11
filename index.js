function validarDatos() {
        let nombre      = document.getElementById("nombre").value;
        let email       = document.getElementById("correo").value;
        let pswd        = document.getElementById("clave").value;
        let validarpswd = document.getElementById("cclave").value;
        //Para validar la inscripcion
        let campoinvalido = {
            nombre: false,
            correo: false,
            clave:  false,
            cclave: false,
        };

        result = validarVacio();
        //alert(JSON.stringify(result))

        if (result.nombre != true) {
            campoinvalido.nombre = validarTexto(nombre);
        }
        if (result.correo != true) {
            campoinvalido.correo = validarEmail(email);
        }
        if (result.clave != true) {
            campoinvalido.clave = validarClave(pswd);
        }
        if (result.cclave != true) {
            campoinvalido.cclave = validarConfirmacionClave(pswd, validarpswd);
        }

        if (
            campoinvalido.nombre === true &&
            campoinvalido.correo === true &&
            campoinvalido.clave  === true &&
            campoinvalido.cclave === true
        ) {
            alert("La inscripción ha sido correcta");
            return true
        }


        return false
}

function validarVacio() {
        let campovacio = {
            nombre: false,
            correo: false,
            clave: false,
            cclave: false,
        };

        if (document.getElementById("nombre").value === "") {
            document.getElementById("ENombre").style.display = "inline";
            document.getElementById("nombre").style.borderWidth = "2px";
            document.getElementById("nombre").style.borderColor = "rgb(224, 85, 85)";
            document.getElementById("nombre").className = "icon-error";
            document.getElementById("ENombre").innerHTML = "Rellene este campo";
            campovacio.nombre = true;
            //   return "nombre"
        } else {
            document.getElementById("nombre").className = "icon-ok";
            document.getElementById("ENombre").style.display = "none";
        }

        if (document.getElementById("correo").value === "") {
            document.getElementById("ECorreo").style.display = "inline";
            document.getElementById("correo").style.borderWidth = "2px";
            document.getElementById("correo").style.borderColor = "rgb(224, 85, 85)";
            document.getElementById("correo").className = "icon-error";
            document.getElementById("ECorreo").innerHTML = "Rellene este campo";
            campovacio.correo = true;
            //       return "email"
        } else {
            document.getElementById("correo").className = "icon-ok";
            document.getElementById("ECorreo").style.display = "none";
        }

        if (document.getElementById("clave").value === "") {
            document.getElementById("EClave").style.display = "inline";
            document.getElementById("clave").style.borderWidth = "2px";
            document.getElementById("clave").style.borderColor = "rgb(224, 85, 85)";
            document.getElementById("clave").className = "icon-error";
            document.getElementById("EClave").innerHTML = "Rellene este campo";
            campovacio.clave = true;
            //return "pswd"
        } else {
            document.getElementById("clave").className = "icon-ok";
            document.getElementById("EClave").style.display = "none";
        }

        if (document.getElementById("cclave").value === "") {
            document.getElementById("ECClave").style.display = "inline";
            document.getElementById("cclave").style.borderWidth = "2px";
            document.getElementById("cclave").style.borderColor = "rgb(224, 85, 85)";
            document.getElementById("cclave").className = "icon-error";
            document.getElementById("ECClave").innerHTML = "Rellene este campo";
            campovacio.cclave = true;
            //return "validarpswd"
        } else {
            document.getElementById("cclave").className = "icon-ok";
            document.getElementById("ECClave").style.display = "none";
        }
        return campovacio;
}

function validarTexto(nombre) {
    if (/^[A-Za-z\s]+$/.test(nombre)) {
        document.getElementById("nombre").style.borderWidth = "3px";
        document.getElementById("nombre").style.borderColor = "rgb(0, 143, 57)";
        document.getElementById("nombre").className = "icon-ok";
        document.getElementById("ENombre").style.display = "none";
        //alert("Nombre Valido");
        return true;
    } else {
        document.getElementById("ENombre").style.display = "inline";
        document.getElementById("nombre").style.borderWidth = "2px";
        document.getElementById("nombre").style.borderColor = "rgb(224, 85, 85)";
        document.getElementById("nombre").className = "icon-error";
        document.getElementById("ENombre").innerHTML = "Nombre invalido";
    }
    return false;
}

function validarEmail(email) {
    if (
        /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
        email
        )
    ) {
        document.getElementById("correo").style.borderWidth = "3px";
        document.getElementById("correo").style.borderColor = "rgb(0, 143, 57)";
        document.getElementById("correo").className = "icon-ok";
        document.getElementById("ECorreo").style.display = "none";
        return true;
    } else {
        document.getElementById("ECorreo").style.display = "inline";
        document.getElementById("correo").style.borderWidth = "2px";
        document.getElementById("correo").style.borderColor = "rgb(224, 85, 85)";
        document.getElementById("correo").className = "icon-error";
        document.getElementById("ECorreo").innerHTML = "Email invalido";
    }
    return false;
}

function validarClave(pswd) {
  //Validar longitud maximo 8 caracteres
  if (pswd.length <= 8) {
    document.getElementById("clave").style.borderWidth = "3px";
    document.getElementById("clave").style.borderColor = "rgb(0, 143, 57)";
    document.getElementById("clave").className = "icon-ok";
    document.getElementById("EClave").style.display = "none";
    //alert("Contraseña Valida");
    return true;
  } else {
    document.getElementById("EClave").style.display = "inline";
    document.getElementById("clave").style.borderWidth = "2px";
    document.getElementById("clave").style.borderColor = "rgb(224, 85, 85)";
    document.getElementById("clave").className = "icon-error";
    document.getElementById("EClave").innerHTML = "No debe tener mas de 8 caracteres";
    return false;
  }
}

function validarConfirmacionClave(pswd, validarpswd) {
  if (pswd === validarpswd) {
    document.getElementById("cclave").style.borderWidth = "3px";
    document.getElementById("cclave").style.borderColor = "rgb(0, 143, 57)";
    document.getElementById("cclave").className = "icon-ok";
    document.getElementById("ECClave").style.display = "none";

    return true;
  } else {
    document.getElementById("ECClave").style.display = "inline";
    document.getElementById("cclave").style.borderWidth = "2px";
    document.getElementById("cclave").style.borderColor = "rgb(224, 85, 85)";
    document.getElementById("cclave").className = "icon-error";
    document.getElementById("ECClave").innerHTML = "Las contraseñas NO coinciden";
    return false;
  }
}
