import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    todos:[{id:1,text:"hello"}]
}
// function sayHello(){
//     console.log("hello world");
    
// }
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(), // for unique id
                text:action.payload.text
            }
            state.todos.push(todo) // pushb the new todos on the todo
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        },
        //assigment update todo
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((prevTodo)=>prevTodo.id===action.payload.id ? {...prevTodo,text:action.payload.text}:prevTodo)
        }

    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer