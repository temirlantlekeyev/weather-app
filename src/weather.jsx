import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import sun from "./assets/sun.png"
import clearSkyd from "./assets/01d@2x.png"
import clearSkyn from "./assets/01n@2x.png"
import fewCloudsd from "./assets/02d@2x.png"
import fewCloudsn from "./assets/02n@2x.png"
import scattered from "./assets/03d@2x.png"
import broken from "./assets/04n@2x.png"
import shower from "./assets/09d@2x.png"
import raind from "./assets/10d@2x.png"
import rainn from "./assets/10n@2x.png"
import thunder from "./assets/11d@2x.png"
import snow from "./assets/13d@2x.png"
import mist from "./assets/50d@2x.png"
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


const Weather = ()=> {
    
const apiKey = "aefd2f71e63c8a5170986fe5d1730612"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=almaty&appid=aefd2f71e63c8a5170986fe5d1730612"
 
  const icons = {
    "01d" : clearSkyd,
    "01n" : clearSkyn,
    "02d" : fewCloudsd,
    "02n" : fewCloudsn,
    "03d" : scattered,
    "03n" : scattered,
    "04d" : broken,
    "04n" : broken,
    "09d" : shower,
    "09n" : shower,
    "10d" : raind,
    "10n" : rainn,
    "11d" : thunder,
    "11n" : thunder,
    "13d" : snow,
    "13n" : snow,
    "50d" : mist,
    "50n" : mist,
  }


  const [searchInput, setSearchInput] = useState("")
  const [weatherData, setWeatherData] = useState("")
  

    const handleSearch = (e)=> {
    setSearchInput(e.target.value)
    console.log(e.target.value)
    }


  const getData = ()=> {
  if(searchInput === ""){
    alert("Enter city")
    return
  }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchInput}&appid=aefd2f71e63c8a5170986fe5d1730612`)
    .then((response)=>{
      console.log(response)
      const icon = icons[response.data.weather[0].icon] || clearSkyd
        setWeatherData({
          location: response.data.name,
          tempurature: Math.floor(response.data.main.temp),
          feels : Math.floor(response.data.main.feels_like),
          wind : Math.floor(response.data.wind.speed),
          humidity : response.data.main.humidity,
          description: response.data.weather[0].main,
          icon : icon
        })
        console.log(response.data)
    })
    .catch((error)=>{
      if(error.response && error.response.status === 404){
        alert("City not found")
      } else {
        alert("Please try again")
      }
    })
    setSearchInput("")  
  }

    return (
        <>
        <div className="searchContainer">
            <input className="searchInput"
            value={searchInput} 
            type="text" 
            placeholder="Enter city"
            onChange={(e)=> handleSearch(e)}
            />
            <button className="searchBtn" onClick={getData}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
          {weatherData && weatherData.location ? <>
            <div className="cardContainer">
            <img className="icon" src={weatherData.icon}/>
            <div className="cityName">{weatherData.location}</div>
            <div className="temp">{weatherData.tempurature}°C</div>
            <div className="feels">Feels like: {weatherData.feels}°C</div>
            <div className="weatherType">{weatherData.description}</div>
            <div className="humiditySpeed">
                <div className="humidity">
                  <span><FontAwesomeIcon icon={faWater} />: {weatherData.humidity}% </span>
                  <div className='humiditytitle'>Humidity</div>
                  </div>
                <div className='wind'>
                  <span><FontAwesomeIcon icon={faWind} />: {weatherData.wind}km/h </span>
                  <div className='windtitle'>Wind Speed</div>
                </div>
            </div>
        </div>
          </> : null}
          
      

    </>
    )
}

export default Weather;