
function validacion() {
    var nombreUsuario = document.getElementById("name").value;
    var contraseñaUsuario = document.getElementById("contraseña").value;
    var correoUsuario = document.getElementById("correo").value;
    var caracteresNombre = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
    var caracteresCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (nombreUsuario.length === 0 || /^\s+$/.test(nombreUsuario)) {
        alert('El campo de nombre esta vacio!');
      }else if (nombreUsuario.length > 0 && nombreUsuario.match(caracteresNombre) === null) {
        alert('El nombre debe tener solo letras');
      }else if (correoUsuario.length === 0 || /^\s+$/.test(correoUsuario)) {
        alert('El campo de correo esta vacio!');
      } else if (correoUsuario.length > 0 && correoUsuario.match(caracteresCorreo) === null) {
        alert('El campo del correo debe ser un correo valido!')
      }else if (contraseñaUsuario.length == 0 || /^\s+$/.test(contraseñaUsuario)) {
        alert('El campo de contraseña esta vacio!');
      } else if (contraseñaUsuario.length > 0 && contraseñaUsuario.length < 8) {
        alert('El campo de contraseña debe contener minimo 8 caracteres!')
      }else{
          alert('Gracias por registrarte en mi pagina')
      }
      return true;
    }
