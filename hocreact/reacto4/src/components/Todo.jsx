import { useState } from "react";
import { useDispatch, useSelector } from "../core/hook";

const Todo = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { name } = Object.fromEntries([...new FormData(e.target)]);
    dispatch({
      type: "todo/add",
      payload: name,
    });
    setName("");
  };
  const handleRemove = (index) => {
    dispatch({
      type: "todo/remove",
      payload: +index,
    });
  };
  return (
    <div>
      <h2>Todo App</h2>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <span
              onClick={() => {
                handleRemove(index);
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </form>
    </div>
  );
};

export default Todo;
