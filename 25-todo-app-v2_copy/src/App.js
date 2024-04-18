import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import TodosActions from './Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteDotoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const resetTodoHandle = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodoHandle}
          deleteCompletedTodos={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteDotoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
