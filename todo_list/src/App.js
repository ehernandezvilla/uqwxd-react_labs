import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  
  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(), // Remove spaces from the beginning and end of the input string
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      console.log(todos)
    } else {
      alert('Please enter a valid todo');
    }
    document.getElementById('todoAdd').value = '';
  }
  
  // Add the deleteToDo code here

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handleSubmit}>
  <input 
    type ="text" 
    align ="right" 
    id='todoAdd'/>
  <button 
    type="submit">Add Todo</button>
</form>
{todos.map((todo) => 
  <div className="todo" key={todo.id}>
    <div className="todo-text">{todo.text}</div>
    {/* insert delete button below this line */}
    </div>)}
</div>
);
};
export default App;
