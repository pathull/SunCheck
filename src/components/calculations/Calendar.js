import CalendarKey from './CalendarKey'
import './Calendar.css'


export default function Calendar({ events }) {



  return (
    <div className='calendar-contains' id='list'>
      {events.map((event, index) => (
        <CalendarKey key={index} event={event} events={events} />
      ))}
    </div>
  )
}
