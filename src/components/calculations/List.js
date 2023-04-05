import ListKey from './ListKey';
import './List.css';

export default function List({ events }) {
  return (
    <div className="listkey-contains" id="list">
      {events.map((event, index) => (
        <ListKey key={index} event={event} events={events} />
      ))}
    </div>
  );
}
