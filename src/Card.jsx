import "./App.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    return (
        <>
        <div className="cardContainer">
            <img className="icon" src={sun}/>
            <div className="cityName">Almaty</div>
            <div className="temp">25°C</div>
            <div className="feels">Feels like: 26°C</div>
            <div className="weatherType">Sunny</div>
            <div className="humiditySpeed">
                <div className="humidity"><span><FontAwesomeIcon icon={faWater} /></span>: 20%</div>
                <div><span><FontAwesomeIcon icon={faWind} /></span>: 75 km/h</div>
            </div>
        </div>
        </>
    )
}

export default Card