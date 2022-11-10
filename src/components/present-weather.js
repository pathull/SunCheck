import './present-weather.css'

export default function PresentWeather() {
  return (
    <div className='item-weather'>
      <div className='card-content-top'>
        <div>
          <p className='city'>Los Angeles</p>
          <p className='weather-description'>Sunny</p>
        </div>
        <img alt='weather' className='icon-weather' src='icons/01d.png'></img>
      </div>
    </div>
  )
}
