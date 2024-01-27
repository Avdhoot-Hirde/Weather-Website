var inputcity = document.querySelector('#cityname');
var subbtn = document.querySelector('#submit');
var city = document.querySelector('#cityout');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var desc = document.querySelector('#description');
apik="41a76d18f30780b490a578a3c08f750b";
function conversion(val){
	return(val-273).toFixed(2);
}
subbtn.addEventListener('click',function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid='+apik)
    .then(response => response.json())
	.then(data => {
		var nameval =data['name']
		var description = data['weather']['0']['main']
		var temperature = data['main']['temp']
		var windspd = data['wind']['speed']

		city.innerHTML = nameval
		desc.innerHTML = description
		wind.innerHTML = windspd+"Km/h"
		temp.innerHTML = conversion(temperature)+"\u00B0C"

		let backgroundImage = '';
      switch(description.toLowerCase()) {
        case 'clear': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/4814/4814268.png'; break;
        case 'rain': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/2469/2469994.png'; break;
        case 'snow': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/1409/1409305.png'; break;
        case 'mist': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/2930/2930095.png'; break;
		case 'clouds': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png'; break;
		case 'haze': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/11962/11962071.png'; break;
		case 'fog': backgroundImage = 'https://cdn-icons-png.flaticon.com/128/5243/5243930.png'; break;		
        default: backgroundImage = 'https://cdn-icons-png.flaticon.com/128/2480/2480608.png';
      }
	  let styleNode = document.createElement("style");
      document.head.appendChild(styleNode);
      styleNode.innerHTML = ` #bg { background-image: url('${backgroundImage}'); background-size: cover;}`;

	})
	.catch(err => alert("Wrong entry"));
});