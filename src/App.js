import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login-and-register/Login';
import Register from './components/login-and-register/Register';
import Header from './components/Header';
import Search from './components/search-city';
import { WEATHER_URL, WEATHER_KEY } from './components/APIs'
import PresentWeather from './components/PresentWeather';
import Forecast from './components/Forecast';
import Info from './components/calculations/Info';
import Calendar from './components/calculations/Calendar';
import IU from './components/calculations/IU';
import Inputs from './components/Inputs';





function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [iuCount, setIuCount] = useState(0)
  const [events, setEvents] = useState([]);

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

  const url = `http://localhost:3001`;

  const getAllEvents = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      return setEvents(result);
    } catch (error) {
      return error
    }
  };

  const postEvent = async (event) => {
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      return error
    }
    return setEvents((prevEvents) => [...prevEvents, event]);
  };

  useEffect(() => {
    getAllEvents();
  }, []);



  console.log(forecast)
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<><Header /><Login /></>} />
        <Route path='/register' element={<><Header /><Register /></>} />
        <Route path='/' element={<><Header />
          <div className='dash-container'>
            <div className='info-iu-container'>
              <IU counter={iuCount} />
              <Info />
            </div>
            <div className='calendar-container'>
              <Calendar events={events} />
            </div>
          </div>
          <div className='hero-section'>
            <div className="weather-container">
              <Inputs setIuCount={setIuCount} postEvent={postEvent} />
              <Search onSearch={onSearchChangesHandler} />
              <>
                {weather && <PresentWeather data={weather} />}
                {forecast && <Forecast data={forecast} />}
              </>
            </div>
          </div></>} />
      </Routes>
    </Router>

  );
}

export default App;
