import './App.css';
import React, {useState} from 'react';

function App() {

  // List of tasks
  const [todos, setTodos] = useState ([
    {name: "Buy shopping", priority: "high", isPriority: true},
    { name: "Clean bathroom", priority: "low", isPriority: false },
    { name: "Car's MOT", priority: "high", isPriority: true }
  ])

  // New Todo State
  const [newTodo, setNewTodo] = useState()
  const [isPriority, setPriority] = useState()

  // const checkPriority = ((index) => {
  //   const copyTodos = [...todos]
  //   if (copyTodos[index] === "high") {
  //     copyTodos[index] = true
  //   } else {
  //     copyTodos[index] = false
  //   }
  // })

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.isPriority  ?  "high" :  "low"}>
        <span>{todo.name}</span>
        {todo.isPriority ? <button className="high" 
        onClick={() => lowPriorityTodo(index)}>High Priority!</button> : 
        <button onClick={() => highPriorityTodo(index)} style={{background: 'green'}}>Low Priority</button>}
      </li>
    )
  })

  const handleTodoInput = ((event) => {
    setNewTodo(event.target.value)
  })

  const saveNewTodo = ((event) => {
    event.preventDefault()
    const copyTodos = [...todos]
    copyTodos.push({name: newTodo,  priority: "", isPriority: isPriority})
    setTodos(copyTodos)
    setNewTodo("")
  })
  
  const highPriorityTodo  = ((index) => {
    const copyTodos = [...todos]
    copyTodos[index].isPriority = true
    setTodos(copyTodos)
  })

  const lowPriorityTodo  = ((index) => {
    const copyTodos = [...todos]
    copyTodos[index].isPriority = false
    setTodos(copyTodos)
  })

  const handleRadioClick = ((event) => {
    setPriority(event.target.value)
  })

  return (
    <div className="App">

      <h1> Todo's List</h1>
      <hr></hr>

      <ul>
        {todoNodes}
      </ul>

      <form onSubmit={saveNewTodo}>
        <label htmlFor='new_todo'> Add a new Task: </label> <br></br>
        <input id='new_todo' type='text' value={newTodo} onChange={handleTodoInput} required/>
        <input
          type="radio"
          name='radio_btn'
          value='true'
          onChange={handleRadioClick}
        /> High
        <input
          type="radio"
          name='radio_btn'
          value='false'
          onChange={handleRadioClick}
        /> Low
        <input type='submit' value='Add New Task'/>
      </form>
    </div>
  )

}

export default App;
