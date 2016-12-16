$(document).ready(function() {

    //LOS EJEMPLOS MAS UTILIZADOS ES EL NUMBERO 1 Y 4 pero los 4 se escriben diferente pero asen lo mismo.

  //El siguiente ejemplo es como acomodar el codigo en Object literal con variables adentro.
    //1 Se crea un objecto que en este caso se llama TheInstance y adentro primero se ponen las variables y despues se crea otro objeto donde van ir todas las funciones.
    //2 Es importante recordar que si se ban a usar variables y la palabra this se tiene que cambirar a este symbolo para que agarre el objeto ()=>

  var TheInstance = function () {
      //variables
      this.botonUno = $('.boton1 h1');
      this.toggle = $('.slide-toggle');
      this.colorText = 'red';
      
      //objeto que almacena las funciones
    this.methods = {
        //objeto que llama las funciones,todas las funciones ban estar adentro de la funcion de init.
        init: function() {
        //recuerda que siempre se tiene que usar la nueva variable para que pueda acceder a todos los objetos.
            instance.botonUno.on('click', instance.methods.slideToggle);
            $('.boton2').on('click', instance.methods.changeText);
            $('.boton3').on('click', function() {
                instance.methods.changeCss.call(instance)
            });
            $('.boton4').on('click', instance.methods.moveText);
        },
        //primer ejemplo con variables usando this y ()=>
      slideToggle: ()=> {
          this.toggle.slideToggle();
          this.toggle.next().css('font-size', 30);
      },
       //segundo ejemplo sin usar variables ni this
      changeText: function(){
        var htmlText = $('.agregaText').html();
        htmlText = htmlText + 'new text';

        $('.agregaText').html(htmlText);
      },
        //tercer ejemplo sin usar variables ni this llamando la funcion
      changeCss: function() {
        console.log(this);
        $('.changecss').css('background-color', this.colorText);
      },
        //cuarto ejemplo sin usar variables ni this llamando la funcion
      moveText: function() {
        $('.otraCosa').appendTo('.poner-texto-aqui');
      }
    };
  };
    
    
//recuerda siempre darle una nueva variable para que regrese como objecto.
  let instance = new TheInstance();
    instance.methods.init();

//los codigos de abajo son en caso que no se quieran llamar adentro del objeto init es solo otra forma de llamarlos.
  //$('.boton1').on('click', instance.methods.slideToggle);
  //$('.boton2').on('click', instance.methods.changeText);
  //$('.boton3').on('click', function() {
    //instance.methods.changeCss.call(instance)
  //});
  //$('.boton4').on('click', instance.methods.moveText);
    
});// end jquery dom ready