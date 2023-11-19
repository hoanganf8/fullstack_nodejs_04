import { useState, useMemo, useCallback } from "react";
import Histories from "./Histories";

const MoneyTransfer = () => {
  const [histories, setHistories] = useState([]);
  const [money, setMoney] = useState("");
  const total = useMemo(() => {
    return histories.reduce((prev, current) => {
      console.log("total");
      return prev + current;
    }, 0);
  }, [histories]);
  const handleClearHistories = useCallback(() => {
    setHistories([]);
  }, []);
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setHistories([...histories, +money]);
          setMoney("");
        }}
      >
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={(e) => setMoney(e.target.value)}
          value={money}
        />
      </form>
      <Histories
        histories={histories}
        total={total}
        onClearHistories={handleClearHistories}
      />
    </div>
  );
};

export default MoneyTransfer;
