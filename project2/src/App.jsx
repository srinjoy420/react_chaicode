import React from 'react'
import { useState, useCallback,useEffect,useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //refernce ref hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIZKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"

    if (numberAllowed) str += "0123456789"
    if (character) str += "*/-+!@#!@#"

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, character,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,character,passwordGenerator])
  //copyb
  const copyPasswordToclipBoard=useCallback(()=>{
    // passwordRef.current?.select() ; //highlight the copy
    password.current?.setselectionRange(0,3) //select with range
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center p-6'>
      <div className='w-full max-w-lg rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200'>
        <h1 className='mb-6 text-center text-3xl font-bold text-slate-800'>Password Generator</h1>

        <div className='flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm'>
          <input
            type='text'
            value={password}
            readOnly
            ref={passwordRef}
            placeholder='Your password'
            className='w-full bg-white px-4 py-3 text-base text-slate-800 outline-none placeholder:text-slate-400'
          />
          <button
            onClick={copyPasswordToclipBoard}
            className='bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700'
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          {/* length input box */}
           <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={10}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <lable>
              Length:{length}
            </lable>
           </div>
           {/* numbers check box */}
           <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberinput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <lable>Number</lable>
           </div>
           {/* charecter */}
           <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={character}
            id='numberinput'
            onChange={()=>{
              setCharacter((prev)=>!prev)
            }}
            />
            <lable>Charecter</lable>
           </div>


        </div>
      </div>
    </div>
  )
}

export default App