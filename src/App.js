import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/search-city';
import { WEATHER_URL, WEATHER_KEY } from './components/APIs'
import PresentWeather from './components/PresentWeather';
import Forecast from './components/Forecast';
import Info from './components/calculations/Info';
import Calendarr from './components/calculations/Calendar';
import IU from './components/calculations/IU';
import Inputs from './components/Inputs';



function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [iuCount, setIuCount] = useState(0)

  const onSearchChangesHandler = (data) => {
    const [lat, lon] = data.value.split(' ');
    const presentWeatherFetch = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=imperial`)
    const forecastWeatherFetch = fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=imperial`)

    Promise.all([presentWeatherFetch, forecastWeatherFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();
        setWeather({ city: data.label, ...weatherRes });
        setForecast({ city: data.label, ...forecastRes });
      })
      .catch((error) => console.log(error));
  }



  console.log(forecast)
  return (
    <div>
      <Header />
      <div className='dash-container'>
        <div className='info-iu-container'>
          <IU counter={iuCount} />
          <Info />
        </div>
        <Calendarr />
      </div>
      <div className='hero-section'>
        <div className="weather-container">
          <Inputs setIuCount={setIuCount} />
          <Search onSearch={onSearchChangesHandler} />
          <>
            {weather && <PresentWeather data={weather} />}
            {forecast && <Forecast data={forecast} />}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
