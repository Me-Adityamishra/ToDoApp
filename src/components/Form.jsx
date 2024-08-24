import React, { useState } from 'react'
import styles from './Form.module.css'
function Form({todos,setTodos}) {
  // const [todo,setTodo]=useState("");
  const [todo,setTodo]=useState({name:"",done:false});
  
  function handleSubmit(e)
  {
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo({name:"",done:false});
   
  }
  return (
    <>
    <form  className={styles.todoform}
    onSubmit={handleSubmit}>
    <div className={styles.inputContainer}>
    <input
            className={styles.modernInput}
            onChange={(e)=>setTodo({name:e.target.value,done:false })}
            value={todo.name}
            type="text"
            placeholder="Enter a toDo Item"
          />
          <button className={styles.modernButton} type="submit">Add</button>
    </div>
          
        </form>
    
    </>
  )
 
}

export default Form
