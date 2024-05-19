import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const queryClient = new QueryClient();

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const container = createRoot(root);

container.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={browserRouter} />{" "}
  </QueryClientProvider>,
);
