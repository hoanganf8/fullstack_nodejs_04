import Counter from "./components/Counter";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div>
      <h1>useReducer + Context API</h1>
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
