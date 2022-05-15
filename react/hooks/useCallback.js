import React, { useState, useCallback } from "react";

const Counter = ({ increment }) => {
  return <button onClick={increment}>increase</button>;
};
const App = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);
  return (
    <div>
      <p>Count : {count}</p>
      <Counter increment={increment} />
    </div>
  );
};

export default App;
