(function () {    
  var forms = document.querySelectorAll('.needs-validation')   //obtener los elemetos del formulario

  
  Array.prototype.slice.call(forms)
    .forEach(function (form) {   //recorrer el arreglo
      form.addEventListener('submit', function (event) {  //añadir envento
        if (!form.checkValidity()) {   //validad si esta vacio entra
          event.preventDefault()    //cancela el evento
          event.stopPropagation()  //evita la propagación adicional del evento actual en las fases de captura y bubbling.
        }

        form.classList.add('was-validated') //Añade las clases indicadas. Si estas clases existieran en el atributo del elemento serán ignoradas.
      }, false)
    })
})()
