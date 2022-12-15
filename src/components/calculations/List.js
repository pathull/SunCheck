import CalendarKey from './ListKey';
import './List.css';

export default function List({ events }) {
  return (
    <div className="calendar-contains" id="list">
      {events.map((event, index) => (
        <CalendarKey key={index} event={event} events={events} />
      ))}
    </div>
  );
}
