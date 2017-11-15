

let lattitude="",
 longitude ="";
 apiKey = "91cd24753027284fc8d71cfa2c102253",
 city='',
 dayNames = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'),
 date= new Date(),
 dateToday= date.getUTCDate()+'.'+date.getUTCMonth()+'.'+date.getUTCFullYear(),
 day= dayNames[date.getUTCDay()];





	$.getJSON("http://ip-api.com/json/?callback=?",function(data){
			lattitude=data.lat;
			longitude=data.lon;
		 	city=data.city;

			$('.city-name').html(city);
			$('.dayOfWeek').html(day);
			$('.fullDate').html(dateToday);

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid=91cd24753027284fc8d71cfa2c102253",function(data){
			let weather = data.weather[0].main,
				id=data.weather[0].id,
			 	temp = data.main.temp,
			 	maxTemp= data.main.temp_max,
	     		 minTemp= data.main.temp_min,
			 	windSpeed= data.wind.speed;
			 	weatherCondition= data.weather[0].description;

			let inCelcius= Math.round(temp - 273.15),
			 	inFarenheit= Math.round(temp * 9/5 - 459.67),
			 	maxTempinCelcius=Math.round(maxTemp - 273.15)+'C',
			 	maxTempinFarenheit=Math.round(maxTemp * 9/5 - 459.67)+'F',
			 	minTempinCelcius=Math.round(minTemp - 273.15)+'C',
			 	minTempinFarenheit=Math.round(minTemp * 9/5 - 459.67)+'F';

			 	$('.tempInCel').html(inCelcius+"C");
			 	$('.maxTempInCel').html(maxTempinCelcius);
			 	$('.minTempInCel').html(minTempinCelcius);

			let weatherArray=[weather,temp,maxTemp,minTemp,windSpeed];





				$('#weather').html(weather);
				$('.windSpeed').append('<br>'+windSpeed+'m/s');
				$('.weather-type').html(weatherCondition);

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
