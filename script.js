const apiKey = "ff65986a2a3fb4ba44403851d7baf8da";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchButton = document.querySelector(".search button");
 const weatherIcon = document.querySelector(".weather-icon")


 async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".errors").style.display="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        let data = await response.json();
        console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";
    //console.log(data.weather[0].main);
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    } 
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".errors").style.display = "none";
}
 }
 searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
 })

    