import React, { useState } from 'react'
import Chai from './Chai'


const App = () => {
  const username="hello"
  let[counter,setcounter]=useState(15)
  const addvalue=()=>{
    setcounter(counter+1)
  }
  return (
    <div>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>count++</button>
      <button>count--</button>
    </div>
  )
}

export default App