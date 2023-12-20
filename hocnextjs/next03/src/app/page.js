import "./assets/style.scss";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Provider from "./components/Provider";
import img01 from "./assets/images/img01.jpg";
import Image from "next/image";

const Page = () => {
  console.log(img01);
  return (
    <Provider>
      {/* <Header /> */}
      <h1 className="border-2 border-indigo-600 mb-3 p-3 font-medium italic text-indigo-700">
        F8 - Học lập trình không khó
      </h1>
      <Image src={img01} alt="Anh 1" />
      <hr />
      <Image src="/next.svg" alt="Next Logo" width={200} height={100} />
      <hr />
      <Image
        src="https://cdnphoto.dantri.com.vn/b4RDAEMgXkKFf2f_n5px5Lynu4Q=/zoom/1032_688/2023/12/20/z4991094320807f60a97f7acc5272bc1c9e3e6a5b34620-1703036172762.jpg"
        alt="ABC"
        width={300}
        height={200}
        quality={10}
      />
      <hr />
      <div style={{ width: "50%" }}>
        <Image
          src="https://files.fullstack.edu.vn/f8-prod/blog_posts/8305/652932d659462.png"
          alt="F8"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* <Posts /> */}
    </Provider>
  );
};

export default Page;
