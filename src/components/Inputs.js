import React from 'react'
import './Inputs.css'

export default function Inputs({ data }) {

  return (
    <div className='input-container'>
      <input type='text' placeholder={'Minutes Spent Outdoors'} />
      <input type='text' placeholder={'Vitamin-D IU (ex.supplement, meal)'} />
      <button className='input-btn' type='submit'>Submit</button>
    </div>
  )
}