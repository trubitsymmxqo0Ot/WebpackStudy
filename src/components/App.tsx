import { useState } from "react";
import "./App.scss";
export function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <div className="wrapper">
      <h1 className="title">Welcome to my Webpack bundle</h1>
      <button onClick={increment} className="count">
        {count}
      </button>
    </div>
  );
}
