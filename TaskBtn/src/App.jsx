import { useState } from 'react'
import axios from 'axios'

import './App.css'


function App() {
  const [date, setDate] = useState()
  const [time,setTime] = useState()

  function getDate(){
     axios.get('http://localhost:3001/getDate')
     .then((e)=>{
      console.log(e)
      setDate(e.data.formatDate)
      setTime(e.data.formatTime)
     })
     .catch((e)=>console.log(e))
  }
  return (
    <>
      <div>
     <button onClick={getDate}>Get Date & Time</button>
       <p>Current Date & time: {date}</p>
       <p>Current Time: {time}</p>
       </div>
    </>
  )
}

export default App
