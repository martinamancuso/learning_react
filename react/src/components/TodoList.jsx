// Create a 'TodoList' component that renders a 'ul' tag with a 'li' tag for each item contained in the 'todos' state variable.
// The 'todos' state variable should be an array of strings.
// The 'TodoList' component should also contain an 'input' tag and a 'button'.
// When the button is clicked, the event handler should add the value of the 'input' tag to the 'todos' array.

import { useState } from "react";

export function TodoList() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, inputValue]);
    setInputValue("")
  }

  function resetTodos() {
    setTodos([])
  }

  function removeTodo(index) {
    console.log(index);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}<button onClick={() => removeTodo(index)}>Remove Todo</button>
          </li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Aggiungi Todo</button>
      <button onClick={resetTodos}>Reset Todos</button>
    </div>
  );
}
