import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    console.log(email, password);
    setForm({
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

/*
useEffect(callback, deps) --> Xử lý các Side Effect (Công việc bên lề, chạy sau khi update UI)
1. state thay đổi
2. Re-render
3. UI Update
4. Callback trong useEffect hoạt động (Nếu deps thỏa mãn điều kiện)

Deps sẽ xảy ra các trường hợp sau:
- null hoặc undefined --> Component re-render: callback sẽ chạy
- [] --> Component render lần đầu tiên: callback sẽ chạy
- [var1, var2,...] --> 1 trong các biến trong deps thay đổi --> Callback sẽ chạy
*/
