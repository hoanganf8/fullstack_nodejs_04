/* eslint-disable react/prop-types */
import { ProviderContext } from "../core/Provider";
import { useContext } from "react";
const Counter = () => {
  const { state, dispatch } = useContext(ProviderContext);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
    });
    //dispatch(action)
    /* Action là 1 object bao gồm 2 thuộc tính
        {
          type: 'ten_action',
          payload: 'data của action'
        }
        */
  };

  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
