import { createRoot } from "react-dom/client";
import App from "./ts/App";
import "./scss/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
