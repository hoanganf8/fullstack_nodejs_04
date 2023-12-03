"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const ProductForm = () => {
  const [form, setForm] = useState({
    status: "all",
    query: "",
  });
  const pathname = usePathname();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    //pathname?status=active&query=abc
    const url = `${pathname}?${new URLSearchParams(form)}`;
    router.push(url);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <select name="status" onChange={handleChange}>
        <option value="all">Tất cả trạng thái</option>
        <option value="active">Kích hoạt</option>
        <option value="inactive">Chưa kích hoạt</option>
      </select>
      <input
        type="search"
        name="query"
        placeholder="Từ khóa..."
        onChange={handleChange}
      />
      <button>Tìm kiếm</button>
    </form>
  );
};

export default ProductForm;
