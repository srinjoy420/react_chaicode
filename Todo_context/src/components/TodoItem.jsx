import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'


export const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todomsg, setTodoMsg] = useState(todo.todo)
  const { addTodo, deleteTodo, ToggleComplete, updateTodo } = useTodo()
  const EditTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todomsg })
    setIsTodoEditable(false)

  }
  const toggleCompleteted = () => {
    ToggleComplete(todo.id)
  }
  return (
    <div className={`flex border-black/10 rounded-lg py-1.5 gap-x-3 shadow-sm shadw-white/50 duration-300 text-black ${todo.completed ? "bg-[#cde9a7]" : "bg-[#ccbed7]"
      }`}>
      <input
        type='checkbox'
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleteted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            EditTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >  {isTodoEditable ? "📁" : "✏️"}</button>
      <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>

    </div>
  )
}
