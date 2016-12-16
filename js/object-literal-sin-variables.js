$(document).ready(function() {
    
    //objeto literal basico sin variables ni uso de la palabra this

  var methods = {
      init: function() {
           $('.boton1').on('click', methods.slideToggle);
           $('.boton2').on('click', methods.changeText);
           $('.boton3').on('click', methods.changeCss);
           $('.boton4').on('click', methods.moveText);
        },
    slideToggle: function() {
      $('.slide-toggle').slideToggle();
    },
    changeText: function(){
      var htmlText = $('.agregaText').html();
      htmlText = htmlText + 'new text';

      $('.agregaText').html(htmlText);
    },
    changeCss: function() {
      $('.changecss').css('background-color', 'red');
    },
    moveText: function() {
      $('.otraCosa').appendTo('.poner-texto-aqui');
    }
  };
                  
    methods.init();

//se pueden llamar de la siguiente manera en caso que no se quiera usar init, el resultado es el mismo. 
    
  // $('.boton1').on('click', methods.slideToggle);
  // $('.boton2').on('click', methods.changeText);
  // $('.boton3').on('click', methods.changeCss);
  // $('.boton4').on('click', methods.moveText);

});// end jquery dom ready