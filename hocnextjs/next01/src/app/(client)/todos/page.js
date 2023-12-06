import { revalidatePath, revalidateTag } from "next/cache";
import TodoForm from "./TodoForm";

export const todoApi = `http://localhost:3005/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi, {
    // cache: "force-cache",
    next: {
      //   revalidate: 10,
      tags: ["todos"],
    },
  });
  return response.json();
};

//Clear cache
const handleClearCache = async () => {
  "use server";
  //   revalidatePath("/todos");
  revalidateTag("todos");
};

const TodoPage = async () => {
  const todoList = await getTodos();

  return (
    <div>
      <h1>Todos App</h1>
      <form action={handleClearCache}>
        <button>Refresh</button>
      </form>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
      <TodoForm />
    </div>
  );
};

export default TodoPage;
