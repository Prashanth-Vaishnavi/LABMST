import { useState } from "react";
import Button from "./Button";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-box">

      <h2 className="counter-number">{count}</h2>

      <div className="buttons">
        <Button text="➕ Increment" onClick={increment} />
        <Button text="➖ Decrement" onClick={decrement} />
        <Button text="🔄 Reset" onClick={reset} />
      </div>

    </div>
  );
}

export default Counter;