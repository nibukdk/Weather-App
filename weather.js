

var lattitude="";
var longitude ="";
var apiKey = "91cd24753027284fc8d71cfa2c102253";
var city="";
var dayNames = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var date= new Date();
var dateToday= date.getUTCDate()+'.'+date.getUTCMonth()+'.'+date.getUTCFullYear();
var day= dayNames[date.getUTCDay()];




		$.getJSON("http://ip-api.com/json/?callback=?",function(data){
			lattitude=data.lat;
			longitude=data.lon;
		 	city=data.city;

			$('.city-name').html(city);
			$('.dayOfWeek').html(day);
			$('.fullDate').html(dateToday);

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid=91cd24753027284fc8d71cfa2c102253",function(data){
			var weather = data.weather[0].main,
			 	temp = data.main.temp,
			 	maxTemp= data.main.temp_max,
	     		 minTemp= data.main.temp_min,
			 	windSpeed= data.wind.speed;
			 	weatherCondition= data.weather[0].description;

			var inCelcius= Math.round(temp - 273.15),
			 	inFarenheit= Math.round(temp * 9/5 - 459.67),
			 	maxTempinCelcius=Math.round(maxTemp - 273.15)+'C',
			 	maxTempinFarenheit=Math.round(maxTemp * 9/5 - 459.67)+'F',
			 	minTempinCelcius=Math.round(minTemp - 273.15)+'C',
			 	minTempinFarenheit=Math.round(minTemp * 9/5 - 459.67)+'F';

			 	$('#temp').html(inCelcius+"C");
			 	$('#maxTemp').html(maxTempinCelcius);
			 	$('#minTemp').html(minTempinCelcius);

			var weatherArray=[weather,temp,maxTemp,minTemp,windSpeed];



				$('input[type=checkbox]').on('click',function(){
					if(this.checked){
						$('#temp').html(inFarenheit+"F");

						$('#maxTemp').html(maxTempinFarenheit);
						$('#minTemp').html(minTempinFarenheit);
					}
					else{
						$('#temp').html(inCelcius+"C");
						$('#maxTemp').html(maxTempinCelcius);
			 			$('#minTemp').html(minTempinCelcius);
					}

				});

				$('#weather').html(weather);
				$('.windSpeed').append('<br>'+windSpeed+'m/s');
				$('h3').html(weatherCondition);

				if(weather==='Clear'){
					$('.thumbnail').html('<p> <i class="fa fa-sun-o fa-5x" aria-hidden="true"></i> </p>');
				}
				 else if(weather==='Snow'){
					$('.thumbnail').html('<p> <i class="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>  </p>');
				}
				else if(weather==='Rain'){
					$('.thumbnail').html('<p> <i class="fa fa-umbrella fa-5x" aria-hidden="true"></i> </p>');
				}
				else if(weather==='Thunderstorm'){
					$('.thumbnail').html('<p> <i class="fa fa-bolt fa-5x" aria-hidden="true"></i>  </p>');
				}

				else if (weather==='Clouds'){
					$('.thumbnail').html('<p> <i class="fa fa-cloud fa-5x" aria-hidden="true"></i> </p>');
				}
				else{
					$('.fa').addClass('.fa');
				}

		});
	});
