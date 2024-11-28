import React, { useState, useEffect, useMemo } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Add a new task labeled "New todo"
  const addTodo = () => {
    setTodos([...todos, `New todo ${todos.length + 1}`]);
  };

  // Handle custom task input with validation (more than 5 characters)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addCustomTask = () => {
    if (inputValue.length > 5) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    } else {
      alert('Task should be more than 5 characters.');
    }
  };

  return (
    <div id='main'>
      <h1>Todo List</h1>
      <button id='add-todo-btn' onClick={addTodo}>Add todo</button>
      <button id='incr-cnt' onClick={() => setCount(count + 1)}>Increment</button>
      <p>Counter: {count}</p>

      <input
        type="text"
        value={inputValue}
        id='skill-input'
        onChange={handleInputChange}
        placeholder="Add a custom task"
      />
      <button onClick={addCustomTask}>Submit</button>

      <h2>Tasks</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <UseMemoComponent todos={todos} />
      <ReactMemoComponent count={count} />
    </div>
  );
}

export default App;
