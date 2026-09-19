import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext.js'
import TodoForm from './components/TodoForm.jsx'
import { TodoItem } from './components/TodoItem.jsx'


const App = () => {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const ToggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  //localStorage
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,ToggleComplete,updateTodo}}>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#dbeafe,_transparent_42%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-10 text-slate-900 sm:px-6">
        <section className="mx-auto w-full max-w-2xl">
          <header className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Daily focus</p>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">My todos</h1>
            </div>
            <span className="rounded-full bg-white/80 px-3 py-1.5 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200">
              {todos.length} {todos.length === 1 ? 'item' : 'items'}
            </span>
          </header>

          <div className="mb-6 rounded-2xl bg-white/75 p-4 shadow-xl shadow-indigo-100/50 ring-1 ring-white backdrop-blur sm:p-5 [&_form]:flex [&_form]:gap-3 [&_input]:min-w-0 [&_input]:flex-1 [&_input]:rounded-xl [&_input]:border [&_input]:border-slate-200 [&_input]:bg-slate-50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-slate-900 [&_input]:outline-none [&_input]:transition [&_input]:focus:border-indigo-400 [&_input]:focus:ring-4 [&_input]:focus:ring-indigo-100 [&_button]:rounded-xl [&_button]:bg-indigo-600 [&_button]:px-5 [&_button]:font-bold [&_button]:text-white [&_button]:transition [&_button]:hover:bg-indigo-700 [&_button]:active:scale-95">
            <TodoForm />
          </div>

          <section className="space-y-3" aria-label="Todo list">
            {todos.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 px-6 py-12 text-center text-slate-500">
                <p className="text-lg font-semibold text-slate-700">Your list is clear</p>
                <p className="mt-1 text-sm">Add a task above to get started.</p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </section>
        </section>
      </main>
    </TodoProvider>
  )
}

export default App