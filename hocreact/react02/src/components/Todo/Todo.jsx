import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const handleGetTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };
  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoForm onGetTodo={handleGetTodo} />
    </div>
  );
};

export default Todo;

/*
Todo 
    - TodoList
    - TodoForm
*/
