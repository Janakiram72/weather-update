const apiKey = "d29ed4e7d35b62ed8094b9bb845e5886";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function chechWeather(city) {
  if(!city){
        return 
    }
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".weather").style.display="none"
        document.querySelector(".error").style.display="block";
    }
    else{
    const data=await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/hr";
    if(data.weather[0].main === "Clouds"){
        weathericon.src="cloudy.png";  
    }
    else  if(data.weather[0].main==="Clear"){
        weathericon.src="sunny.png";  
    }
    else  if(data.weather[0].main==="Rain"){
        weathericon.src="rainy.png";  
    }
    else  if(data.weather[0].main==="Drizzle"){
        weathericon.src="drizzle.png";  
    } 
    else  if(data.weather[0].main==="Mist"){
        weathericon.src="mist.png";  
    }
    else  if(data.weather[0].main==="Haze"){
        weathericon.src="haze.png";  
    }
    document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none";}
    
}
searchbutton.addEventListener('click',()=>{
    chechWeather(searchbox.value);
})
chechWeather()
