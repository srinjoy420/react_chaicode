import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext.js'


const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo('')


    }

    return (
        <div>
            <form onSubmit={add}>
                <input
                    type='text'
                    placeholder='add todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default TodoForm