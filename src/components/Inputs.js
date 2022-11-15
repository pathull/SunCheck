import './Inputs.css'

export default function Inputs({ setIuCount, postEvent }) {

  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }


  const submitHandler = async (e) => {
    e.preventDefault()

    const date = new Date(e.target.date.value);

    const inputed = {
      check: e.target.check.value,
      date: date.toISOString(),
      activity: e.target.activity.value
    };

    console.log(inputed)
    postEvent(inputed);
    e.target.reset();

  }

  return (
    <form className='input-container' onSubmit={submitHandler}>
      <input id='iu-input' name='check' maxLength='4' onInput={maxLengthCheck} type='number' onChange={(e) => setIuCount(e.target.value.slice(0, 4))} placeholder={'Vitamin-D Estimated IU Consumed'} required />
      <input id='iu-input' name='activity' maxLength={10} type='text' placeholder={'Activity (ex. walk, supplement)'} required />
      <input id='iu-input' name='date' type='datetime-local' required />
      <button className='input-btn' type='submit'>Submit</button>
    </form>
  )
}