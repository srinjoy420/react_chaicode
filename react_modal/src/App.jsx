import React, { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
  const[showModal, setShowModal] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold">Popup Modal</h1>
      <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setShowModal(true)}>
        Click for info
      </button>
      {showModal && <Modal onClose={()=>setShowModal(false)}/>}
    </div>
  )
}

export default App