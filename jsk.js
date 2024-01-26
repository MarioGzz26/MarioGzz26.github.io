function validacionPro() {
    var emailInput = document.getElementById('email');
    var clave = document.getElementById('clave');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
      console.log('Proporciona una dirección de correo electrónico que sea válida');
      
      
      return false;

    } 
    
    if (clave.value.length < 8) {
        console.log('La clave debe contener un mínimo de 8 caracteres');
        return false;
      }

    else {
      window.alert('Has Iniciado Sesion')
      return true;
    }  
  }


  