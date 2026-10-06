import React, { useRef } from 'react'
import {X,ArrowDownToLine} from "lucide-react"


const Modal = ({onClose}) => {
    const modelref=useRef()
    const closeModal=(e)=>{
        if(modelref.current===e.target){
            onClose()
        }

    }

  return (
    <div ref={modelref} onClick={closeModal} className="fixed inset-0 flex items-center justify-center bg-blue-950/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-blue-700 p-8 text-white shadow-2xl sm:p-10">
        <button
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-full p-2 text-blue-100 transition hover:bg-blue-600 hover:text-white"
          type="button"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h1 className="mb-3 pr-8 text-2xl font-bold sm:text-3xl">
          Please register for job opening
        </h1>
        <p className="mb-6 text-blue-100">
          Please fill out the form below to apply for this position.
        </p>
        <input
          className="mb-4 w-full rounded-lg border border-blue-300/40 bg-blue-950/40 px-4 py-3 text-white outline-none placeholder:text-blue-200 focus:border-white focus:ring-2 focus:ring-white/30"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
          type="button"
          onClick={onClose}
        >
          <ArrowDownToLine size={18} />
          Download the e book
        </button>
      </div>
    </div>
  )
}

export default Modal