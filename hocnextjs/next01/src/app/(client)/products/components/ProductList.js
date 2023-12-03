"use client";

import { useState } from "react";

const ProductList = () => {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h1>Products</h1>
      {status && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          perferendis debitis, inventore cum quae ad rerum eius provident
          aliquam dolores doloribus consequatur soluta unde aperiam corporis
          ipsum, iste ea natus.
        </p>
      )}
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        Thu gọn
      </button>
    </div>
  );
};

export default ProductList;
