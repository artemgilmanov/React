import { useState } from 'react';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHnaler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteDotoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx != index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHnaler} />
      <TodoList todos={todos} deleteTodo={deleteDotoHandler} />
    </div>
  );
}

export default App;
