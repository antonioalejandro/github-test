$(document).ready(function() {

  var weatherFunction = {
    init: function() {
      this.test();
      var ajaxCall = $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=4887442&appid=6bf714d7276459866c4743a885b9cc5a",
        dataType: "jsonp"
      });

      ajaxCall.done(function(data) {

				console.log(data);

				var newArrayOfFive = [];

				// for(var i = 0; i <= 4; i++) {
				// 	newArrayOfFive.push(data.list[i]);
				// }
				//

				var myFive = data.list.slice(0, 5);

				var longHtml = '<ul>';


				// $.each(myFive, function(i){
				// 	newArrayOfFive.push(myFive[i]);
				//
				// 	longHtml += myFive[i].dt_txt + '<br />';
				// });

				$.each(myFive, function(i){
					newArrayOfFive.push(myFive[i]);

					var dateString = myFive[i].dt_txt;

					var buildString = function(date) {
						// create start and end LI string
						var $li = '<li>';
						var $endLi = '</li>';

						// add your date between the <li> AND YOUR DATE HERE (date string)</li>
						var newReturnListElement = $li + date + $endLi;

						return newReturnListElement;
					};

					longHtml += buildString(dateString);
				});

				longHtml += '</ul>';

				console.log('newArrayOfFive', newArrayOfFive);

        var weekdates = 5,
          weekArray = data.list;

        var chicagoFullDate = $('.date').html(data.list[0].dt_txt),
          showChicagoDate = chicagoFullDate.html(),
          chicagoDate = showChicagoDate.substring(0, 10),
          showYear = showChicagoDate.substring(0, 4),
          showday = showChicagoDate.substring(5, 10);
        console.log(data);

        for(var i=0; i < weekArray.length; i++) {
          console.log('test');
        }

        $('.city').html(longHtml);
        $('.date').html(showday + '-' + showYear);

      });
    },
    test: function() {



    }

  }

  weatherFunction.init();




});// end jquery dom ready
