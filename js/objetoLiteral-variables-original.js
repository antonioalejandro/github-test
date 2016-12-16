$(document).ready(function() {

  console.log(this);

  var TheInstance = function () {
    this.colorText = 'red';

    this.methods = {

      slideToggle: function() {
        $('.slide-toggle').slideToggle();
      },
      changeText: function(){
        var htmlText = $('.agregaText').html();
        htmlText = htmlText + 'new text';

        $('.agregaText').html(htmlText);
      },
      changeCss: function() {
        console.log(this);
        $('.changecss').css('background-color', this.colorText);
      },
      moveText: function() {
        $('.otraCosa').appendTo('.poner-texto-aqui');
      }
    };
  };


  let instance = new TheInstance();

  $('.boton1').on('click', instance.methods.slideToggle);
  $('.boton2').on('click', instance.methods.changeText);
  $('.boton3').on('click', function() {
    instance.methods.changeCss.call(instance)
  });
  $('.boton4').on('click', instance.methods.moveText);

});// end jquery dom ready
