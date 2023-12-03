const Posts = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>Tin tức</h1>
    </div>
  );
};

export default Posts;

//Dynamic router --> Bắt buộc
//Optional Params
