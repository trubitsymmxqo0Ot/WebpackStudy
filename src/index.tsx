import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.scss";
const root = document.getElementById("root");
if (!root) console.error("root is not found");
const container = createRoot(root);
container.render(<App />);
