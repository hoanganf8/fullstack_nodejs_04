import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export const metadata = {
  title: "Sản phẩm",
};

const Products = ({ searchParams: { status, query } }) => {
  return (
    <div>
      <h2>Status: {status}</h2>
      <h2>Query: {query}</h2>
      <ProductForm />
    </div>
  );
};

export default Products;

//Url: http://localhost:3000/products?status=active&query=abc
