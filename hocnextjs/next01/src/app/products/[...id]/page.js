const ProductDetail = ({ params }) => {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <h2>Chuyên mục: {id[0]}</h2>
      <h2>Sản phẩm: {id[1]}</h2>
    </div>
  );
};

export default ProductDetail;
