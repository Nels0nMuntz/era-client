import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router";
import './index.css'

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(<RouterProvider router={browserRouter} />);
