import { useState, useTransition } from "react";
import data from "./db.json";

const Students = () => {
  const [keyword, setKeyword] = useState("");
  const [pending, startTransition] = useTransition();
  const handleSearch = (e) => {
    // startTransition(() => {
    //   setKeyword(e.target.value);
    // });
    setKeyword(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Từ khóa tìm kiếm..."
        onChange={handleSearch}
      />
      <hr />
      {pending && <h3>Đang xử lý...</h3>}
      {data.map(({ id, fullName }) => {
        console.log(fullName);
        const position = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        if (keyword && position !== -1) {
          return (
            <h3 key={id}>
              {fullName.slice(0, position)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(position, position + keyword.length)}
              </span>
              {fullName.slice(position + keyword.length)}
            </h3>
          );
        }
        return <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
};

export default Students;
