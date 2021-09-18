import React from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
  let myStyle = {
     minHeight:'50vh',
     margin:"40px auto",
   
 }

    return (
        <>
        <div className = "container my-3" style = {myStyle}>
        <h3>Todos List</h3>
        {props.todos.length === 0? "No todos to display" : props.todos.map((todo) => {
       
       return (
     <TodoItem todo = {todo} key = {todo.sn} onDelete = {props.onDelete}/>
      
       
        )})} 
       
        
        </div>
        </>
    )
}

export default Todos
