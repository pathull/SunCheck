import './PresentWeather.css'
import Inputs from './Inputs'


export default function PresentWeather({ data }) {
  return (
    <div className='item-weather'>
      <div className='card-content'>
        <div className='temp-features'>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
          <p className='main-temp'>{Math.round(data.main.temp)}°F</p>
        </div>
        <div className='right-content'>
          <div className='temp-features'>
            <span className='label'>Feels like: <span className='value'>{Math.round(data.main.feels_like)}°F</span> </span>
            <span className='label'>Wind: <span className='value'>{data.wind.speed}m/s</span></span>
            <span className='label'>Humidity: <span className='value'>{data.main.humidity}%</span></span>
          </div>
          <div>
            <img alt='weather' className='icon-weather' src={`icons/${data.weather[0].icon}.png`}></img>
          </div>
        </div>
      </div>
      <Inputs />
    </div>
  )
}
