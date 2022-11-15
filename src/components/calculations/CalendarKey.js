import './CalendarKey.css'

export default function CalendarKey({ event }) {


  const date = (date) => {
    const dateEvent = new Date(date);
    const yr = dateEvent.toLocaleString('en-US', { year: 'numeric' });
    const month = dateEvent.toLocaleString('en-US', { month: '2-digit' });
    const time = dateEvent.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


    return `${month}/${dateEvent.getDate()}/${yr} - ${time}`;
  }


  return (
    <>

      <div className='event-contains'>
        <div className="event-single-body">
          <p className="event-single event-date">{date(event.date)}</p>
          <p className="event-single event-check">{`${event.check}`}<span className='iu-color'>IU</span></p>
          <p className="event-single event-activity">{event.activity}</p>
        </div>
      </div>
    </>
  );
}
