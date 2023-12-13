"use client";
import { useState } from "react";
import useSWR from "swr";

const provinceApi = `http://localhost:3000/api/provinces`;
const districtApi = `http://localhost:3000/api/district`;
const fetcher = (url) => fetch(url).then((res) => res.json());
const Page = () => {
  //Call API để trả về các select option
  //Yêu cầu: Dùng swr
  const [provinceId, setProvinceId] = useState();
  const { data: provinces } = useSWR(provinceApi, fetcher, {
    fallbackData: { data: [] },
  });
  const { data: districts } = useSWR(`${districtApi}/${provinceId}`, fetcher, {
    fallbackData: { data: [] },
  });

  return (
    <div>
      <h1>Checkout</h1>
      <select onChange={(e) => setProvinceId(e.target.value)}>
        <option value="">Chọn Tỉnh/Thành phố</option>
        {provinces.data.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <select>
        <option value="">Chọn Quận/Huyện</option>
        {districts.data.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Page;
