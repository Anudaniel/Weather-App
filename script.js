

let weather = {
    apiKey: "69f5a9fb1d80021336e0a785027138ad",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.appKey;
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
   displayWeather: function(data) {
const { name } = data;
const { icon, description } = data.weather;
const { temp, humidity } = data.main;
const { speed }  = data.wind;
console.log(name,icon,description,temp,humidity,speed)
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src =
"https://openweathermap.org/img/wn/" + icon + ".png";
document.querySelector(".description").innerText = description;
   }
};