function validacionPro() {
    var emailInput = document.getElementById('email');
    var password = document.getElementById('password');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
      window.alert('Proporciona una dirección de correo electrónico que sea válida.');    
      console.log('Proporciona una dirección de correo electrónico que sea válida.');
      
      
      return false;

    } 
    
    if (password.value.length < 8) {
        window.alert('La contraseña  debe contener un mínimo de 8 caracteres.');
        console.log('La contraseña debe contener un mínimo de 8 caracteres.');
        return false;
      }

    else {
      window.alert('Has Iniciado Sesion')
      return true;
    }  }


  