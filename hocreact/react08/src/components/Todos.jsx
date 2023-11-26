import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const Todos = () => {
  const [name, setName] = useState("");
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(name));
    setName("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên công việc..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default Todos;

//Action Creator --> Hàm trả về action
