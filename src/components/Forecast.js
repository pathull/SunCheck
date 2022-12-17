import './Forecast.css';
import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton
} from 'react-accessible-accordion';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Forecast({ data }) {
  const weekday = new Date().getDay();
  const forecastedDays = weekdays
    .slice(weekday, weekdays.length)
    .concat(weekdays.slice(0, weekday));
  const sunCheck = (arg) => {
    if (arg.weather[0].description === 'clear sky') {
      return `icons/01d.png`;
    } else if (arg.weather[0].description === 'few clouds') {
      return `icons/02d.png`;
    } else if (arg.weather[0].description === 'scattered clouds') {
      return `icons/03d.png`;
    } else {
      return `icons/${arg.weather[0].icon}.png`;
    }
  };

  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 6).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="item-weather item-weather-background">
                  <div className="card-content">
                    <div className="temp-features">
                      <p className="weather-description">{item.weather[0].description}</p>
                      <p className="forecast-temp">{Math.round(item.main.temp)}°F</p>
                    </div>
                    <div>
                      <h4 className="day">{forecastedDays[index]}</h4>
                    </div>
                    <div className="right-content">
                      <div className="temp-features">
                        <span className="label">
                          Wind: <span className="value">{item.wind.speed}m/s</span>
                        </span>
                        <span className="label">
                          Humidity: <span className="value">{item.main.humidity}%</span>
                        </span>
                      </div>
                      <div>
                        <img
                          alt="weather"
                          className="icon-weather-forecast"
                          src={sunCheck(item)}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
