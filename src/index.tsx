import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { browserRouter } from "./router";
import "./index.css";

const queryClient = new QueryClient();

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}
const container = createRoot(root);

container.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={browserRouter} />
    <Toaster />
  </QueryClientProvider>,
);
