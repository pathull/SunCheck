import React from 'react'
import './Inputs.css'

export default function Inputs({ data }) {

  return (
    <div className='input-container'>
      <input type='text' placeholder={'Total Minutes Sun Exposure (10am - 3pm)'} />
      <input type='text' placeholder={'Total Vitamin-D IUs (ex.supplement, meal)'} />
      <button className='input-btn' type='submit'>Submit</button>
    </div>
  )
}