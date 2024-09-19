import { useEffect, useRef, useState } from 'react'
import './App.css'
import Card from './Card'
import Search from './Search'
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
import Weather from './weather'

function App() {

  const apiKey = "aefd2f71e63c8a5170986fe5d1730612"
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=almaty&appid=aefd2f71e63c8a5170986fe5d1730612"
 
  // const [count, setCount] = useState(0)

  // const handleCount = () => {
  //    setCount((count)=> count + 1)
  // }

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState("")

  const handleSearch = (e)=> {
      setSearch(e.target.value)
      console.log(e.target.value)
  }

  const searchBtn = ()=> {
      console.log("click")
      setSearch("")
  }

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

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState([])

  const addData = (city)=> {
    try{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=aefd2f71e63c8a5170986fe5d1730612`)
      .then((response)=> {
        console.log(response)
        const icon = icons[response.data.weather[0].icon] || clearSkyd
        setWeather({
          location: response.data.name,
          tempurature: Math.floor(response.data.main.temp),
          feels : Math.floor(response.data.main.feels_like),
          wind : response.data.wind.speed,
          humidity : response.data.main.humidity,
          description: response.data.weather[0].description,
          icon : icon
        })
        setWeatherData((data)=>[...data, weatherData])
      // setSearch("")
      })
    }   
     catch (error) {
      // if(city !== response.data.name || "")
      //   alert("City not found")
      //   console.error(error)
      //   return
     }  
    
    setSearch("")
  }

  const getWeather = (city)=> {
    
    try{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=aefd2f71e63c8a5170986fe5d1730612`)
      .then((response)=> {
        console.log(response)
        const icon = icons[response.data.weather[0].icon] || clearSkyd
        setWeather({
          location: response.data.name,
          tempurature: Math.floor(response.data.main.temp),
          feels : Math.floor(response.data.main.feels_like),
          wind : response.data.wind.speed,
          humidity : response.data.main.humidity,
          description: response.data.weather[0].description,
          icon : icon
        })
      setSearch("")
      }) 
    }   
     catch (error) {
      alert("city not found")
        // console.error("City not found")
      // if(city !== response.data.name || "")
      //   alert("City not found")
      //   console.error(error)
      //   return
     }  
  }

  useEffect(()=>{
    // getWeather("")
  }, [])

  return (
  
    <> 
    <Weather/>
      {/* <div className="searchContainer">
            <input className="searchInput"
            ref={inputRef}
            value={search} 
            type="text" 
            placeholder="Enter city"
            onChange={(e)=> handleSearch(e)} />
            <button className="searchBtn" onClick={()=>getWeather(inputRef.current.value)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div> */}

        {/* {weather ?
        <>
          <div className="cardContainer">
            <img className="icon" src={weather.icon}/>
            <div className="cityName">{weather.location}</div>
            <div className="temp">{weather.tempurature}°C</div>
            <div className="feels">Feels like: {weather.feels}°C</div>
            <div className="weatherType">{weather.description}</div>
            <div className="humiditySpeed">
                <div className="humidity"><span><FontAwesomeIcon icon={faWater} /></span>: {weather.humidity} %</div>
                <div><span><FontAwesomeIcon icon={faWind} /></span>: {weather.wind} km/h</div>
            </div>
        </div>
        </> : <></>} */}
    </>
  )
}

export default App
