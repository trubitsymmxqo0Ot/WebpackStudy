import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./style.scss";
const root = document.getElementById("root");
if (!root) throw new Error("root is not found");

const container = createRoot(root);
container.render(<App />);
