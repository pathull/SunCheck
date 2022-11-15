import React from 'react'
import './Inputs.css'

export default function Inputs({ setIuCount, postEvent }) {

  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }


  const submitHandler = async (e) => {
    e.preventDefault()

    const inputed = {
      check: e.target.check.value,
    };

    console.log(inputed)
    postEvent(inputed);
    e.target.reset();

  }

  return (
    <form className='input-container' onSubmit={submitHandler}>
      <label>Today's Vitamin-D Consumption (IU)</label>
      <input id='iu-input' name='check' maxLength='4' onInput={maxLengthCheck} type='number' onChange={(e) => setIuCount(e.target.value.slice(0, 4))} placeholder={'1000'} />
      <button className='input-btn' type='submit'>Submit</button>
    </form>
  )
}