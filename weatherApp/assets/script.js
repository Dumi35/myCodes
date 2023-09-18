let today = document.getElementById("date")
let searchedCity = document.getElementById("city")
let cityName = document.getElementById("cityName")
let temperature = document.getElementById("temperature")
let degree = document.getElementById("degree")

let weatherimg=document.getElementById("weatherimg")

const weatherApiKey = "626f12f3b24cd6f2a652f4fd64480f45"
const timeZoneApiKey = "KYDNPRO7B7G1"

const locationApiKey="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"
function changeCity(){
    cityName.innerText=searchedCity.value
}

async function getWeather(){
    let city = cityName.innerText
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
    const data = await response.json();
    console.log(data)

    temperature.innerText= data.main.temp + "C"

    document.querySelector(".weatherDesc").innerText= data.weather[0].description
    
    searchedCity.value=""
   
    
    /* change weather img based on wather description */
    try{
        let imgSrc= `assets/images/${data.weather[0].description}.png`
        const reply = await fetch(imgSrc)
        if (reply.ok){
            document.querySelector("#weatherimg").src=imgSrc
           
        }
        else {
            throw new Error("Image not found.");
        }
    }
    catch(error){
        document.querySelector("#weatherimg").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
    /* console.log(data.rain.probability) */
    getCurrentDate()
    
}

getWeather() 

async function getCurrentDate(){
    let city = cityName.innerText

    const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
    const response = await fetch(weatherUrl)
    const data = await response.json();


    const timeUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZoneApiKey}&format=json&by=position&lat=${data.coord.lat}&lng=${data.coord.lon}`


    try {
        // Fetch time zone information from TimeZoneDB API
        const response2 = await fetch(timeUrl);
        const timeData = await response2.json();
  
        let dateString = timeData.formatted
        
        // Get the time zone offset from the API response2
        const timeZoneOffset = timeData.gmtOffset;
      
          
        // Parse the input date string
        const inputDate = new Date(dateString);
            
    
        // Format the target date based on the target time zone
        const options = {year: 'numeric', month: 'long', day: 'numeric',hour:'numeric', minute: 'numeric', second: 'numeric'};
        const formattedDate = inputDate.toLocaleDateString(undefined, options);
    
        console.log(formattedDate)
        today.innerText=formattedDate
        return formattedDate
      } catch (error) {
        console.error('Error fetching time zone information:', error);
        return null;
      }

     

}




async function fetchCityData(){
    let Url="https://countriesnow.space/api/v0.1/countries/states"
    const response = await fetch(Url)
    const data = await response.json();
    
    const datalist = document.getElementById('cities');

    data.data.forEach(city=>{
        const option = document.createElement('option');
        option.value = city.name;
        datalist.appendChild(option);
    })
}

fetchCityData()

