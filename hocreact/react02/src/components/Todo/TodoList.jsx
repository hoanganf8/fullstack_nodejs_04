/* eslint-disable react/prop-types */
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(({ id, name, completed }) => (
        <li key={id}>
          <input type="checkbox" defaultChecked={completed} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
