/* eslint-disable react/prop-types */
import { memo } from "react";
const Histories = memo(function Histories({
  histories,
  total,
  onClearHistories,
}) {
  console.log("history");
  return (
    <div>
      <h2>Lịch sử</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <h2>
        Tổng:
        {total}
      </h2>
      <button onClick={onClearHistories}>Xóa lịch sử</button>
    </div>
  );
});

export default Histories;
