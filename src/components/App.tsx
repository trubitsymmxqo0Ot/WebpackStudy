import { useState } from "react";
export function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      <button onClick={increment}>{count}</button>
      <div>Hello world</div>
    </div>
  );
}
