const inputCity = document.getElementById("inputCity");
const submitbtn = document.getElementById("button");
const container = document.getElementById("weatherReport");
const image = document.getElementById("Image");

const api_key = "b37446b22bb88ffb292f9356c20e1338"
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


submitbtn.addEventListener("click", createCityInfo);

// async function WeatherInfo(){
//     const response = await fetch(api_url  + `&appid=${api_key}`);
//     var data = await response.json();

//     console.log(data);
// }

// WeatherInfo();


function createCityInfo(){

    async function WeatherInfo(city){
        try
    {
        const response = await fetch(api_url  + city + `&appid=${api_key}`);
        let data = await response.json();
    
        if(data.weather[0].main == "Clouds"){
            console.log(data.weather[0].main);
            Image.src = "./cloudy (2).png";
        }
        else if(data.weather[0].main == "Clear"){
            Image.src = "./sun.png";
        }
        else if(data.weather[0].main == "Rain"){
            Image.src = "./storm.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            Image.src = "./raining.png";
        }
        else if(data.weather[0].main == "Haze"){
            Image.src = "./haze.png";
        }
        else if(data.weather[0].main == "Snow"){
            Image.src = "./snow.png";
        }
        else if(data.weather[0].main == "Fog"){
            Image.src = "./fog.png";
        }
        else{
            Image.src = "./cloudy.png";
        }
        const iDiv = document.createElement("div");
        iDiv.innerHTML = 
        `<div class="cityReport">
        <h1>${Math.round(data.main.temp)} °C <div id="ImageDiv"><img src="${Image.src}" alt="icon" id="Image"></div></h1>
        <div class="cityCon">
        <h2>${data.name}</h2>
        <h4>${data.weather[0].main}</h4>
        </div>
        <div class="humWin">
        <h3> <i class="fa-solid fa-droplet"></i> Humitity <br> ${data.main.humidity}%</h3>
        <h3><i class="fa-solid fa-wind"></i> wind speed <br> ${data.wind.speed}Km/h </h3>
        </div>
        </div>`

    container.appendChild(iDiv);
    }
    catch(err){
        console.log(err);
        alert("something went wrong...Just Refresh and you will be good to go");
    }
        

    }
    WeatherInfo(inputCity.value);
    inputCity.value = "";
}