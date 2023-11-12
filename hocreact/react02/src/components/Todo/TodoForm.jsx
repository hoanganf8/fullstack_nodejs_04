/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onGetTodo }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    todo: 
      - id: generate
      - name: Tên công việc
      - completed: false
    */
    if (!name.trim().length) {
      alert("Vui lòng nhập tên công việc");
      return;
    }
    const todo = {
      id: uuidv4(),
      name,
      completed: false,
    };
    onGetTodo(todo); //Đẩy lên Todo
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên công việc..."
        onChange={handleChange}
        value={name}
      />
    </form>
  );
};

export default TodoForm;
