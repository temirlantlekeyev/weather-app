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
 

  return (
    <> 
    <Weather/>
    </>
  )
}

export default App
