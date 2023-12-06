"use client";

import { useRef } from "react";
import { handleAddTodo } from "./action";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { todoApi } from "./page";

const TodoForm = () => {
  //   const router = useRouter();
  //   const [title, setTitle] = useState("");
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch(todoApi, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ title }),
  //     });
  //     if (response.ok) {
  //       router.refresh();
  //     }
  //   };
  const formRef = useRef();
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await handleAddTodo(formData);
        formRef.current.reset();
      }}
    >
      <input type="text" placeholder="Tên công việc..." name="title" />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;

//Enhanced Object Literal
