import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calendar, TileContent } from 'react-calendar'
import './Calendar.css'


export default function Calendarr() {


  return (
    <div className='calendar-container'>

      <Calendar tileContent={'✓'} />
    </div>
  )
}
