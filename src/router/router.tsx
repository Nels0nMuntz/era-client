import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { Board } from "@/pages";
import { APP_PATHS } from "./paths";

export const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />}>
      <Route path={APP_PATHS.board.path} element={<Board />} />
      <Route path='/' element={<Navigate to={APP_PATHS.board.path} replace />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>,
  ),
);
