import React from 'react'
import styles from './ToDoItem.module.css'

function ToDoItem({ item, todos, setTodos }) {
  
  function handleDelete(item) {
    console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const updatedTodos = todos.map((todo) => 
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    console.log(todos);
  }
  const className=item.done ? styles.completed : " "

  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span 
           className={className}
          onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
          <span>
            <button onClick={() => handleDelete(item)} className={styles.dltButton}>x</button>
          </span>
        </div>
        <hr className={styles.line} />
      </div>
    </>
  )
}

export default ToDoItem
