import React, { useState } from 'react'

const App = () => {
  const [colour,setcolour]=useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button className='outline-none px-4 bg-red-500 py-1 rounded-full'
            onClick={()=>setcolour("red")}>Red</button>
            <button className='outline-none px-4 bg-green-400 py-1 rounded-full'>green</button>
            <button className='outline-none px-4 bg-blue-400 py-1 rounded-full'>blue</button>
            <button className='outline-none px-4 bg-black py-1 rounded-full text-white'>black</button>
          </div>
      </div>
    </div>
  )
}

export default App