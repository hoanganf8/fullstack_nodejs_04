"use server";
import { revalidatePath } from "next/cache";
import { todoApi } from "./page";
import { cookies, headers } from "next/headers";
export const handleAddTodo = async (formData) => {
  const title = formData.get("title");
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (response.ok) {
    const path = headers().get("next-url");
    revalidatePath(path);
    cookies().set("title", title);
  }
};
