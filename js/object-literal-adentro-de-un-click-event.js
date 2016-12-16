$(document).ready(function() {
    
    //objeto literal adentro de un click event;
    
  $('.boton1 h1').click(function() {
      //variables de contenido
      var _this = $(this),
          changeText = _this.parent().find('span');
      
      //variables de funcionamiento
      var bottonOneFunction = {
          toggleText: function() {
            _this.parent().find('p').slideToggle();   
          },
          cssChange: function() {
              
          }
      };
      
      if(!(_this.parent().hasClass('active'))) {
          changeText.addClass('css-change');
          _this.parent().addClass('active');
          
      } else {
          changeText.removeClass('css-change');
          bottonOneFunction.toggleText();
          _this.parent().removeClass('active');
      }
      
  });

});// end jquery dom ready