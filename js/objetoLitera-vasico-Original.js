$(document).ready(function() {

  var methods = {
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

  $('.boton1').on('click', methods.slideToggle);
  $('.boton2').on('click', methods.changeText);
  $('.boton3').on('click', methods.changeCss);
  $('.boton4').on('click', methods.moveText);

});// end jquery dom ready
