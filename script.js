const inputbox=document.querySelector(".input-box")
const inputbtn=document.getElementById("searchBtn")
const wheaterimg=document.querySelector(".weather-img")
const temp=document.querySelector(".temperature")
const desc=document.querySelector(".description")
const humidity=document.getElementById("humidity")
const winspeed=document.getElementById("wind-speed")



async function checkweather(city){
    let l=document.querySelector(".location-not-found")
    let c=document.querySelector(".weather-body")
    let apikey="9393ff88e2c06a4792f5ff501911fb60"
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${apikey}`
    let a=await fetch(`${url}`)
    let weatherdata=await a.json()
    console.log(weatherdata)
    
    if(weatherdata.cod==='404'){
        l.style.display="block"
        c.style.display="none"
  return 
    }
    else{
        c.style.display="block"
        l.style.display="none"

    
    temp.innerHTML=`${Math.floor(weatherdata.main.temp - 273.15)}°C`

    desc.innerHTML=`${weatherdata.weather[0].description}`
    humidity.innerHTML=`${weatherdata.main.humidity}`
    winspeed.innerHTML=`${weatherdata.wind.speed}Km/H`
    let citycond=`${weatherdata.weather[0].main}`
    console.log(citycond)
   
switch(weatherdata.weather[0].main){
case 'Clouds':
    wheaterimg.src="/assets/cloud.png";
    break;
case 'Clear':
    wheaterimg.src="/assets/clear.png";
    break;
case 'Rain':
    wheaterimg.src="/assets/rain.png";
    break;
case 'Mist':
    wheaterimg.src="/assets/mist.png";
    break;
case 'Snow':
    wheaterimg.src="/assets/snow.png";
    break;
}
    }
}


inputbtn.addEventListener("click",()=>{
    checkweather(inputbox.value)
})[0].main