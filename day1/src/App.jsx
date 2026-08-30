import React, { useState } from 'react'
import Chai from './Chai'


const App = () => {
  const username="hello"
  let[counter,setcounter]=useState(15)
  const addvalue=()=>{
    if(counter>=20){
      setcounter(20)
    }
    else{
      // setcounter(counter+1)
      setcounter((prev)=>prev+1)
    }
  }
  const removevalue=()=>{
    if(counter<=0){
      setcounter(0)
    }
    else{
      setcounter(counter-1)
    }
  }
  return (
    <div>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>count++</button>
      <button onClick={removevalue}>count--</button>
    </div>
  )
}

export default App