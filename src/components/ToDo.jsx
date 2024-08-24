import React, { useState } from 'react';
import Form from './Form';
import ToDoList from './ToDoList';
import Footer from './Footer';

function ToDo() {
  const [todos,setTodos]=useState([]);
  const completedTodos=todos.filter((todo)=>todo.done).length
  const totalTodos=todos.length;
  return (
    <>
      <div className='App'>
       <Form  todos={todos} setTodos={setTodos}/>
       <ToDoList todos={todos} setTodos={setTodos}/>
       <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </div>
    </>
  );
}

export default ToDo;
