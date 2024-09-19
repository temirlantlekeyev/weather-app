import { useEffect, useRef, useState } from 'react'
import './App.css'
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
