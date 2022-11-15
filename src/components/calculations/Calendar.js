// import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar'
import './Calendar.css'


export default function Calendarr({ events }) {



  return (
    <div className='calendar-container'>
      <Calendar tileContent={'P'} />
    </div>
  )
}
