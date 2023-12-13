"use client";
import React, { useState } from "react";
const Provider = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Ẩn</button>
      <hr />
      {show && children}
    </>
  );
};

export default Provider;
