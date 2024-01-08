const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

var weatherIcon = document.querySelector('.weather-icon');


async function getWeather() {
    let city = document.getElementById("cityName").value;
    console.log("City",city);

    let res = await fetch(
      `${apiUrl}${city}&appid=e8526faefaba03b111cd3a5f002f9278`
    );
    let data = await res.json();
    console.log("Dta",data);

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("wind").innerHTML = data.wind.speed;

if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
}else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
}





    document.querySelector('.weather').style.display = "block";
  }